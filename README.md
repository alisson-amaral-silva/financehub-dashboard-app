# 📊 FinanceHub - Dashboard Microfrontend

This is the **Dashboard MFE** for FinanceHub - a microfrontend that provides balance cards, quick actions, and recent transactions overview.

## 🏗️ Architecture

This MFE is part of the FinanceHub microfrontend ecosystem:

```
┌─────────────────────────────────────────────────────┐
│                   Shell (Host)                       │
│              financehub-shell repo                   │
│                                                      │
│    ┌──────────────────────────────────────────┐     │
│    │          THIS MFE (Remote)                │     │
│    │     financehub-mfe-dashboard repo        │     │
│    │                                          │     │
│    │  Exposes:                                │     │
│    │  • Dashboard (full page)                 │     │
│    │  • BalanceCards                          │     │
│    │  • QuickActions                          │     │
│    │  • RecentTransactions                    │     │
│    └──────────────────────────────────────────┘     │
│                                                      │
└─────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Standalone Development

```bash
# Install dependencies
npm install

# Start development server (port 3001)
npm run dev

# Open browser
open http://localhost:3001
```

### Build for Production

```bash
# Create production build
npm run build

# The dist/ folder will contain:
# - remoteEntry.js (Module Federation entry point)
# - main.[hash].js (bundled code)
# - vendors.[hash].js (vendor chunk)
```

## 📦 Exposed Modules

This MFE exposes the following components via Module Federation:

| Module                 | Path                | Description                            |
| ---------------------- | ------------------- | -------------------------------------- |
| `./Dashboard`          | Full dashboard page | Complete dashboard with all components |
| `./BalanceCards`       | Balance overview    | Total balance, income, expenses cards  |
| `./QuickActions`       | Action buttons      | Add money, send, request, pay bill     |
| `./RecentTransactions` | Transaction list    | Latest transactions preview            |

## 📚 Related Repositories

| Repository                                                                       | Description      |
| -------------------------------------------------------------------------------- | ---------------- |
| [financehub-shell](https://github.com/alisson-amaral-silva/financehub-shell-app) | Host application |