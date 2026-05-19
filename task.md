You are working inside ~/Portfolio-Projects/StepFi-Docs.
This is a docs.page documentation site for the StepFi protocol.

Read the existing docs.json and docs/ files first before 
making any changes.

TASK 1 — Update docs.json with full StepFi configuration:

{
  "name": "StepFi Protocol",
  "description": "Open-source BNPL protocol on Stellar for learners in emerging markets. Credit without banks. Progress without limits.",
  "favicon": "https://stepfi.vercel.app/favicon.png",
  "logo": {
    "light": "https://stepfi.vercel.app/favicon.png",
    "dark": "https://stepfi.vercel.app/favicon.png"
  },
  "theme": {
    "defaultTheme": "dark",
    "primary": "#22C55E",
    "primaryDark": "#22C55E",
    "backgroundDark": "#080F1A"
  },
  "header": {
    "showName": true,
    "showGitHubCard": true,
    "links": [
      { "title": "Landing Page", "href": "https://stepfi.vercel.app" },
      { "title": "API Docs", "href": "https://stepfi-api.onrender.com/api/v1/docs" },
      { "title": "Demo", "href": "https://stepfi.vercel.app/demo" }
    ]
  },
  "social": {
    "github": "StepFi-app/StepFi-Docs"
  },
  "sidebar": [
    {
      "pages": [
        { "title": "Overview", "href": "/", "icon": "book" },
        { "title": "Architecture", "href": "/architecture", "icon": "sitemap" },
        { "title": "Quick Start", "href": "/quick-start", "icon": "rocket" }
      ]
    },
    {
      "group": "Protocol",
      "icon": "shield",
      "pages": [
        { "title": "How It Works", "href": "/protocol/how-it-works", "icon": "circle-dot" },
        { "title": "Learner Flow", "href": "/protocol/learner-flow", "icon": "graduation-cap" },
        { "title": "Sponsor Flow", "href": "/protocol/sponsor-flow", "icon": "building-bank" },
        { "title": "Mentor Vouching", "href": "/protocol/mentor-vouching", "icon": "award" },
        { "title": "Reputation System", "href": "/protocol/reputation", "icon": "star" }
      ]
    },
    {
      "group": "Smart Contracts",
      "icon": "code",
      "pages": [
        { "title": "Overview", "href": "/contracts/overview", "icon": "layout-grid" },
        { "title": "Creditline", "href": "/contracts/creditline", "icon": "credit-card" },
        { "title": "Reputation", "href": "/contracts/reputation", "icon": "star" },
        { "title": "Liquidity Pool", "href": "/contracts/liquidity-pool", "icon": "droplet" },
        { "title": "Vendor Registry", "href": "/contracts/vendor-registry", "icon": "building-store" },
        { "title": "Parameters", "href": "/contracts/parameters", "icon": "settings" }
      ]
    },
    {
      "group": "API Reference",
      "icon": "api",
      "pages": [
        { "title": "Overview", "href": "/api/overview", "icon": "layout-grid" },
        { "title": "Authentication", "href": "/api/authentication", "icon": "lock" },
        { "title": "Loans", "href": "/api/loans", "icon": "credit-card" },
        { "title": "Reputation", "href": "/api/reputation", "icon": "star" },
        { "title": "Vendors", "href": "/api/vendors", "icon": "building-store" },
        { "title": "Liquidity", "href": "/api/liquidity", "icon": "droplet" },
        { "title": "Vouching", "href": "/api/vouching", "icon": "award" },
        { "title": "Sponsors", "href": "/api/sponsors", "icon": "building-bank" },
        { "title": "Playground", "href": "/api/playground", "icon": "player-play" }
      ]
    },
    {
      "group": "Mobile App",
      "icon": "device-mobile",
      "pages": [
        { "title": "Overview", "href": "/mobile/overview", "icon": "layout-grid" },
        { "title": "Wallet Connection", "href": "/mobile/wallet-connection", "icon": "wallet" },
        { "title": "Screens", "href": "/mobile/screens", "icon": "device-mobile" }
      ]
    },
    {
      "group": "Contributing",
      "icon": "git-pull-request",
      "pages": [
        { "title": "Overview", "href": "/contributing/overview", "icon": "layout-grid" },
        { "title": "Code Standards", "href": "/contributing/code-standards", "icon": "code" },
        { "title": "Smart Contracts", "href": "/contributing/contracts", "icon": "file-code" },
        { "title": "Backend", "href": "/contributing/backend", "icon": "server" },
        { "title": "Mobile", "href": "/contributing/mobile", "icon": "device-mobile" }
      ]
    }
  ]
}

TASK 2 — Create all documentation files:

Create docs/index.mdx:
---
title: StepFi Protocol
description: Open-source BNPL on Stellar for learners in emerging markets
---

# Welcome to StepFi

StepFi is an open-source Buy Now Pay Later protocol built on Stellar, designed to give learners, interns, and early-career developers in emerging markets access to credit without banks.

<Cards>
  <Card title="Quick Start" href="/quick-start" icon="rocket">
    Get up and running with StepFi in minutes.
  </Card>
  <Card title="How It Works" href="/protocol/how-it-works" icon="circle-dot">
    Understand the StepFi protocol end to end.
  </Card>
  <Card title="Smart Contracts" href="/contracts/overview" icon="code">
    5 Soroban contracts deployed on Stellar testnet.
  </Card>
  <Card title="API Reference" href="/api/overview" icon="api">
    13 modules. REST plus JWT. Live Swagger docs.
  </Card>
