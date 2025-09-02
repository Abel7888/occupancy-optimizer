# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3fa019d7-bc74-4b80-b9fe-d158e569f562

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3fa019d7-bc74-4b80-b9fe-d158e569f562) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3fa019d7-bc74-4b80-b9fe-d158e569f562) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

# Right: Smart Tenant Acquisition & Retention (API-first)

An API-first platform that ingests leasing + marketing data, predicts high-value tenants (prospects and in-place), recommends incentives, and auto-optimizes ad spend to maximize occupancy at lower CAC.

## Must-haves (MVP)
- OAuth login (Google) and API key per organization
- Connectors (read-only MVP): HubSpot, Salesforce, Yardi/RealPage exports, Google Ads, LinkedIn Ads, Zillow (CSV/API). Webhook intake + scheduled pulls
- Unified Prospect/Resident 360 (identity resolution across CRMs + ad platforms)
- LTV & Churn models (baseline): logistic for conversion, gradient boosting for 12‑mo LTV proxy
- Multi-touch attribution (first/last + time-decay; Shapley optional) and budget recommender under spend cap
- Incentive engine: recommend offer types (rent credit, gift card, fee waiver) based on predicted uplift and policy guardrails
- REST API + minimal dashboard for insights and overrides
- Daily report (CSV/PDF) with channel ROI, suggested budget shifts, and watchlist (at‑risk residents)

## Backend structure (planned)
```
backend/
  app.py               # FastAPI routes
  auth.py              # Google OAuth + API key middleware
  db.py                # SQLAlchemy engine/session
  models.py            # ORM entities
  schemas.py           # Pydantic DTOs
  etl/
    loaders.py         # CSV/API loaders (HubSpot/SF/Yardi/Ads)
    identity.py        # matching & stitching
  ml/
    features.py        # feature building
    propensity.py      # logistic baseline
    ltv.py             # gradient boosting baseline
    churn.py           # logistic baseline
    attribution.py     # time-decay + optional Shapley
    optimizer.py       # budget solve
    incentives.py      # offer selection
  worker.py            # RQ/Celery tasks
  reports.py           # CSV/PDF generation
  requirements.txt
  Dockerfile
```

## Additional recommendations
- Keep raw ads/CRM logs in Parquet/DuckDB; persist aggregates in Postgres for the app
- Nightly full sync + hourly incremental where available; HMAC verification for inbound webhooks
- Explainable modeling: log feature importances and reason codes into `scores.extras`
- Add experiment flags for incentives and creatives; human approval for budget pushes
- PII encryption at rest; field‑level access by role; audit log for reco accept/reject

## TODO Roadmap

### Frontend (this repo)
- [ ] Integrate dashboard sections: Overview, Channels, Prospects, Residents, Properties, Reports
- [ ] Create shared components: `KpiCard`, `DataTable`, `TrendChart`, `SideNav`, `TopNav`
- [ ] Hook to `/api/...` endpoints with React Query; loading and error states
- [ ] Add settings page to manage API keys and connectors (UI only for MVP)

### Backend (new `backend/` service)
- [ ] Scaffold FastAPI app with auth (Google OAuth) and API-key middleware
- [ ] Define ORM models and migrations; connect Postgres
- [ ] Implement ingestion endpoints `/v1/import/csv`, `/v1/webhooks/{provider}`
- [ ] Implement insights endpoints (summary, channel recommendations, scores)
- [ ] Implement PDF/CSV report generation

### Data & ML
- [ ] Identity resolution (deterministic + probabilistic) and entity stitching
- [ ] Baseline models: propensity (logistic), LTV (GBM), churn (logistic)
- [ ] Attribution: time-decay; optional Shapley/Markov approximation
- [ ] Budget optimizer (greedy to start; constraints-aware)
- [ ] Incentives policy engine with guardrails

### DevOps
- [ ] Docker Compose for db/api/web; local dev `docker compose up`
- [ ] Seed/demo data scripts (properties, channels, 3 months logs, prospects, apps, residents)
- [ ] Monitoring/logging baseline; rate limiting and request logging

### Security & Compliance
- [ ] Encrypt PII (email, phone) at rest; redact logs
- [ ] Role-based access; audit log for recommendation actions
- [ ] Webhook HMAC verification; rate-limit inbound webhooks

### Nice-to-haves
- [ ] A/B experiment manager for incentives/creatives
- [ ] Slack alerts for budget push and watchlist events

---

The current dashboard UI in this repo serves as the exact design shell. As backend endpoints become available, we will connect the sections accordingly.
