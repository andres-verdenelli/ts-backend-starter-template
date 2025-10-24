# ts-backend-starter-template

Minimal **TypeScript backend** starter focused on great **DX** (Developer Experience) with **zero non‑essential runtime deps**. Uses **ESM**, **tsx** for fast dev (no build in dev), and a tiny HTTP healthcheck so you can start coding immediately.

> Keep it boring: start small, add only what you need.

---

## Features

- ⚙️ **TypeScript (strict, ESM)** with NodeNext resolution
- 🚀 **tsx** dev runner (`watch`) — no build required while developing
- 🧹 **ESLint + Prettier** preconfigured and non‑conflicting
- 📝 **.editorconfig** and **.nvmrc** for consistent editing & Node version
- 🧪 Minimal **/health** endpoint using Node’s native `http` (no Express)
- 🧱 Project layout ready for services/domain/lib/store
- 🧳 No logs/time/DB libs by default — add only when needed

---

## Requirements

- **Node.js 22.x** (use `nvm use` if you have nvm and `.nvmrc`)
- npm 10+

---

## Getting Started

```bash
# install deps
npm install

# run in dev (watch via tsx)
npm run dev
# -> Server listening on http://localhost:3000

# build & run compiled code
npm run build
npm run start
```

Healthcheck:

```bash
curl http://localhost:3000/health
# { "ok": true, "uptime": 3, "env": "development" }
```

---

## Scripts

- `dev` — start in watch mode with **tsx**
- `build` — compile TS → `dist/`
- `start` — run compiled app
- `lint` — run ESLint
- `format` — run Prettier

---

## Configuration

- Copy `.env.example` → `.env` and export variables in your shell when needed:
  ```bash
  export $(grep -v '^#' .env | xargs)   # bash/zsh shortcut
  ```
- This template does **not** auto‑load `.env` (no `dotenv`) to keep runtime deps at zero. Add it later if you want.

---

## Code Style

- **Prettier** is the source of truth for formatting.
- **ESLint** handles code quality / TypeScript rules.
- The config prefers:
  - no semicolons
  - single quotes
  - tabs (visual width 2)
  - bracket spacing on
  - print width 100
- ESLint ignores `dist/`. Prettier and ESLint can be run with:
  ```bash
  npm run format
  npm run lint
  ```

---

## License

MIT
