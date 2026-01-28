# GitHub Setup Guide

## ✅ Git Repository Initialized

Your portfolio is now a Git repository! Here's how to connect it to GitHub:

---

## 🚀 Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `behar-portfolio` (or any name you prefer)
4. Description: "Professional portfolio website - Web Design & Development"
5. Choose: **Public** (so people can see your work) or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

---

## 🔗 Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see instructions. Run these commands:

```bash
cd /home/behar/Desktop/behar-portfolio

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional portfolio with all features"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/behar-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 📝 Step 3: First Commit (Already Done)

I've initialized Git for you. To make your first commit:

```bash
cd /home/behar/Desktop/behar-portfolio
git add .
git commit -m "Initial commit: Professional portfolio with all features"
```

---

## 🔄 Step 4: Regular Updates

After making changes, commit and push:

```bash
# See what changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push
```

---

## 🌐 Step 5: Deploy to Vercel (Optional but Recommended)

1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click **"Deploy"**
6. Your site will be live in 2-3 minutes!

**Benefits:**
- Free hosting
- Automatic deployments on every push
- Custom domain support
- SSL certificate included

---

## 📋 What's Included in .gitignore

The following files/folders are **NOT** tracked by Git (for security):

- `node_modules/` - Dependencies (can be reinstalled)
- `.next/` - Build files (regenerated on build)
- `.env*` - Environment variables (API keys, secrets)
- `.vercel/` - Vercel deployment files

**Important:** Never commit `.env` files with API keys or secrets!

---

## 🔐 Security Checklist

Before pushing to GitHub, make sure:

- [ ] No `.env` files are committed (they're in .gitignore ✓)
- [ ] No API keys in code
- [ ] No passwords in code
- [ ] Sensitive data removed

---

## 📊 Repository Structure

Your repository will include:
- ✅ All source code
- ✅ Components and pages
- ✅ Configuration files
- ✅ Documentation (README, guides)
- ✅ Marketing materials (flyer, business card)
- ❌ NOT included: node_modules, .env, build files

---

## 🎯 Quick Commands Reference

```bash
# Check status
git status

# See changes
git diff

# Add all changes
git add .

# Commit
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# See commit history
git log
```

---

## 💡 Pro Tips

1. **Commit Often**: Small, frequent commits are better than large ones
2. **Good Commit Messages**: Be descriptive (e.g., "Add pricing calculator" not "update")
3. **Branch Strategy**: Use branches for new features (optional for solo projects)
4. **README.md**: Add a README to explain your project (I can help create one!)

---

## 🆘 Need Help?

If you encounter issues:

1. **Authentication**: GitHub now requires personal access tokens instead of passwords
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token with `repo` permissions
   - Use token as password when pushing

2. **Merge Conflicts**: If you have conflicts, I can help resolve them

3. **Deployment Issues**: Vercel has great documentation and support

---

**Ready to push to GitHub?** Follow Step 1 and Step 2 above, and your portfolio will be on GitHub! 🚀
