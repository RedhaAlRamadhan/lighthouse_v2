-- Seed data for the database
-- This file populates the database with initial sample data

-- Insert sample authors
INSERT INTO authors (id, name, email, avatar_url, bio, created_at, updated_at) VALUES
(
  '550e8400-e29b-41d4-a716-446655440000',
  'Redha AlRamadhan',
  'redha@example.com',
  'https://example.com/avatar.jpg',
  'Software Engineer & Product Manager from Al Hasa, Saudi Arabia. Passionate about full-stack development and creating innovative business solutions.',
  NOW(),
  NOW()
),
(
  '550e8400-e29b-41d4-a716-446655440001',
  'Guest Author',
  'guest@example.com',
  'https://example.com/guest-avatar.jpg',
  'Guest contributor to the blog.',
  NOW(),
  NOW()
);

-- Insert sample articles
INSERT INTO articles (id, title, slug, content, excerpt, author_id, locale, published, created_at, updated_at) VALUES
(
  '550e8400-e29b-41d4-a716-446655440010',
  'Welcome to My Personal Blog',
  'welcome-to-my-personal-blog',
  '<h1>Welcome to My Personal Blog</h1><p>This is my first blog post where I share my thoughts on software development, product management, and technology trends.</p><p>I''m excited to share my journey and experiences with you!</p>',
  'Welcome to my personal blog where I share insights about software development and product management.',
  '550e8400-e29b-41d4-a716-446655440000',
  'en',
  true,
  NOW(),
  NOW()
),
(
  '550e8400-e29b-41d4-a716-446655440011',
  'Building Modern Web Applications with Next.js',
  'building-modern-web-applications-with-nextjs',
  '<h1>Building Modern Web Applications with Next.js</h1><p>Next.js has revolutionized the way we build React applications. In this post, I''ll share my experience building scalable web applications.</p><p>We''ll cover server-side rendering, static site generation, and API routes.</p>',
  'Learn how to build modern, scalable web applications using Next.js and its powerful features.',
  '550e8400-e29b-41d4-a716-446655440000',
  'en',
  true,
  NOW(),
  NOW()
),
(
  '550e8400-e29b-41d4-a716-446655440012',
  'From Food Delivery to Tech Solutions',
  'from-food-delivery-to-tech-solutions',
  '<h1>From Food Delivery to Tech Solutions</h1><p>My journey from working in a food delivery company to creating business solutions has been incredible.</p><p>I''ve learned valuable lessons about scalability, user experience, and building products that matter.</p>',
  'My professional journey from food delivery to creating innovative tech solutions for businesses.',
  '550e8400-e29b-41d4-a716-446655440000',
  'en',
  true,
  NOW(),
  NOW()
),
(
  '550e8400-e29b-41d4-a716-446655440013',
  'Flutter vs React Native: A Developer''s Perspective',
  'flutter-vs-react-native-developers-perspective',
  '<h1>Flutter vs React Native: A Developer''s Perspective</h1><p>Having worked with both Flutter and React Native, I can share insights about their strengths and use cases.</p><p>Both frameworks have their place in modern mobile development.</p>',
  'Comparing Flutter and React Native from a developer''s perspective with real-world experience.',
  '550e8400-e29b-41d4-a716-446655440000',
  'en',
  false,
  NOW(),
  NOW()
),
(
  '550e8400-e29b-41d4-a716-446655440014',
  'أهلاً بكم في مدونتي الشخصية',
  'welcome-to-my-personal-blog-ar',
  '<h1>أهلاً بكم في مدونتي الشخصية</h1><p>هذا هو أول منشور في مدونتي حيث أشارككم أفكاري حول تطوير البرمجيات وإدارة المنتجات واتجاهات التكنولوجيا.</p><p>أنا متحمس لمشاركة رحلتي وتجاربي معكم!</p>',
  'أهلاً بكم في مدونتي الشخصية حيث أشارككم رؤى حول تطوير البرمجيات وإدارة المنتجات.',
  '550e8400-e29b-41d4-a716-446655440000',
  'ar',
  true,
  NOW(),
  NOW()
),
(
  '550e8400-e29b-41d4-a716-446655440015',
  'بناء تطبيقات الويب الحديثة باستخدام Next.js',
  'building-modern-web-applications-with-nextjs-ar',
  '<h1>بناء تطبيقات الويب الحديثة باستخدام Next.js</h1><p>لقد غيّر Next.js طريقة بناء تطبيقات React. في هذا المنشور، سأشارككم تجربتي في بناء تطبيقات ويب قابلة للتوسع.</p><p>سنغطي العرض من جانب الخادم، وإنشاء المواقع الثابتة، ومسارات API.</p>',
  'تعلم كيفية بناء تطبيقات ويب حديثة وقابلة للتوسع باستخدام Next.js وميزاته القوية.',
  '550e8400-e29b-41d4-a716-446655440000',
  'ar',
  true,
  NOW(),
  NOW()
); 