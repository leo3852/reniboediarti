# Image and Content Guide for Reni Boediarti Portfolio

## 📁 Image Folder Structure

I've created the following folder structure in the `public/work/` directory:

```
public/work/
├── instagram/          # 9 Instagram screenshots (638×1054)
├── campaigns/          # 1 campaign image (638×1054)
├── captions/          # 1 caption image (638×1054)
├── growth/            # 2 growth result images (638×1054)
├── events/            # 7 event management images (400×500)
└── ai/                # 1 AI work image (400×500)
```

## 🖼️ Required Images

### Instagram Work (9 images)
- **Location**: `public/work/instagram/`
- **Naming**: `instagram-1.jpg` to `instagram-9.jpg`
- **Dimensions**: 638×1054 pixels
- **Description**: Instagram page screenshots showing social media captions and brand launching work

### Campaign Strategy (1 image)
- **Location**: `public/work/campaigns/`
- **Naming**: `campaigns-1.jpg`
- **Dimensions**: 638×1054 pixels
- **Description**: Image to accompany "We help build targeted campaigns and customer engagement strategies"

### Caption Writing (1 image)
- **Location**: `public/work/captions/`
- **Naming**: `captions-1.jpg`
- **Dimensions**: 638×1054 pixels
- **Description**: Image to accompany "We Create Captions With Intention, Add a Value On Each Daily Social Media Content"

### Growth Results (2 images)
- **Location**: `public/work/growth/`
- **Naming**: `growth-1.jpg` and `growth-2.jpg`
- **Dimensions**: 638×1054 pixels
- **Description**: Images showing growth results for @lifewithraynor case study

### Event Management (7 images)
- **Location**: `public/work/events/`
- **Naming**: `event-1.jpg` to `event-7.jpg`
- **Dimensions**: 400×500 pixels
- **Description**: Brand event management and community activation images

### AI Work (1 image)
- **Location**: `public/work/ai/`
- **Naming**: `ai-work.jpg`
- **Dimensions**: 400×500 pixels
- **Description**: Image representing AI annotation work

## 🔗 News Articles Section

To add your news article links, update the following file:
`src/app/components/ai-work/ai-work.component.html`

Find the "News Articles Section" and replace the placeholder links:

```html
<!-- Replace these placeholder cards with your actual articles -->
<div class="card p-6 text-center">
  <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
    </svg>
  </div>
  <h3 class="text-lg font-semibold text-gray-800 mb-2">Your Article Title</h3>
  <p class="text-gray-600 text-sm mb-4">Brief description of the article</p>
  <a href="YOUR_ARTICLE_URL" target="_blank" rel="noopener" class="btn-secondary text-sm">Read Article</a>
</div>
```

## 🎨 Portfolio Sections Created

### 1. **Social Media Portfolio**
- Displays 9 Instagram screenshots in a responsive grid
- Shows social media captions and brand launching work

### 2. **Targeted Campaigns**
- Text: "We help build targeted campaigns and customer engagement strategies"
- Includes one accompanying image

### 3. **Intentional Captions**
- Text: "We Create Captions With Intention, Add a Value On Each Daily Social Media Content"
- Includes one accompanying image

### 4. **Growth & Results**
- Case study for @lifewithraynor account
- Includes timeline, challenge, strategy, and results
- Two accompanying images

### 5. **Brand Event Management**
- Title: "Brand Event Management & Community Activation"
- Grid of 7 images with small descriptions

### 6. **AI Annotator Work**
- Comprehensive section about AI data annotation
- Lists all LLM projects and experiences
- One accompanying image

### 7. **Featured in Media**
- Section for news articles and media coverage
- Placeholder cards ready for your article links

## 📱 Responsive Design

All sections are fully responsive:
- **Mobile**: Single column layout
- **Tablet**: 2-column grid for most sections
- **Desktop**: 3-4 column grids where appropriate

## 🎯 Next Steps

1. **Add Images**: Place your images in the corresponding folders with the exact names specified
2. **Update Article Links**: Replace placeholder links with your actual news article URLs
3. **Test**: Run `npm run build:github-pages` to ensure everything works
4. **Deploy**: Push to GitHub for automatic deployment

## 💡 Notes

- All images have fallback placeholders if files are missing
- The design maintains the girly, modern aesthetic throughout
- Each section has proper spacing and visual hierarchy
- All content is SEO-friendly with proper alt tags and semantic HTML

The portfolio now showcases Reni's comprehensive work experience across social media, campaigns, AI annotation, and media coverage in a professional and visually appealing way!
