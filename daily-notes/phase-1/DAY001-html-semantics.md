# Day 001 - Setup + Git + Document Structure + Semantics + Global Attributes + Parsing
Date: 16-03-26
Hours spent: 4 hours

## What I studied
- Installed VS Code, Node.js LTS, Git — verified with `node -v`, `npm -v`, `git --version`
- Set up git config `user.name` and `user.email`
- Created GitHub account with professional photo, bio, location
- Created repo `frontend-practice` — cloned, first commit, pushed
- Git basics: `git init`, `git add`, `git commit`, `git push`
- LinkedIn profile set up with headline "Aspiring Frontend Developer | HTML · CSS · JavaScript · React"
- GitHub Profile README written with introduction, skills, current focus
- DOCTYPE and why it matters — quirks mode vs standards mode
- `html lang`, `dir`, full `head` breakdown: `meta charset`, `meta viewport`, `title`, `base`
- `link rel`: stylesheet, icon, canonical, alternate, manifest
- Resource hints: `preload`, `prefetch`, `preconnect`, `dns-prefetch`
- `script`: `defer` vs `async` vs blocking — execution order
- `noscript` fallback for users without JavaScript
- Block vs inline vs inline-block distinction
- Sectioning elements: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`
- When to use `section` vs `article` vs `div` — with real examples
- `h1–h6` document outline rules — only one `h1` per page
- `figure/figcaption` — not just for images
- `details/summary` — native accordion, zero JS needed
- `dialog` — native modal element
- `template` — inert DOM fragment
- Text elements: `address`, `blockquote`, `cite`, `q`, `abbr`, `dfn`, `kbd`, `samp`, `var`, `code`, `pre`
- `time datetime` — machine-readable dates
- `mark`, `del`, `ins`, `s` — content changes
- `wbr`, `bdi`, `bdo` — text direction control
- Global attributes: `id`, `class`, `style`, `title`, `lang`, `dir`
- `hidden` vs `display:none` — semantic difference
- `tabindex` — 0, -1, positive (avoid positive)
- `contenteditable`, `draggable`, `spellcheck`, `translate`
- `data-*` custom attributes — `dataset` API in JS
- `inert` — disables entire subtrees from interaction
- How browsers parse HTML — tokenization, tree construction
- DOM vs CSSOM construction
- Render blocking vs non-render blocking resources
- Why `script` at bottom was old pattern vs `defer` today
- `document.readyState` — `loading`, `interactive`, `complete`
- `DOMContentLoaded` vs `load` event difference

---

## What clicked today
- The difference between `section` and `article` — `article` makes sense completely on its own outside the page (like an RSS feed item), `section` is just a thematic grouping within a page
- Why `defer` beats putting scripts at the bottom of body — `defer` downloads in parallel AND guarantees execution order, bottom-of-body doesn't
- `details/summary` gives a fully working native accordion with zero JavaScript — this should replace custom accordion components in most cases
- `hidden` is semantic (this content doesn't exist right now), `display:none` is purely visual (hide this) — they look the same but mean different things to screen readers
- `data-*` attributes are how HTML and JS communicate cleanly without polluting class names with JS hooks
- `inert` disables ALL interaction on a subtree at once — clicks, keyboard, find-in-page — perfect for background content behind an open modal
- `DOMContentLoaded` fires when HTML is parsed and DOM is ready. `load` fires only after every resource (images, fonts, scripts) has downloaded. Almost always want `DOMContentLoaded`
- `preload` = fetch this resource NOW for current page. `prefetch` = fetch for the NEXT page. `preconnect` = just open the TCP connection early. Three different things despite sounding similar

---

## Code I actually wrote

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Blog</title>

    <!-- Resource hints -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />

    <!-- Stylesheet -->
    <link rel="stylesheet" href="styles.css" />

    <!-- Deferred script — downloads in parallel, executes after HTML parsed -->
    <script src="app.js" defer></script>

    <!-- Fallback for users with JS disabled -->
    <noscript>
      <p>Please enable JavaScript for the best experience.</p>
    </noscript>
  </head>

  <body>

    <!-- Skip navigation — first focusable element on page -->
    <a href="#main" class="skip-link">Skip to main content</a>

    <header>
      <nav aria-label="Primary navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main id="main">

      <article>
        <header>
          <h1>Understanding Closures in JavaScript</h1>
          <p>
            By <address><a href="/author">John Doe</a></address>
            on <time datetime="2024-03-15">March 15, 2024</time>
          </p>
        </header>

        <section>
          <h2>What is a Closure?</h2>
          <p>
            A closure is a function that <mark>retains access</mark>
            to its lexical scope even after the outer function has returned.
          </p>

          <!-- code block — pre preserves whitespace, code marks it as code -->
          <pre><code>function counter() {
  let count = 0;
  return () => ++count;
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3</code></pre>
        </section>

        <section>
          <h2>Key Terms</h2>
          <dl>
            <dt><dfn>Lexical scope</dfn></dt>
            <dd>The scope defined by where a function is written, not where it is called.</dd>

            <dt><dfn>Closure</dfn></dt>
            <dd>A function bundled with its surrounding lexical environment.</dd>
          </dl>
        </section>

        <section>
          <h2>Keyboard Shortcuts Used in Examples</h2>
          <p>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open DevTools.</p>
          <p>Sample output: <samp>counter {[[Scopes]]: Scopes[2]}</samp></p>
        </section>

        <section>
          <h2>Important Notes</h2>
          <!-- del + ins show content that changed -->
          <p>
            <del>Closures are hard to understand.</del>
            <ins>Closures become clear with practice.</ins>
          </p>
          <!-- blockquote for external quotes -->
          <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
            A closure is the combination of a function and the lexical environment
            within which that function was declared.
            <cite>— MDN Web Docs</cite>
          </blockquote>
        </section>

        <section>
          <h2>FAQ</h2>
          <!-- details/summary = native accordion, zero JS -->
          <details>
            <summary>Why do closures matter?</summary>
            <p>They enable private state, factory functions, and memoization patterns.</p>
          </details>
          <details>
            <summary>Are closures unique to JavaScript?</summary>
            <p>No. Most modern languages including Python, Rust, and Swift support closures.</p>
          </details>
          <details>
            <summary>When does a closure cause a memory leak?</summary>
            <p>When a closure holds a reference to a large object that is no longer needed but cannot be garbage collected.</p>
          </details>
        </section>

        <figure>
          <img
            src="closure-diagram.png"
            alt="Diagram showing a closure capturing variables from its outer scope"
            width="800"
            height="450"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            How a closure captures and retains its lexical environment
          </figcaption>
        </figure>

      </article>

      <aside aria-label="Related articles">
        <h2>Related</h2>
        <ul>
          <li><a href="/scope">Understanding Scope</a></li>
          <li><a href="/hoisting">Hoisting Explained</a></li>
          <li><a href="/this">The 'this' Keyword</a></li>
        </ul>
      </aside>

    </main>

    <footer>
      <p>
        <small>&copy; <time datetime="2024">2024</time> My Blog. All rights reserved.</small>
      </p>
    </footer>

    <!-- Native modal using dialog element -->
    <dialog id="subscribe-modal" aria-labelledby="modal-title">
      <h2 id="modal-title">Subscribe to Newsletter</h2>
      <p>Get new articles delivered directly to your inbox.</p>
      <button
        type="button"
        onclick="document.getElementById('subscribe-modal').close()"
      >
        Close
      </button>
    </dialog>

    <!-- Template element — inert, not rendered, cloned by JS -->
    <template id="article-card-template">
      <article class="card">
        <h3 class="card__title"></h3>
        <p class="card__excerpt"></p>
        <a class="card__link" href="#">Read more</a>
      </article>
    </template>

  </body>
</html>
```

