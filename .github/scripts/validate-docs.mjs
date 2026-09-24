#!/usr/bin/env node
// Validates docs.json without a docs toolchain:
//   1. docs.json is well-formed JSON.
//   2. Every internal sidebar href resolves to a real file under docs/.
// External links (http/https) are skipped. Referenced-but-missing pages fail
// the build; docs files that exist but are never referenced are reported as
// non-fatal warnings.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, 'docs');
const CONFIG = join(ROOT, 'docs.json');

/** Resolve a sidebar href to a candidate file path, or null if external. */
function candidatesFor(href) {
  if (typeof href !== 'string') return null;
  if (/^https?:\/\//i.test(href) || href.startsWith('#')) return null;
  let rel = href.replace(/^\/+/, '');
  if (rel === '') rel = 'index';
  return [
    join(DOCS_DIR, `${rel}.mdx`),
    join(DOCS_DIR, `${rel}.md`),
    join(DOCS_DIR, rel, 'index.mdx'),
    join(DOCS_DIR, rel, 'index.md'),
  ];
}

/** Depth-first collect every `href` string in the sidebar tree. */
function collectHrefs(node, out) {
  if (Array.isArray(node)) {
    for (const item of node) collectHrefs(item, out);
    return;
  }
  if (node && typeof node === 'object') {
    if (typeof node.href === 'string') out.push(node.href);
    if (Array.isArray(node.pages)) collectHrefs(node.pages, out);
    if (Array.isArray(node.groups)) collectHrefs(node.groups, out);
  }
}

function listDocFiles(dir, out) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) listDocFiles(full, out);
    else if (/\.mdx?$/.test(entry)) out.push(full);
  }
}

function main() {
  if (!existsSync(CONFIG)) {
    console.error('✖ docs.json not found at repo root');
    process.exit(1);
  }

  let config;
  try {
    config = JSON.parse(readFileSync(CONFIG, 'utf8'));
  } catch (err) {
    console.error(`✖ docs.json is not valid JSON: ${err.message}`);
    process.exit(1);
  }

  if (!Array.isArray(config.sidebar)) {
    console.error('✖ docs.json is missing a "sidebar" array');
    process.exit(1);
  }

  const hrefs = [];
  collectHrefs(config.sidebar, hrefs);

  const errors = [];
  const referenced = new Set();
  for (const href of hrefs) {
    const candidates = candidatesFor(href);
    if (candidates === null) continue; // external link
    const hit = candidates.find((c) => existsSync(c));
    if (hit) referenced.add(relative(ROOT, hit));
    else {
      errors.push(
        `  ${href} → expected one of: ${candidates
          .map((c) => relative(ROOT, c))
          .join(', ')}`,
      );
    }
  }

  const allDocs = [];
  if (existsSync(DOCS_DIR)) listDocFiles(DOCS_DIR, allDocs);
  const orphans = allDocs
    .map((f) => relative(ROOT, f))
    .filter((f) => !referenced.has(f));

  console.log(
    `Checked ${hrefs.length} sidebar links against ${allDocs.length} doc files.`,
  );

  if (orphans.length) {
    console.log(`\n⚠ ${orphans.length} doc file(s) not referenced in sidebar:`);
    for (const o of orphans) console.log(`  ${o}`);
  }

  if (errors.length) {
    console.error(`\n✖ ${errors.length} sidebar link(s) point to missing files:`);
    for (const e of errors) console.error(e);
    process.exit(1);
  }

  console.log('\n✓ docs.json is valid and every sidebar link resolves.');
}

main();
