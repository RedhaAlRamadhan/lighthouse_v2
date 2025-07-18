# Supabase Database Setup

This directory contains the database schema and migrations for the Redha AlRamadhan personal website.

## Structure

```
supabase/
├── migrations/          # Database migrations (run in order)
│   ├── 20240101120000_enable_uuid_extension.sql
│   ├── 20240101130000_create_authors_table.sql
│   ├── 20240101140000_create_articles_table.sql
│   ├── 20240101150000_create_indexes_and_functions.sql
│   └── 20240101160000_setup_row_level_security.sql
├── seed.sql            # Sample data for development
└── README.md           # This file
```

## Database Schema

### Authors Table
- `id` (UUID, Primary Key)
- `name` (Text, NOT NULL)
- `email` (Text, UNIQUE, NOT NULL)
- `avatar_url` (Text)
- `bio` (Text)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Articles Table
- `id` (UUID, Primary Key)
- `title` (Text, NOT NULL)
- `slug` (Text, UNIQUE per locale, NOT NULL)
- `content` (Text, NOT NULL)
- `excerpt` (Text)
- `author_id` (UUID, Foreign Key to authors.id)
- `locale` (Text, NOT NULL, CHECK: 'en' or 'ar')
- `published` (Boolean, DEFAULT false)
- `published_at` (Timestamp)
- `read_time` (Integer, DEFAULT 5)
- `tags` (Text Array, DEFAULT {})
- `featured` (Boolean, DEFAULT false)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## Setup Instructions

### 1. Initialize Supabase (if not already done)
```bash
supabase init
```

### 2. Start Local Development
```bash
supabase start
```

### 3. Run Migrations
The migrations will be automatically applied when you start Supabase or you can run them manually:
```bash
supabase db reset
```

### 4. Seed Database (Development Only)
```bash
supabase db seed
```

### 5. Generate TypeScript Types
```bash
supabase gen types typescript --local > src/lib/database.types.ts
```

## Production Deployment

### Link to Production Project
```bash
supabase link --project-ref <your-project-id>
```

### Push Migrations to Production
```bash
supabase db push
```

## Migration Files

1. **20240101120000_enable_uuid_extension.sql**: Enables UUID extension for primary keys
2. **20240101130000_create_authors_table.sql**: Creates authors table with proper constraints
3. **20240101140000_create_articles_table.sql**: Creates articles table with foreign key relationship
4. **20240101150000_create_indexes_and_functions.sql**: Adds indexes and utility functions
5. **20240101160000_setup_row_level_security.sql**: Sets up RLS policies for security

## Sample Data

The `seed.sql` file includes:
- Sample author (Redha AlRamadhan)
- Sample blog articles covering various topics
- Both published and draft articles for testing

## Important Notes

- All UUIDs are properly formatted
- Foreign key relationships are explicitly defined
- Row Level Security (RLS) is enabled for production safety
- Timestamps are automatically managed with triggers
- Proper indexing for performance optimization

## Troubleshooting

If you encounter issues:

1. **Migration fails**: Check the Supabase dashboard for error details
2. **Seed data fails**: Ensure migrations ran successfully first
3. **Type generation fails**: Make sure your local instance is running

For more details, refer to the [Supabase documentation](https://supabase.com/docs). 