# longevity-ecommerce

An (WIP) ecommerce for selling healthcare and longevity products

## Stack and architecture

It's a monorepo with the following structure:

- apps/
  - customer-ui/ # Next.js app for customers (frontend)

- packages/
  - api/ # Shared types and backend communication layer
  - ui-components/ # Shared Chakra UI + Tailwind component library

### Tech stack

Framework: Next.js

UI Components: Chakra UI

Styling: Tailwind CSS

Data fetching & caching: TanStack Query

Monorepo tooling: pnpm workspaces

TypeScript for static typing

## Note:

This project is currently a work in progress (WIP).
New features and modules (like admin dashboards and APIs) will be added progressively.

## Goals

Build a scalable architecture for ecommerce apps.

Create reusable UI components and an API abstraction layer.

Experiment with modern React patterns (Server Components, Suspense, Infinite Scroll, etc.).

Focus on performance, accessibility, and developer experience.
