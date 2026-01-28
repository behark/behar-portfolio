# Contact Form Setup Guide

## Overview

The contact form uses **Web3Forms** - a free, privacy-focused form service that doesn't require a backend server.

## Step-by-Step Setup

### 1. Get Your API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Sign Up"
3. Enter your email address
4. Check your email for the access key (it will look like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 2. Configure Environment Variables

1. Create a file named `.env.local` in the root of your project (same level as `package.json`)
2. Add the following line:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

**Important**: Replace `your_access_key_here` with your actual access key from Web3Forms.

### 3. Restart Development Server

After adding the environment variable:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### 4. Test the Form

1. Navigate to `/contact` page
2. Fill out the form
3. Submit and check your email (the email you used to sign up for Web3Forms)

## Production Deployment

### For Vercel:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add:
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your access key
4. Redeploy your site

### For Other Platforms:

Add the environment variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to your hosting platform's environment variable settings.

## Troubleshooting

### Form Not Working?

1. **Check API Key**: Make sure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set correctly
2. **Check Console**: Open browser DevTools (F12) and check for errors
3. **Verify Key**: Make sure you copied the entire access key (it's a long string)
4. **Restart Server**: After adding `.env.local`, you must restart the dev server

### Not Receiving Emails?

1. Check your spam folder
2. Verify the email address you used to sign up for Web3Forms
3. Check Web3Forms dashboard for submission logs
4. Make sure your email provider isn't blocking the emails

### Error Messages

- **"API key not configured"**: The environment variable is missing or incorrect
- **"Form submission failed"**: Check your API key or Web3Forms account status
- **Network errors**: Check your internet connection

## Alternative: Use Your Own Email Service

If you prefer to use a different service, you can modify `src/components/ContactPageContent.tsx` to use:
- SendGrid
- Mailgun
- AWS SES
- Or any other email service API

## Security Notes

- ✅ The API key is safe to expose in `NEXT_PUBLIC_*` variables (it's public by design)
- ✅ Web3Forms includes built-in spam protection
- ✅ No backend server required
- ✅ Free tier includes 250 submissions/month

## Need Help?

If you encounter issues:
1. Check the [Web3Forms Documentation](https://docs.web3forms.com)
2. Verify your environment variables are set correctly
3. Check browser console for error messages
4. Test with a simple form submission

---

**Quick Checklist:**
- [ ] Signed up for Web3Forms account
- [ ] Received access key via email
- [ ] Created `.env.local` file
- [ ] Added `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to `.env.local`
- [ ] Restarted development server
- [ ] Tested form submission
- [ ] Received test email