</Cards>

## What is StepFi?

StepFi enables learners to finance laptops, courses, bootcamps, and dev tools through installment-based loans backed by a sponsor liquidity pool — all secured by Soroban smart contracts on the Stellar blockchain.

### Key Features

- **No banks required**: Wallet-based authentication via Freighter and Lobstr
- **On-chain reputation**: Credit score built from repayment history
- **Sponsor yield**: Sponsors earn APY by funding the liquidity pool
- **Mentor vouching**: Senior developers vouch for learners to improve their terms
- **Open source**: MIT licensed, 37 labeled issues for contributors

## Live Deployments

| Resource | URL |
|---|---|
| Landing Page | https://stepfi.vercel.app |
| API (Swagger) | https://stepfi-api.onrender.com/api/v1/docs |
| Interactive Demo | https://stepfi.vercel.app/demo |
| GitHub | https://github.com/StepFi-app |

## Deployed Contracts (Stellar Testnet)

| Contract | ID |
|---|---|
| Creditline | CAQDHYG3TALPNXG466SZUMJEPOI7VYV732LPFF3GHE4ASPBCNMIQBS3X |
| Reputation | CC3BO57ZRJGA63QJBIBSOMI25Z3X2I5CYTARYRAUXUAILX6L3OWBL5SB |
| Liquidity Pool | CACKE7ML2BTOAGQTAAW5NEARHCFX4PXXKGEO6GMU6NHFBVYQFZRJS2BT |
| Vendor Registry | CCZ6T6NYCDNI26VGTPXKKWQDR7JCIZZ24LCEG4MMYHZJAG6BPWIVAU2L |
| Parameters | CCAE72SKYX55C5L56DBEFIMFVXRUIJY6JYLBREHEWRFNOW7AX5NBIJ5B |

---

Create docs/architecture.mdx:
---
title: Architecture
description: How StepFi's three repos work together
---

# Architecture

StepFi is built across three repositories that work together as one protocol.

## System Overview
StepFi-App (React Native + Expo)
|
| REST + JWT
v
StepFi-API (NestJS + Fastify)
|                    |
| Unsigned XDR        | SQL queries
v                    v
Soroban Contracts      Supabase (PostgreSQL)
(Stellar Ledger)             |
|                    | Cache
|              Redis (Upstash)
v
Stellar Horizon
(Transaction submit)

## Repositories

### StepFi-API
NestJS backend with Fastify adapter. Handles wallet authentication, 
unsigned XDR construction, and off-chain data storage.

- **Runtime**: Node.js 20
- **Framework**: NestJS v11 with Fastify
- **Database**: Supabase (PostgreSQL)
- **Cache**: Redis via Upstash
- **Auth**: Stellar wallet signatures plus JWT tokens
- **Live**: https://stepfi-api.onrender.com/api/v1/docs

### StepFi-Contracts
5 Soroban smart contracts written in Rust, deployed on Stellar testnet.

- **Language**: Rust
- **Runtime**: Soroban WASM
- **Network**: Stellar Testnet
- **Release**: v1.0.0 with all WASM artifacts

### StepFi-App
React Native mobile app built with Expo.

- **Framework**: React Native + Expo SDK 52
- **Navigation**: Expo Router
- **State**: Zustand
- **Wallets**: Freighter + Lobstr (WalletConnect v2)
- **Build**: EAS Build

## Data Flow

### Loan Application Flow
1. Learner connects wallet (Freighter or Lobstr)
2. App calls POST /api/v1/auth/nonce
3. Learner signs nonce with their wallet
4. App calls POST /api/v1/auth/verify with signed nonce
5. API verifies signature on Stellar network
6. API returns JWT access token + refresh token
7. Learner submits loan application
8. API builds unsigned XDR calling creditline.create_loan()
9. App prompts learner to sign XDR with their wallet
10. API submits signed XDR to Stellar Horizon
11. Transaction confirmed on ledger
12. Loan record created in Supabase

---

Create docs/quick-start.mdx:
---
title: Quick Start
description: Get started contributing to StepFi
---

# Quick Start

StepFi welcomes contributors through the Stellar Drips Wave program.

## Prerequisites

Before contributing, make sure you have:

- Git
- Node.js 20 or later
- Rust with wasm32-unknown-unknown target
- Stellar CLI v22 or later

## Pick an Issue

Browse open issues across all repos:

<Cards>
  <Card title="StepFi-Contracts Issues" href="https://github.com/StepFi-app/StepFi-Contracts/issues">
    Rust and Soroban smart contract work
  </Card>
  <Card title="StepFi-API Issues" href="https://github.com/StepFi-app/StepFi-API/issues">
    NestJS backend and API work
  </Card>
  <Card title="StepFi-App Issues" href="https://github.com/StepFi-app/StepFi-App/issues">
    React Native mobile app work
  </Card>
</Cards>

## Contribution Flow

<Steps>
  <Step title="Fork the repo">
    Fork the relevant repository to your GitHub account.
  </Step>
  <Step title="Create a branch">
