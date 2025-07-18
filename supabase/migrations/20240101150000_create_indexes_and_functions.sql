-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_locale ON articles(locale);
CREATE INDEX IF NOT EXISTS idx_articles_featured ON articles(featured, published);
CREATE INDEX IF NOT EXISTS idx_articles_slug_locale ON articles(slug, locale);
CREATE INDEX IF NOT EXISTS idx_articles_tags ON articles USING GIN(tags);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_authors_updated_at
  BEFORE UPDATE ON authors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 