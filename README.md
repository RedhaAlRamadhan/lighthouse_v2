# Redha AlRamadhan - Personal Website

The personal website of Redha AlRamadhan, Software Engineer & Product Manager from Al Hasa, Saudi Arabia. A modern, multilingual platform built with Next.js 14, featuring a natural design, dynamic article management, and internationalization support for sharing technical tutorials and professional experiences.

## ✨ Features

- **🌐 Internationalization**: Full support for English and Arabic with RTL layout
- **🌙 Dark Mode**: Natural, grayish theme with smooth transitions (default: dark)
- **📝 Dynamic Articles**: TipTap-powered markdown editor with Supabase backend
- **📱 Responsive Design**: Mobile-first approach with elegant UI components
- **⚡ Performance Optimized**: Server-side rendering with Next.js 14 App Router
- **🎨 Modern UI**: shadcn/ui components with natural color palette
- **🔍 SEO Optimized**: Proper meta tags, Open Graph, and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Database**: Supabase (PostgreSQL)
- **Editor**: TipTap (Rich text/Markdown)
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for dynamic articles)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/redhaa/redhaa.dev.git
   cd redhaa.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to the SQL Editor in your Supabase dashboard
   - Run the schema from `supabase/schema.sql`

4. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
redhaa.dev/
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   └── [locale]/       # Internationalized pages
│   │       ├── articles/   # Article listing & detail pages
│   │       ├── admin/      # Article management interface
│   │       ├── layout.tsx  # Root layout
│   │       └── page.tsx    # Home page
│   ├── components/
│   │   ├── editor/         # TipTap editor components
│   │   ├── providers/      # Context providers
│   │   ├── ui/            # shadcn/ui components
│   │   ├── navigation.tsx  # Main navigation
│   │   ├── theme-switcher.tsx
│   │   └── language-switcher.tsx
│   └── lib/
│       ├── i18n.ts        # Internationalization config
│       └── supabase.ts    # Database client & queries
├── messages/              # Translation files
│   ├── en.json           # English translations
│   └── ar.json           # Arabic translations
├── middleware.ts         # Next.js middleware for i18n
├── supabase/
│   └── schema.sql        # Database schema
└── components.json       # shadcn/ui config
```

## 🌐 Routes

- `/` - Home page with featured articles
- `/articles` - Article listing page
- `/articles/[slug]` - Individual article pages
- `/admin` - Article management interface

All routes support both `/en/` and `/ar/` locales.

## 🎨 Customization

### Design System

The site uses a natural, grayish color palette:
- **Primary**: Warm sage green (`oklch(0.45 0.08 140)`)
- **Background**: Natural warm whites (`oklch(0.98 0.008 85)`)
- **Text**: Subtle warm grays with proper contrast

### Colors

Edit the color variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.45 0.08 140);    /* Sage green */
  --background: oklch(0.98 0.008 85); /* Warm white */
  /* ... other variables */
}
```

### Content

1. **Profile Information**: Update `src/app/[locale]/page.tsx`
2. **Home Page**: Modify `src/app/[locale]/page.tsx`
3. **Navigation**: Edit `src/components/navigation.tsx`
4. **Translations**: Update `messages/en.json` and `messages/ar.json`

## 📝 Article Management

### Creating Articles

1. Navigate to `/admin` (or `/ar/admin` for Arabic)
2. Fill out the article form:
   - Title (auto-generates slug)
   - Excerpt (optional)
   - Content (TipTap editor with markdown support)
   - Tags
   - Featured/Published toggles
3. Use the rich text editor with:
   - Formatting (bold, italic, strikethrough)
   - Headings (H1, H2, H3)
   - Lists (bullet and numbered)
   - Code blocks with syntax highlighting
   - Links and quotes
4. Click "Save Article"

### Editor Features

- **Live Preview**: Real-time formatting
- **Markdown Support**: Standard markdown syntax
- **Syntax Highlighting**: JavaScript, TypeScript, CSS
- **Read Time Calculation**: Automatic based on content
- **Responsive Toolbar**: Mobile-friendly controls

## 🗄 Database Schema

The Supabase database includes:

- **authors**: User profiles and author information
- **articles**: Article content with metadata
- Built-in RLS (Row Level Security) policies
- Optimized indexes for performance
- Sample data for testing

## 🌍 Internationalization

### Adding New Languages

1. Create new message file in `messages/` (e.g., `fr.json`)
2. Update `src/lib/i18n.ts` to include the new locale
3. Update `middleware.ts` to handle the new locale
4. Add translations for all keys

### Translation Structure

```json
{
  "navigation": {
    "home": "Home",
    "articles": "Articles"
  },
  "home": {
    "title": "Your Title",
    "description": "Your Description"
  }
  // ... more sections
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The site works on any platform supporting Next.js:
- Netlify
- Railway  
- AWS Amplify
- Self-hosted with Docker

### Environment Variables

Ensure these are set in production:
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend as a service
- [TipTap](https://tiptap.dev/) - Rich text editor
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons

---

**Built with ❤️ by Redha AlRamadhan - Software Engineer & Product Manager**

*Sharing knowledge, experiences, and building digital solutions with Flutter, Next.js, and modern web technologies.*