```bash
    git checkout -b feat/your-feature-name
```
  </Step>
  <Step title="Read the context files">
    Every repo has a context/ folder with architecture, 
    code standards, and progress tracker. Read these first.
  </Step>
  <Step title="Make your changes">
    Follow the code standards in context/code-standards.md.
    Run tests before pushing.
  </Step>
  <Step title="Open a PR">
    Reference the issue number in your PR description.
    Example: Closes #5
  </Step>
  <Step title="Get reviewed and merged">
    Once approved and merged, your contribution is live.
  </Step>
</Steps>

---

Create docs/protocol/how-it-works.mdx:
---
title: How It Works
description: The StepFi protocol end to end
---

# How StepFi Works

StepFi connects three participants: learners who need credit, 
sponsors who provide liquidity, and mentors who vouch for learners.

## Participants

### Learner
A developer, student, or intern in an emerging market who needs 
to finance a laptop, course, or dev tool. They connect their 
Stellar wallet, build a profile, and apply for installment loans.

### Sponsor
An individual, company, or DAO that deposits USDC into the 
StepFi liquidity pool. In return, they earn yield from 
interest paid by learners.

### Mentor
A senior developer with high reputation who vouches for 
learners. A vouch boosts the learner's reputation score, 
unlocking better loan terms.

## The Credit Flow
Sponsor deposits → Liquidity Pool
|
Learner applies
|
Mentor vouches (optional)
|
Loan approved
|
Installments repaid
|
Reputation increases
|
Sponsor earns yield

## Reputation Tiers

| Tier | Score | Interest Rate | Credit Limit |
|---|---|---|---|
| Starter | 0 to 59 | 10% APR | $1,000 |
| Bronze | 60 to 74 | 8% APR | $2,500 |
| Silver | 75 to 89 | 6% APR | $5,000 |
| Gold | 90 to 100 | 4% APR | $10,000 |

---

Create docs/protocol/learner-flow.mdx:
---
title: Learner Flow
description: How a learner uses StepFi from start to finish
---

# Learner Flow

## Step 1: Connect Wallet

The learner connects their Stellar wallet (Freighter or Lobstr). 
Their wallet address becomes their identity in the protocol. 
No email, no password, no KYC required.

## Step 2: Complete Profile

After connecting, the learner completes a profile:
- Full name and bio
- Country and city
- Current role (Student, Intern, Early-career Dev, Freelancer)
- Skills (JavaScript, Rust, Python, React Native, and more)
- What they want to finance (Laptop, Course, Bootcamp, Dev Tools)

## Step 3: Apply for a Loan

The learner browses verified vendors and selects what they 
want to finance. They choose:
- Loan amount
- Number of installments (3, 6, or 12 months)
- The loan details are calculated based on their reputation tier

## Step 4: Loan Approved

An admin approves the loan, transitioning it from Pending 
to Active on the creditline contract.

## Step 5: Repay in Installments

Each month, the learner repays one installment. Every 
on-time payment increases their reputation score.

## Step 6: Build Reputation

Over time, the learner builds an on-chain credit history. 
Higher reputation unlocks lower interest rates and higher 
credit limits.

---

Create docs/protocol/sponsor-flow.mdx:
---
title: Sponsor Flow
description: How a sponsor earns yield on StepFi
---

# Sponsor Flow

## Step 1: Connect Wallet

Sponsors connect their Stellar wallet and complete a 
sponsor profile (name, organization type, focus area).

## Step 2: Deposit to Pool

The sponsor calls deposit() on the liquidity pool contract, 
sending USDC to the pool. In return they receive pool shares 
representing their ownership percentage.

## Step 3: Pool Funds Loans

The liquidity pool funds approved learner loans. The sponsor 
can see which loans their capital is backing.

## Step 4: Earn Yield

As learners repay installments, interest flows back to the 
pool. The sponsor's shares increase in value over time.

## Step 5: Withdraw

At any time, the sponsor can withdraw by calling withdraw() 
on the liquidity pool contract, redeeming their shares for 
USDC plus earned yield.

## Pool Stats

| Metric | Description |
|---|---|
| Total Value | Total USDC in the pool |
| Available | Capital available for new loans |
| Locked | Capital currently backing active loans |
| APY | Annual yield based on loan interest |
| Share Price | Current value of one pool share |

---

Create docs/protocol/mentor-vouching.mdx:
---
title: Mentor Vouching
description: How mentor vouching works in StepFi
---

# Mentor Vouching

Mentor vouching is a trust mechanism that lets senior 
developers stake their reputation to help learners 
access better loan terms.

## How It Works

1. A learner requests a vouch from a mentor
2. The mentor reviews the learner's profile and loan request
3. If satisfied, the mentor calls vouch() on the vouching contract
4. The learner's reputation score increases by up to 12 points
5. Better score means lower interest rate and higher credit limit

## Vouch Effects

| Mentor Tier | Reputation Boost | Duration |
|---|---|---|
| Bronze (60 to 74) | +6 points | 3 months |
| Silver (75 to 89) | +12 points | 6 months |
| Gold (90 to 100) | +18 points | 12 months |

## Risk to Mentor

If the learner defaults on their loan, the mentor's 
reputation score decreases proportionally. This creates 
a strong incentive for mentors to only vouch for 
learners they trust.

