# Rulehaven

Rulehaven is a self-hostable B2B compliance control plane for institutions operating supported Arbitrum dedicated chains.

## Foundation

This repository currently establishes the application/runtime foundation only:
- Next.js App Router with React and TypeScript
- Node 24/npm
- Tailwind CSS/PostCSS and shadcn configuration foundation
- GitHub Codespaces/devcontainer
- local PostgreSQL and MinIO/S3-compatible development services
- ESLint, TypeScript, production build, and GitHub Actions CI
- approved Rulehaven SVG/PNG assets
- minimal public shell

Authenticated operations, policy/domain logic, Nitro integration, S3 publication workflows, filtering reports, final control-panel UX, deployment, and final QA are outside Batch 01.

## Prerequisites

- Node.js 24.21.0 LTS
- npm 11.19.0 or later within npm 11
- Docker Desktop or another Docker/Compose runtime for local services
- Git
- GitHub Codespaces access for the devcontainer workflow

## First setup

1. Add the Batch 01 files from the Coding Chat reply.
2. Copy `.env.example` to `.env`.
3. Install dependencies:

    `npm install`

`npm install` creates the required `package-lock.json`. After the lockfile exists, use `npm ci` for clean installs.

## Local development

Start the application:

    npm run dev

Open http://localhost:3000.

## Local services

Start PostgreSQL and MinIO:

    docker compose up -d

Check service state:

    docker compose ps

PostgreSQL is exposed on `localhost:5432`.

MinIO S3-compatible API is exposed on `localhost:9000`.

MinIO console is exposed on `localhost:9001`.

Stop local services:

    docker compose down

## Quality checks

    npm run lint
    npm run typecheck
    npm run build

Start the production build locally after a successful build:

    npm start

## Codespaces

Open the repository in GitHub Codespaces.

The devcontainer:
- uses the Node 24 TypeScript development image;
- provides Docker-in-Docker for local Compose services;
- forwards ports 3000, 5432, 9000, and 9001;
- runs `npm ci` after container creation.

Start the app with:

    npm run dev

Use the forwarded port preview for the Rulehaven web app.

## Repository structure

- `src/app/` — public/application routes and layouts
- `public/brand/` — approved Rulehaven brand assets
- `.devcontainer/` — Codespaces development environment
- `.github/workflows/` — continuous integration
- `compose.yaml` — development-only PostgreSQL and MinIO services

Future domain directories are intentionally not created as empty placeholders in Batch 01.

## Environment and secrets

`.env.example` contains development-only configuration examples.

Create a local `.env` from it. `.env` is ignored by Git.

Do not commit production credentials, provider keys, customer infrastructure secrets, or other real secrets.

## Logo assets

Keep the supplied Rulehaven logo assets exactly as provided.

The rendered foundation shell uses `public/brand/rulehaven-mark.svg`.