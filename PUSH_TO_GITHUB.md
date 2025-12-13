# Pushing to GitHub - Quick Guide

Your design system is ready to push! Follow these steps:

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: **DS-Bridge**
3. Description: "White-label design system built with Vue 3, Vite, and Vuetify 3"
4. **Public** or **Private** (your choice)
5. Do NOT initialize with README (we have one)
6. Click "Create repository"

## Step 2: Update Git Remote URL

Replace `yourusername` with your actual GitHub username:

```bash
cd /Users/cdunbar/Repos/DS-Bridge/design-system

# Update the remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/DS-Bridge.git

# Verify it's correct
git remote -v
```

**Example:**
```bash
git remote set-url origin https://github.com/chadunbar/DS-Bridge.git
```

## Step 3: Push to GitHub

```bash
git push -u origin main
```

You should see:
```
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
...
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## Step 4: Verify on GitHub

Go to https://github.com/YOUR_USERNAME/DS-Bridge

You should see:
- ✅ All files and folders
- ✅ Git commit history
- ✅ README displayed
- ✅ Branch: main

## Step 5: Create GitHub Issues

Option A: Manual Creation
```
1. Go to https://github.com/YOUR_USERNAME/DS-Bridge/issues
2. Click "New issue"
3. Copy from .github/ISSUES_TEMPLATE.md
4. Paste title and body
5. Add labels
6. Create issue
7. Repeat for all 8 issues
```

Option B: Using GitHub CLI (if installed)
```bash
# First, login to GitHub
gh auth login

# Create Issue #1
gh issue create \
  --title "Add TypeScript support to all source files" \
  --body "See .github/ISSUES_TEMPLATE.md for full details" \
  --label "enhancement,priority-high,typescript" \
  --assignee @me

# Repeat for issues #2-#8
```

## Step 6: Create Milestone (Optional but Recommended)

1. Go to https://github.com/YOUR_USERNAME/DS-Bridge/milestones
2. Click "New milestone"
3. Title: **Session #2 - Enterprise Foundation**
4. Description: "Transform MVP into enterprise-ready design system"
5. Create milestone
6. Assign all 8 issues to this milestone

## All Set! 🚀

Your design system is now on GitHub ready for:
- ✅ Collaboration with team members
- ✅ Issue tracking
- ✅ Pull request reviews
- ✅ CI/CD automation
- ✅ GitHub Pages for docs (future)

---

## Troubleshooting

**"fatal: repository not found"**
- Make sure you replaced `yourusername` with your actual username
- Make sure the repository exists on GitHub
- Check that you have SSH key or credentials set up

**"Permission denied"**
- Check your GitHub credentials
- Make sure you're using the correct SSH key or personal access token

**"Everything up-to-date"**
- Remote is already up to date (repository is already clean)
- Continue to Step 5 to create issues

---

## Quick Reference

**Your Repository URL:**
```
https://github.com/YOUR_USERNAME/DS-Bridge.git
```

**Git command to verify connection:**
```bash
git remote -v
```

**Test push (if already pushed):**
```bash
git log --oneline origin/main
```

Good luck! 🎉