```html
<!-- GITHUB PROFILE README — index.html equivalent = README.md -->
# Hi, I'm [Your Name] 👋

**Aspiring Frontend Developer** focused on building clean, accessible, performant web applications.

## 🛠️ Current Stack
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

## 📌 Current Focus
- Following a structured 140-day Frontend Engineering Roadmap
- Building projects with HTML, CSS, JavaScript, React, Next.js, TypeScript
- Solving LeetCode problems daily

## 📫 Reach Me
- LinkedIn: [your-linkedin]
- Portfolio: [your-portfolio-url]
- Email: [your-email]
```

```bash
# Terminal commands run today
node -v           # v20.x.x
npm -v            # 10.x.x
git --version     # git version 2.x.x

git config --global user.name "Your Name"
git config --global user.email "your@email.com"

git init
git add README.md
git commit -m "feat: initial commit — add README"
git remote add origin https://github.com/username/frontend-practice.git
git push -u origin main
```

---

## What confused me
- The difference between `preload`, `prefetch`, and `preconnect` — all sound like performance hints but do very different things
- When to nest `article` inside `section` vs `section` inside `article` — which wraps which
- `async` vs `defer` — both are non-blocking but execute at completely different times
- `inert` attribute — hard to visualize when to actually reach for it
- `DOMContentLoaded` vs `load` — why two separate events exist and which one to use
- `abbr` vs `dfn` — both seem to explain terms but serve different purposes

---

## How I unblocked myself
- **preload vs prefetch vs preconnect** — drew a timeline: `preconnect` just opens the TCP handshake (no download), `preload` downloads the full resource right now for current page, `prefetch` downloads at low priority for the NEXT page navigation
- **article vs section nesting** — the `article` test: can I drop this content into an RSS feed and it still makes complete sense? Yes = `article`. No = `section`. Sections live inside articles, not the other way around for blog content
- **async vs defer** — `async` runs the script the moment it finishes downloading, potentially before HTML is parsed (risky). `defer` waits until full HTML is parsed, then runs scripts in order (safe). `defer` is almost always the right choice
- **inert** — think of it as "freeze this entire region." Open a modal → add `inert` to everything behind it → background content becomes completely unreachable by keyboard, mouse, and screen reader in one attribute. Removing `inert` restores everything
- **DOMContentLoaded vs load** — `DOMContentLoaded` = DOM is ready, images may still be downloading. `load` = absolutely everything on the page has finished downloading. For DOM manipulation, always use `DOMContentLoaded`
- **abbr vs dfn** — `abbr` marks an abbreviation and provides its expansion (`title="HyperText Markup Language"`). `dfn` marks the defining instance of a term — where it is first defined on the page. They are different jobs

---

## Tomorrow
- [ ] Forms — every input type, fieldset/legend, datalist, native validation API
- [ ] Media — picture, srcset, sizes, video with track, iframe sandbox
- [ ] Tables — scope, headers attribute, responsive patterns
- [ ] Security — SRI, crossorigin, referrerpolicy, CSP meta, noopener noreferrer
- [ ] Build accessible multi-step form with 8+ input types
- [ ] Build responsive data table with correct scope and headers
- [ ] Build responsive image with picture + WebP source
- [ ] Commit everything to GitHub
- [ ] Validate all pages on W3C Markup Validator — zero errors
