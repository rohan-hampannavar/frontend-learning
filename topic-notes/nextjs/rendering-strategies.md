# Rendering Strategies - SSR vs SSG vs ISR

| Strategy | When | Cache |
|----------|------|-------|
| SSG | fetch(url) default | Built once, CDN |
| ISR | next: { revalidate: 60 } | Rebuilt in background |
| SSR | cache: no-store | Never cached |

## Rule of thumb
Marketing pages -> SSG | Product pages -> ISR | User dashboard -> SSR
