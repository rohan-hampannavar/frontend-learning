# App Router (Next.js 13+)

- page.tsx - the actual page component
- layout.tsx - wraps all pages in that folder
- loading.tsx - Suspense fallback
- error.tsx - error boundary (use client required)
- not-found.tsx - 404 page

## Server vs Client components
Default = Server Component (no hooks, no events)
Add use client at top for hooks/events
