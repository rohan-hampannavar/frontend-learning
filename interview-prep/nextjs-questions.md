# Next.js Interview Questions

### 1. SSG vs SSR vs ISR?
SSG: rendered at build time. SSR: rendered on every request. ISR: SSG with revalidate - rebuilds in background.

### 2. App Router vs Pages Router?
App Router (Next 13+): src/app/, React Server Components, layouts, streaming. Pages Router: older, pages/, getStaticProps/getServerSideProps.

### 3. What are React Server Components?
Components that render on server only - no bundle sent to client, can access DB directly, cannot use hooks.

### 4. What does 'use client' do?
Marks a component as Client Component - can use hooks, event handlers, browser APIs.

### 5. How to handle metadata in Next.js 14?
Export a metadata object or generateMetadata function from any page.tsx or layout.tsx.

### 6. What is revalidatePath?
Server Action helper that purges Next.js cache for a given route, triggering fresh fetch on next visit.

### 7. How does the Image component help?
Auto lazy loading, WebP conversion, responsive srcset, blur placeholder.