## Contract Status

<Warning>
The vouching contract is currently in development. 
It will be deployed in Phase 2. See issue #4 on 
StepFi-Contracts for implementation details.
</Warning>

---

Create docs/protocol/reputation.mdx:
---
title: Reputation System
description: How on-chain reputation works in StepFi
---

# Reputation System

StepFi's reputation system is fully on-chain, powered 
by the reputation contract on Stellar testnet.

## Score Calculation

A learner's score starts at 50 and changes based on:

| Event | Score Change |
|---|---|
| On-time installment payment | +2 to +6 |
| Late payment (within grace period) | -2 |
| Missed payment | -8 |
| Profile completion | +8 |
| Mentor vouch (Silver tier) | +12 |
| Loan fully repaid | +10 |
| Default | -30 |

## Reputation Tiers

| Tier | Score Range | Interest Rate | Credit Limit |
|---|---|---|---|
| Starter | 0 to 59 | 10% APR | $1,000 |
| Bronze | 60 to 74 | 8% APR | $2,500 |
| Silver | 75 to 89 | 6% APR | $5,000 |
| Gold | 90 to 100 | 4% APR | $10,000 |

## Contract

Reputation Contract: CC3BO57ZRJGA63QJBIBSOMI25Z3X2I5CYTARYRAUXUAILX6L3OWBL5SB

[View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CC3BO57ZRJGA63QJBIBSOMI25Z3X2I5CYTARYRAUXUAILX6L3OWBL5SB)

---

Create docs/contracts/overview.mdx:
---
title: Smart Contracts Overview
description: All 5 StepFi Soroban contracts
---

# Smart Contracts

StepFi runs on 5 Soroban smart contracts deployed on 
Stellar testnet. All contracts are open source, 
MIT licensed, and verified.

## Deployed Contracts

