# Setup Instructions

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Contact Form

The contact form uses Web3Forms for email delivery. To set it up:

1. Visit [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Get your Access Key
4. Create a `.env.local` file (copy from `.env.local.example`):
   ```bash
   cp .env.local.example .env.local
   ```
5. Add your access key to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```
6. Update the contact form to use the environment variable in `src/app/contact/page.tsx`:
   ```typescript
   access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
   ```

## 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 4. Build for Production

```bash
npm run build
npm start
```

## Optional Enhancements

### Add Google Analytics
1. Get your GA4 Measurement ID from Google Analytics
2. Add it to `.env.local`
3. Install `@next/third-parties`:
   ```bash
   npm install @next/third-parties
   ```
4. Add to `layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   // In the component
   <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
   ```

### Deploy to Vercel
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add your environment variables in Vercel dashboard
5. Deploy!

## Notes

- Make sure to add `.env.local` to `.gitignore` (already included)
- Never commit your actual access keys to version control
- The contact form will show an error until you configure the access key
