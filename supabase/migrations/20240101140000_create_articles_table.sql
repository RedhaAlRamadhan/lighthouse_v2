-- Create articles table with proper foreign key
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  published_at TIMESTAMPTZ,
  read_time INTEGER DEFAULT 5,
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  author_id UUID NOT NULL,
  locale VARCHAR(5) NOT NULL CHECK (locale IN ('en', 'ar')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Ensure unique slug per locale
  UNIQUE(slug, locale)
);

-- Add foreign key constraint
ALTER TABLE articles 
ADD CONSTRAINT fk_articles_author 
FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE; 