| Contract | ID | Explorer |
|---|---|---|
| Creditline | CAQDHYG3...MQBS3X | [View](https://stellar.expert/explorer/testnet/contract/CAQDHYG3TALPNXG466SZUMJEPOI7VYV732LPFF3GHE4ASPBCNMIQBS3X) |
| Reputation | CC3BO57Z...L5SB | [View](https://stellar.expert/explorer/testnet/contract/CC3BO57ZRJGA63QJBIBSOMI25Z3X2I5CYTARYRAUXUAILX6L3OWBL5SB) |
| Liquidity Pool | CACKE7ML...JS2BT | [View](https://stellar.expert/explorer/testnet/contract/CACKE7ML2BTOAGQTAAW5NEARHCFX4PXXKGEO6GMU6NHFBVYQFZRJS2BT) |
| Vendor Registry | CCZ6T6NY...AU2L | [View](https://stellar.expert/explorer/testnet/contract/CCZ6T6NYCDNI26VGTPXKKWQDR7JCIZZ24LCEG4MMYHZJAG6BPWIVAU2L) |
| Parameters | CCAE72SK...IJ5B | [View](https://stellar.expert/explorer/testnet/contract/CCAE72SKYX55C5L56DBEFIMFVXRUIJY6JYLBREHEWRFNOW7AX5NBIJ5B) |

Network: Stellar Testnet
Deployer: GCOYDYSEHRCFWGXUCMPSQ3ODEY2LGMBSVKKCOFH4NRIK4DEEDSETH7BF
Deployed: 2026-05-11
GitHub Release: [v1.0.0](https://github.com/StepFi-app/StepFi-Contracts/releases/tag/v1.0.0)

## Verification

All contract bytecodes match their compiled source. 
SHA256 hashes are published in VERIFICATION.md and 
in the GitHub Release v1.0.0.

To verify yourself:
```bash
stellar contract fetch \
  --id CAQDHYG3TALPNXG466SZUMJEPOI7VYV732LPFF3GHE4ASPBCNMIQBS3X \
  --network testnet \
  --out-file /tmp/creditline.wasm

sha256sum /tmp/creditline.wasm
```

Expected hash: 392ad2562e8836a2836695bb4ed32973bde100b243b5f695ddf2698464541c9e

---

Create docs/contracts/creditline.mdx:
---
title: Creditline Contract
description: The core BNPL lending contract
---

# Creditline Contract

The creditline contract is the core of the StepFi protocol. 
It handles loan creation, approval, and repayment.

**Contract ID**: CAQDHYG3TALPNXG466SZUMJEPOI7VYV732LPFF3GHE4ASPBCNMIQBS3X

[View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CAQDHYG3TALPNXG466SZUMJEPOI7VYV732LPFF3GHE4ASPBCNMIQBS3X)

## Functions

### create_loan()

Creates a new loan request in Pending status.

```rust
pub fn create_loan(
    env: Env,
    borrower: Address,
    vendor: Address,
    amount: i128,
    installments: u32,
    loan_type: LoanType,
) -> Loan
```

| Parameter | Type | Description |
|---|---|---|
| borrower | Address | Learner's Stellar wallet address |
| vendor | Address | Vendor's Stellar wallet address |
| amount | i128 | Loan amount in stroops |
| installments | u32 | Number of monthly payments |
| loan_type | LoanType | Standard or LearnerInstallment |

### approve_loan()

Transitions a loan from Pending to Active. Admin only.

```rust
pub fn approve_loan(env: Env, loan_id: u64) -> Loan
```

### repay_installment()

Processes a single installment payment.

```rust
pub fn repay_installment(
    env: Env,
    loan_id: u64,
    installment_index: u32,
) -> Loan
```

### get_loan()

Returns loan details by ID.

```rust
pub fn get_loan(env: Env, loan_id: u64) -> Option<Loan>
```

## Data Types

### Loan

```rust
pub struct Loan {
    pub id: u64,
    pub borrower: Address,
    pub vendor: Address,
    pub amount: i128,
    pub installments: u32,
    pub paid_installments: u32,
    pub status: LoanStatus,
    pub loan_type: LoanType,
    pub created_at: u64,
    pub repayments: Vec<RepaymentInstallment>,
}
```

### LoanStatus

```rust
pub enum LoanStatus {
    Pending,
    Active,
    Repaid,
    Defaulted,
}
```

## Events

| Event | Trigger |
|---|---|
| LOANCREATED | create_loan() succeeds |
| LOANAPPROVED | approve_loan() succeeds |
| INSTALLMENTPAID | repay_installment() succeeds |

---

Create docs/contracts/reputation.mdx:
---
title: Reputation Contract
description: On-chain credit scoring
---

# Reputation Contract

Manages on-chain reputation scores for all StepFi participants.

**Contract ID**: CC3BO57ZRJGA63QJBIBSOMI25Z3X2I5CYTARYRAUXUAILX6L3OWBL5SB

[View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CC3BO57ZRJGA63QJBIBSOMI25Z3X2I5CYTARYRAUXUAILX6L3OWBL5SB)

## Functions

### get_score()

Returns the reputation score for a wallet address.

```rust
pub fn get_score(env: Env, user: Address) -> u32
```

### update_score()

Updates a user's score. Called by the creditline contract 
after repayment events.

```rust
pub fn update_score(
    env: Env,
    user: Address,
    delta: i32,
) -> u32
```

### set_admin()

Sets the contract admin. First call seeds the admin.

```rust
pub fn set_admin(env: Env, new_admin: Address)
```

---

Create docs/contracts/liquidity-pool.mdx:
---
title: Liquidity Pool Contract
description: Sponsor capital management
---

# Liquidity Pool Contract

Manages sponsor deposits, pool shares, and yield distribution.

**Contract ID**: CACKE7ML2BTOAGQTAAW5NEARHCFX4PXXKGEO6GMU6NHFBVYQFZRJS2BT

[View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CACKE7ML2BTOAGQTAAW5NEARHCFX4PXXKGEO6GMU6NHFBVYQFZRJS2BT)

## Functions

### deposit()

Sponsor deposits USDC into the pool and receives shares.

```rust
pub fn deposit(
    env: Env,
    depositor: Address,
    amount: i128,
) -> i128
```

Returns the number of shares minted.

### withdraw()

Sponsor redeems shares for USDC plus yield.

```rust
pub fn withdraw(
    env: Env,
    withdrawer: Address,
    shares: i128,
) -> i128
```

Returns the USDC amount returned.

### get_pool_info()

Returns current pool statistics.

```rust
pub fn get_pool_info(env: Env) -> PoolInfo
```

## Data Types

### PoolInfo

```rust
pub struct PoolInfo {
    pub total_deposits: i128,
    pub total_shares: i128,
    pub share_price: i128,
    pub available_liquidity: i128,
    pub locked_liquidity: i128,
}
```

---

Create docs/contracts/vendor-registry.mdx:
---
title: Vendor Registry Contract
description: Learning vendor management
---

# Vendor Registry Contract

Stores and manages verified learning vendors on-chain.

**Contract ID**: CCZ6T6NYCDNI26VGTPXKKWQDR7JCIZZ24LCEG4MMYHZJAG6BPWIVAU2L

[View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CCZ6T6NYCDNI26VGTPXKKWQDR7JCIZZ24LCEG4MMYHZJAG6BPWIVAU2L)

## Functions

### register_vendor()

Registers a new vendor. Admin only.

```rust
pub fn register_vendor(
    env: Env,
    vendor: Address,
    name: Symbol,
    category: VendorCategory,
) -> u32
```

### get_vendor()

Returns vendor details by address.

```rust
pub fn get_vendor(env: Env, vendor: Address) -> Option<Vendor>
```

### get_vendor_count()

Returns the total number of registered vendors.

```rust
pub fn get_vendor_count(env: Env) -> u32
```

## Vendor Categories

```rust
pub enum VendorCategory {
    School,
    Bootcamp,
    Electronics,
    OnlineCourse,
    DevTools,
}
```

---

Create docs/contracts/parameters.mdx:
---
title: Parameters Contract
description: Protocol governance and configuration
---

# Parameters Contract

Stores protocol-wide configuration values that govern 
loan terms, reputation thresholds, and fee structures.

**Contract ID**: CCAE72SKYX55C5L56DBEFIMFVXRUIJY6JYLBREHEWRFNOW7AX5NBIJ5B

[View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CCAE72SKYX55C5L56DBEFIMFVXRUIJY6JYLBREHEWRFNOW7AX5NBIJ5B)

## Functions

### initialize_defaults()

Sets initial protocol parameters. Called once on deployment.

```rust
pub fn initialize_defaults(env: Env, admin: Address)
```

### get_parameters()

Returns all current protocol parameters.

```rust
pub fn get_parameters(env: Env) -> ProtocolParameters
```

### set_parameters()

Updates protocol parameters. Admin only.

```rust
pub fn set_parameters(
    env: Env,
    params: ProtocolParameters,
)
```

## Default Values

| Parameter | Default | Description |
|---|---|---|
| min_guarantee_percent | 20 | Minimum guarantee as % of loan |
| min_reputation_threshold | 50 | Minimum score to qualify |
| grace_period_days | 5 | Days before late fee applies |
| late_fee_bps | 200 | Late fee in basis points |
| large_loan_threshold | 5000 | Amount triggering extra checks |

---

Create docs/api/overview.mdx:
---
title: API Overview
description: StepFi REST API with JWT authentication
---

# API Overview

The StepFi API is a NestJS backend with 13 modules, 
serving as the bridge between the mobile app and 
the Stellar blockchain.

**Base URL**: https://stepfi-api.onrender.com/api/v1

**Interactive Docs**: [Swagger UI](https://stepfi-api.onrender.com/api/v1/docs)

## Modules

| Module | Base Path | Description |
|---|---|---|
| Auth | /auth | Wallet authentication and JWT tokens |
| Users | /users | User profile management |
| Learners | /learners | Learner profiles and data |
| Vendors | /vendors | Learning vendor registry |
| Loans | /loans | BNPL loan management |
| Transactions | /transactions | On-chain transaction tracking |
| Reputation | /reputation | On-chain reputation scores |
| Liquidity | /liquidity | Sponsor pool operations |
| Vouching | /vouching | Mentor vouching system |
| Sponsors | /sponsors | Sponsor profile management |
| Notifications | /notifications | Push notification management |
| Health | /health | API health check |
| Blockchain | /blockchain | Stellar event indexing |

## Authentication

StepFi uses wallet-based authentication. No passwords or 
emails required. See the [Authentication](/api/authentication) 
page for the full flow.

## Response Format

All endpoints return JSON with this structure:

```json
{
  "data": {},
  "message": "Success",
  "statusCode": 200
}
```

Errors follow RFC 7807:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request"
}
```

---

Create docs/api/authentication.mdx:
---
title: Authentication
description: Wallet-based auth with JWT tokens
---

# Authentication

StepFi uses Stellar wallet signatures for authentication. 
No passwords, no email, no KYC.

## Flow

<Steps>
  <Step title="Request a nonce">
```bash
    POST /api/v1/auth/nonce
    Content-Type: application/json

    {
      "walletAddress": "GCBMQ7YH2XPNM4KLWRS9JF3EVKD5A8T4X7F"
    }
```
    Response:
```json
    {
      "nonce": "stepfi_auth_a3f8b2c1d4e5",
      "expiresAt": "2026-05-14T15:30:00Z"
    }
```
  </Step>
  <Step title="Sign the nonce">
    Sign the nonce string with your Stellar wallet 
    using Freighter or Lobstr.
  </Step>
  <Step title="Verify the signature">
```bash
    POST /api/v1/auth/verify
    Content-Type: application/json

    {
      "walletAddress": "GCBMQ7YH...",
      "signature": "signed_nonce_here",
      "nonce": "stepfi_auth_a3f8b2c1d4e5"
    }
```
    Response:
```json
    {
      "accessToken": "eyJhbGc...",
      "refreshToken": "eyJhbGc...",
      "expiresIn": 3600
    }
```
  </Step>
  <Step title="Use the access token">
    Include the token in all subsequent requests:
```bash
    Authorization: Bearer eyJhbGc...
```
  </Step>
</Steps>

## Token Refresh

Access tokens expire after 1 hour. Use the refresh 
token to get a new pair:

```bash
POST /api/v1/auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGc..."
}
```

---

Create docs/api/loans.mdx:
---
title: Loans API
description: BNPL loan management endpoints
---

# Loans API

Manage BNPL loans through the StepFi API.

## Create Loan

```bash
POST /api/v1/loans
Authorization: Bearer {token}
Content-Type: application/json

{
  "vendorAddress": "GVENDOR...",
  "amount": 110000000,
  "installments": 6,
  "loanType": "LearnerInstallment"
}
```

<Info>
Amount is in stroops (1 XLM = 10,000,000 stroops). 
For USDC, 1 USDC = 10,000,000 units.
</Info>

Response returns unsigned XDR that the learner 
must sign with their wallet.

## Get Loan

```bash
GET /api/v1/loans/:id
Authorization: Bearer {token}
```

## List My Loans

```bash
GET /api/v1/loans?page=1&limit=10
Authorization: Bearer {token}
```

## Repay Installment

```bash
POST /api/v1/loans/:id/repay
Authorization: Bearer {token}
Content-Type: application/json

{
  "installmentIndex": 0
}
```

Returns unsigned XDR for the learner to sign.

---

Create docs/api/playground.mdx:
---
title: API Playground
description: Test StepFi API endpoints interactively
---

# API Playground

Test every StepFi API endpoint directly in your browser 
using the live Swagger UI.

<Warning>
The API runs on Stellar testnet. All transactions use 
testnet XLM with no real value.
</Warning>

## Launch Playground

<Card title="Open Swagger UI" href="https://stepfi-api.onrender.com/api/v1/docs" icon="player-play">
  Interactive API documentation with live request testing. 
  Test every endpoint directly in your browser.
</Card>

## Quick Test

To quickly test the API is running:

```bash
curl https://stepfi-api.onrender.com/api/v1/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2026-05-14T12:00:00Z"
}
```

## Get a Test Wallet

To test authenticated endpoints, you need a Stellar 
testnet wallet:

1. Install [Freighter](https://freighter.app) browser extension
2. Switch to Testnet in Freighter settings
3. Fund with testnet XLM from [Stellar Friendbot](https://friendbot.stellar.org)
4. Use POST /auth/nonce then POST /auth/verify to get a JWT

---

Create docs/api/reputation.mdx:
---
title: Reputation API
description: On-chain reputation score endpoints
---

# Reputation API

Query and manage on-chain reputation scores.

## Get Score

```bash
GET /api/v1/reputation/:walletAddress
```

Response:
```json
{
  "walletAddress": "GCBMQ...",
  "score": 68,
  "tier": "Bronze",
  "interestRate": 8,
  "creditLimit": 2500,
  "lastUpdated": "2026-05-14T12:00:00Z"
}
```

## Score History

```bash
GET /api/v1/reputation/:walletAddress/history
Authorization: Bearer {token}
```

Returns an array of score change events with timestamps 
and reasons.

---

Create docs/mobile/overview.mdx:
---
title: Mobile App Overview
description: StepFi React Native app
---

# Mobile App

StepFi-App is a React Native application built with 
Expo SDK 52. Currently in active development.

## Tech Stack

| Technology | Purpose |
|---|---|
| React Native | Cross-platform mobile framework |
| Expo SDK 52 | Build tools and native APIs |
| Expo Router | File-based navigation |
| Zustand | State management |
| Freighter API | Browser wallet connection |
| WalletConnect v2 | Mobile wallet connection (Lobstr) |
| EAS Build | Cloud build service |

## Current Status

The app foundation is complete:
- Navigation structure (Expo Router)
- Auth flow with wallet connection
- Zustand stores for wallet, user, and app state
- Service layer (auth, loans, reputation)
- SecureStore for token persistence
- EAS Build configured

Screens under active development:
- Learner onboarding form
- Home dashboard
- Loan application wizard
- Reputation score screen
- Sponsor portfolio

## Preview Build

An Android preview APK is available:

[Download Preview APK](https://expo.dev/accounts/itighiseemmanuel/projects/stepfi-app/builds/05dac15e-7e0c-4a12-a26f-52681e67d537)

Or scan the QR code at [stepfi.vercel.app/docs](https://stepfi.vercel.app/docs)

---

Create docs/mobile/wallet-connection.mdx:
---
title: Wallet Connection
description: Freighter and Lobstr integration
---

# Wallet Connection

StepFi supports two Stellar wallets.

## Freighter

Freighter is a browser extension wallet built by the 
Stellar Development Foundation. Most trusted in the 
Stellar ecosystem.

**Package**: @stellar/freighter-api

```typescript
import {
  isConnected,
  getPublicKey,
  signTransaction,
} from '@stellar/freighter-api'

const connectFreighter = async () => {
  const connected = await isConnected()
  if (!connected) throw new Error('Freighter not installed')
  const publicKey = await getPublicKey()
  return publicKey
}
```

## Lobstr

Lobstr is the most popular mobile Stellar wallet in 
emerging markets. Connects via WalletConnect v2.

**Package**: @walletconnect/web3wallet

```typescript
const connectLobstr = async () => {
  const client = await Web3Wallet.init({
    core: new Core({ projectId: WALLETCONNECT_PROJECT_ID }),
    metadata: { name: 'StepFi', description: '...', url: '...', icons: [] }
  })
  // Show QR code for user to scan with Lobstr
  // Return the connected wallet address
}
```

## Signing Transactions

Both wallets sign unsigned XDR returned by the API:

```typescript
const signAndSubmit = async (unsignedXdr: string) => {
  const signedXdr = await signTransaction(unsignedXdr, {
    networkPassphrase: Networks.TESTNET,
  })
  await api.post('/transactions/submit', { signedXdr })
}
```

---

Create docs/contributing/overview.mdx:
---
title: Contributing Overview
description: How to contribute to StepFi
---

# Contributing to StepFi

StepFi is an open-source project welcoming contributors 
through the Stellar Drips Wave program.

## Open Issues

<Cards>
  <Card title="8 Contract Issues" href="https://github.com/StepFi-app/StepFi-Contracts/issues">
    Rust and Soroban: repay_installment tests, vouching 
    contract, late fees, upgrade functions
  </Card>
  <Card title="17 API Issues" href="https://github.com/StepFi-app/StepFi-API/issues">
    NestJS: unit tests, endpoints, caching, rate limiting, 
    contract client wiring
  </Card>
  <Card title="11 App Issues" href="https://github.com/StepFi-app/StepFi-App/issues">
    React Native: wallet integration, screens, onboarding, 
    loan wizard, reputation UI
  </Card>
</Cards>

## Issue Labels

| Label | Meaning |
|---|---|
| good first issue | Great for first-time contributors. No deep protocol knowledge needed. |
| medium | Requires reading the context files and understanding the architecture. |
| hard | Deep expertise needed. Complex protocol logic or cross-contract calls. |

## Before You Start

Every repo has a context/ folder. Read these files first:

- context/architecture-context.md
- context/code-standards.md
- context/progress-tracker.md
- context/ai-workflow-rules.md

These files contain everything you need to contribute 
correctly, including file conventions, naming rules, 
and what not to change.

---

Create docs/contributing/code-standards.mdx:
---
title: Code Standards
description: Standards that apply to all StepFi repos
---

# Code Standards

These standards apply across all three StepFi repositories.

## Universal Rules

- Read context/ files before writing any code
- Update context/progress-tracker.md with every PR
- Never commit secrets, keys, or credentials
- Every PR must reference an issue number

## Backend (NestJS)

- Zero TypeScript errors: npm run build must pass
- No any types anywhere in the codebase
- Every new endpoint needs full Swagger decorators:
  @ApiOperation, @ApiResponse, @ApiTags
- Every schema change needs a new Supabase migration file
- Services handle business logic, controllers handle HTTP only
- No direct Supabase calls in controllers

## Smart Contracts (Rust/Soroban)

- require_auth() must be the first line of every mutating function
- extend_ttl() must be called after every persistent storage write
- All 93 existing tests must still pass with every PR
- New tests required for every new function
- No .unwrap() or .expect() on user-facing paths

## Mobile (React Native)

- No hardcoded hex colors: use constants/colors.ts only
- No API calls in screen files: use services/ only
- Every screen needs loading, error, and empty states
- Lucide React Native for all icons
- npx expo export --platform web must pass

---

Create docs/contributing/contracts.mdx:
---
title: Contributing to Smart Contracts
description: How to contribute Rust/Soroban code
---

# Contributing to Smart Contracts

## Setup

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Add WASM target
rustup target add wasm32-unknown-unknown

# Install Stellar CLI
cargo install --locked stellar-cli --version 22.8.1 --features opt
```

## Build

```bash
cd ~/Portfolio-Projects/StepFi-Contracts

# Build all contracts
cargo build --target wasm32-unknown-unknown --release

# Run tests
cargo test --manifest-path contracts/creditline-contract/Cargo.toml
```

## Test Requirements

Every PR to StepFi-Contracts must:

1. Pass all existing tests (currently 96)
2. Add new tests for every new function
3. Test the happy path, error cases, and auth failures

## PR Checklist

- [ ] cargo build passes with zero errors
- [ ] All 96 existing tests still pass
- [ ] require_auth() is first line of every mutating function
- [ ] extend_ttl() called after every persistent storage write
- [ ] New tests written for every new function
- [ ] context/progress-tracker.md updated
- [ ] PR references the issue number

---

Create docs/contributing/backend.mdx:
---
title: Contributing to the API
description: How to contribute NestJS backend code
---

# Contributing to the API

## Setup

```bash
cd ~/Portfolio-Projects/StepFi-API
cp .env.example .env
# Fill in your environment variables
npm install
npm run build
```

## Architecture
src/
modules/
auth/         Wallet auth and JWT
learners/     Learner profiles
vendors/      Vendor registry
loans/        BNPL loan management
reputation/   On-chain reputation
liquidity/    Sponsor pool
vouching/     Mentor vouching
sponsors/     Sponsor profiles
health/       Health check
jobs/
nonce-cleanup/  Expired nonce cleanup
blockchain/
stellar.service.ts  Horizon client

## PR Checklist

- [ ] npm run build passes with zero TypeScript errors
- [ ] No new any types
- [ ] Full Swagger decorators on all new endpoints
- [ ] Migration file for any schema changes
- [ ] Unit tests for new service methods
- [ ] context/progress-tracker.md updated
- [ ] PR references the issue number

---

Create docs/contributing/mobile.mdx:
---
title: Contributing to the Mobile App
description: How to contribute React Native code
---

# Contributing to the Mobile App

## Setup

```bash
cd ~/Portfolio-Projects/StepFi-App
npm install
npx expo start
```

## Architecture
app/
(auth)/         Auth screens (sign-in, onboarding)
(tabs)/         Main app tabs
components/       Reusable UI components
services/         API service layer
stores/           Zustand state stores
hooks/            Custom React hooks
constants/        Colors, config, types

## Design System

All colors come from constants/colors.ts. Never 
hardcode hex values in component files.

All icons use Lucide React Native. Never use 
other icon libraries.

## PR Checklist

- [ ] No hardcoded hex colors
- [ ] No API calls in screen files
- [ ] Loading, error, and empty states all handled
- [ ] Lucide React Native for all icons
- [ ] npx expo export --platform web passes
- [ ] context/progress-tracker.md updated
- [ ] PR references the issue number

---

TASK 3 — Commit and push everything:
gh repo create StepFi-app/StepFi-Docs \
  --public \
  --description "StepFi Protocol — Full documentation" \
  git remote add origin https://github.com/StepFi-app/StepFi-Docs
git push -u origin main


git add .
git commit -m "docs: complete StepFi protocol documentation"
git push origin main

Report: commit hash + confirm all files created.
List every file created.
