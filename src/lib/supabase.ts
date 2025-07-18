import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  published_at: string
  read_time: number
  tags: string[]
  featured: boolean
  published: boolean
  author_id: string
  locale: 'en' | 'ar'
  created_at: string
  updated_at: string
  author?: {
    id: string
    name: string
    bio?: string
    avatar_url?: string
  }
}

export interface Author {
  id: string
  name: string
  email: string
  bio: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

// Database helper functions
export const articleQueries = {
  // Get all published articles for a locale
  getPublishedArticles: async (locale: 'en' | 'ar') => {
    try {
      // Try with author join first
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          author:authors!author_id (
            id,
            name,
            avatar_url
          )
        `)
        .eq('locale', locale)
        .eq('published', true)
        .order('published_at', { ascending: false })

      if (error) throw error
      return data
    } catch (error) {
      // Fallback to articles only if join fails
      console.warn('Author join failed, fetching articles only:', error)
      const { data, error: fallbackError } = await supabase
        .from('articles')
        .select('*')
        .eq('locale', locale)
        .eq('published', true)
        .order('published_at', { ascending: false })

      if (fallbackError) throw fallbackError
      return data
    }
  },

  // Get featured articles
  getFeaturedArticles: async (locale: 'en' | 'ar') => {
    try {
      // Try with author join first
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          author:authors!author_id (
            id,
            name,
            avatar_url
          )
        `)
        .eq('locale', locale)
        .eq('published', true)
        .eq('featured', true)
        .order('published_at', { ascending: false })
        .limit(3)

      if (error) throw error
      return data
    } catch (error) {
      // Fallback to articles only if join fails
      console.warn('Author join failed, fetching articles only:', error)
      const { data, error: fallbackError } = await supabase
        .from('articles')
        .select('*')
        .eq('locale', locale)
        .eq('published', true)
        .eq('featured', true)
        .order('published_at', { ascending: false })
        .limit(3)

      if (fallbackError) throw fallbackError
      return data
    }
  },

  // Get single article by slug
  getArticleBySlug: async (slug: string, locale: 'en' | 'ar') => {
    try {
      // Try with author join first
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          author:authors!author_id (
            id,
            name,
            bio,
            avatar_url
          )
        `)
        .eq('slug', slug)
        .eq('locale', locale)
        .eq('published', true)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      // Fallback to articles only if join fails
      console.warn('Author join failed, fetching article only:', error)
      const { data, error: fallbackError } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('locale', locale)
        .eq('published', true)
        .single()

      if (fallbackError) throw fallbackError
      return data
    }
  },

  // Create new article
  createArticle: async (article: Omit<Article, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('articles')
      .insert([article])
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update article
  updateArticle: async (id: string, updates: Partial<Article>) => {
    const { data, error } = await supabase
      .from('articles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },
} 