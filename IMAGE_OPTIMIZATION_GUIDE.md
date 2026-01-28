# Image Optimization Guide

## 📁 Directory Structure

Images are organized in the following structure:

```
public/
  images/
    hero/
      hero-background.jpg          # Main hero section background
    portfolio/
      arbanabeauty.jpg             # Portfolio project images
      fussballschule.jpg
      taxi-luigi.jpg
      kroi-auto-center.jpg
      kiiltoloisto.jpg
      ani-auto-salon.jpg
      digiscreen-kosovo.jpg
      lebendigkeitsberatung.jpg
    og/
      og-image.jpg                 # OpenGraph image for social sharing
```

---

## 🖼️ Required Images

### 1. Hero Background Image
**File**: `public/images/hero/hero-background.jpg`
- **Size**: 1920x1080px (or larger, 16:9 aspect ratio)
- **Format**: JPG (optimized, quality 80-85%)
- **File Size**: < 500KB
- **Purpose**: Main hero section background
- **Current Source**: [Unsplash - Workspace](https://unsplash.com/photos/photo-1553877522-43269d4ea984)

### 2. OpenGraph Image (Social Sharing)
**File**: `public/images/og/og-image.jpg`
- **Size**: 1200x630px (exact dimensions for social media)
- **Format**: JPG (optimized, quality 85%)
- **File Size**: < 200KB
- **Purpose**: Image shown when sharing on Facebook, Twitter, LinkedIn
- **Current Source**: [Unsplash - Team Meeting](https://unsplash.com/photos/photo-1521737604893-d14cc237f11d)

### 3. Portfolio Project Images
**Files**: `public/images/portfolio/*.jpg`
- **Size**: 1200x800px (or similar, 3:2 aspect ratio)
- **Format**: JPG (optimized, quality 80-85%)
- **File Size**: < 300KB each
- **Purpose**: Portfolio project showcase images

**Required Files**:
- `arbana-beauty.jpg` - Beauty salon website
- `fussballschule.jpg` - Football school website
- `taxi-luigi.jpg` - Taxi service website
- `kroi-auto-center.jpg` - Auto service center
- `kiiltoloisto.jpg` - Car detailing service
- `ani-auto-salon.jpg` - Auto salon
- `digiscreen-kosovo.jpg` - Digital marketing agency
- `lebendigkeitsberatung.jpg` - Life coaching website

---

## 📥 How to Add Images

### Option 1: Download from Unsplash (Current Sources)

1. **Hero Background**:
   - Visit: https://unsplash.com/photos/photo-1553877522-43269d4ea984
   - Click "Download" → Choose size (1920x1080 or larger)
   - Save as `hero-background.jpg` in `public/images/hero/`

2. **OpenGraph Image**:
   - Visit: https://unsplash.com/photos/photo-1521737604893-d14cc237f11d
   - Click "Download" → Choose size (1200x630)
   - Save as `og-image.jpg` in `public/images/og/`

3. **Portfolio Images**:
   - Download from the original Unsplash URLs in `src/lib/projects.ts`
   - Or use screenshots of the actual websites
   - Save with appropriate names in `public/images/portfolio/`

### Option 2: Use Your Own Images

1. **Take Screenshots** of your actual portfolio websites
2. **Crop and resize** to recommended dimensions
3. **Optimize** using tools below
4. **Save** in appropriate directories

### Option 3: Use AI-Generated Images

- Use tools like Midjourney, DALL-E, or Stable Diffusion
- Generate professional web design/workspace images
- Optimize and save

---

## 🛠️ Image Optimization Tools

### Online Tools (Free)
1. **TinyPNG / TinyJPG**: https://tinypng.com
   - Compress images without quality loss
   - Drag and drop, download optimized version

2. **Squoosh**: https://squoosh.app
   - Google's image optimization tool
   - Adjust quality, format, size
   - See preview before downloading

3. **ImageOptim**: https://imageoptim.com (Mac)
   - Desktop app for batch optimization

### Command Line Tools
```bash
# Using ImageMagick (install first)
convert input.jpg -quality 85 -resize 1920x1080 output.jpg

# Using Sharp (Node.js)
npm install sharp
```

### Photoshop / GIMP
- Export for Web (Photoshop)
- Use "Save for Web" with quality 80-85%
- Choose "Progressive" for JPGs

---

## ✅ Optimization Checklist

For each image:

- [ ] **Correct dimensions** (see sizes above)
- [ ] **Optimized file size** (< 500KB for hero, < 200KB for OG, < 300KB for portfolio)
- [ ] **Proper format** (JPG for photos, PNG only if transparency needed)
- [ ] **Quality set** (80-85% for JPG)
- [ ] **Progressive JPG** (loads faster)
- [ ] **Alt text added** (already in code, but verify descriptions)

---

## 🚀 Quick Start

### Step 1: Download Images
```bash
# Navigate to project directory
cd /home/behar/Desktop/behar-portfolio

# Images directory is already created at:
# public/images/hero/
# public/images/portfolio/
# public/images/og/
```

### Step 2: Add Images
1. Download or create images
2. Optimize them (use TinyPNG or Squoosh)
3. Save with correct names in appropriate folders

### Step 3: Test
```bash
# Start dev server
npm run dev

# Visit pages and verify images load:
# - Homepage: Hero background should show
# - Portfolio: Project images should show
# - Social sharing: OG image should work
```

---

## 📊 Image Specifications Summary

| Image Type | Dimensions | Format | Max Size | Location |
|-----------|-----------|--------|----------|----------|
| Hero Background | 1920x1080 | JPG | 500KB | `public/images/hero/hero-background.jpg` |
| OpenGraph | 1200x630 | JPG | 200KB | `public/images/og/og-image.jpg` |
| Portfolio | 1200x800 | JPG | 300KB | `public/images/portfolio/*.jpg` |

---

## 🔍 Current Status

### ✅ Code Updated
- Hero component uses Next.js Image component
- Portfolio uses Next.js Image component
- OpenGraph image path updated
- All image paths point to local files

### ⚠️ Action Required
- **Download/Add images** to the directories listed above
- **Optimize images** before adding
- **Test** that all images load correctly

---

## 💡 Tips

1. **Use WebP format** (if supported) for even better compression
2. **Lazy load** portfolio images (already implemented)
3. **Use responsive images** (already implemented with Next.js Image)
4. **Test on slow connections** to ensure good UX
5. **Monitor file sizes** - keep them as small as possible

---

## 🐛 Troubleshooting

### Images Not Showing?
1. Check file names match exactly (case-sensitive)
2. Verify files are in correct directories
3. Check file permissions
4. Clear browser cache
5. Restart dev server

### Images Too Large?
1. Use TinyPNG to compress
2. Reduce dimensions if needed
3. Lower quality setting (but keep above 75%)

### Images Not Optimized?
- The code uses Next.js Image component which handles:
  - Lazy loading
  - Responsive sizing
  - Proper format serving
- For static export, images are served as-is (already optimized)

---

## 📝 Notes

- All image paths are now local (no external dependencies)
- Next.js Image component provides automatic optimization features
- Images will fallback gracefully if missing (with placeholder)
- Portfolio images lazy load for better performance

---

**Next Step**: Download and add the images, then test the site! 🎨
