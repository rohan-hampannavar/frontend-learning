# DAY 001 — Setup + Git Init + LinkedIn + GitHub Profile

**Date: 17-03-26** 
<br>
**Hours Spent: 5 Hours**

---

## 🎯 Daily Goal

GitHub live with first commit. LinkedIn published. Profile README visible.

---

## ⚙️ Environment Setup

Installed:

* VS Code (Stable)
* Node.js (LTS)
* Git

Verified:

```bash
node -v
npm -v
git --version
```

All commands returned valid versions.

---

## 🔧 Git Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --list
```

Confirmed:

* user.name ✔
* user.email ✔

---

## 📁 Project Setup

```bash
mkdir frontend-practice
cd frontend-practice
git init
```

Created initial file:

```bash
echo "# Frontend Practice" > README.md
```

---

## 🚀 First Commit + Push

```bash
git add README.md
git commit -m "docs: initialize repo with README"
```

Connected to GitHub:

```bash
git remote add origin <repo-url>
git branch -M main
git push -u origin main
```

---

## 🧠 Core Git Understanding

Git has 3 stages:

Working Directory → Staging Area → Repository

* `git add` → moves changes to staging
* `git commit` → saves snapshot
* `git push` → sends to GitHub

---

## 🧪 Practice Done

* Used `git add filename` vs `git add .`
* Created multiple commits
* Checked history:

```bash
git log --oneline
```

---

## 🌐 Profile Setup

### GitHub

* Profile photo added
* Bio set: *Frontend Developer in training*
* Location added
* Profile README repo created (same as username)

### LinkedIn

* Headline set:
  **Aspiring Frontend Developer | HTML · CSS · JavaScript · React**
* Profile updated with photo + summary

---

## ❌ Mistakes / Issues

(Be specific — no vague statements)

Example:

* git push failed due to missing remote
* forgot to set git config initially

---

## 🔧 Fixes

* Added remote using `git remote add origin`
* Reconfigured Git identity

---

## 📌 Proof

* GitHub Repo: frontend-learning/daily-notes/phase-1
* GitHub Profile: github.com/rohan-hampannavar
* LinkedIn: https://www.linkedin.com/in/rohanhampannavar/ 

---

## 🚀 Next (Day 2)

* HTML semantic structure
* Build 5 pages (no div soup)
