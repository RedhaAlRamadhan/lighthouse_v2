import Nav from "@/components/Nav";
import { formatDate } from "@/lib/formatDate";
import { articleQueries } from "@/lib/supabase";
import { getLocale, getTranslations } from 'next-intl/server';
import Link from "next/link";
import { Suspense } from "react";

// Server component to fetch articles
async function getArticles(locale: 'en' | 'ar') {
  try {
    const [articles, featuredArticles] = await Promise.all([
      articleQueries.getPublishedArticles(locale),
      articleQueries.getFeaturedArticles(locale)
    ]);

    return {
      articles: articles || [],
      featuredArticles: featuredArticles || []
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      articles: [],
      featuredArticles: []
    };
  }
}


export default async function BlogsPage() {
  const t = await getTranslations("BlogsPage");

  const locale = await getLocale();
  const { articles } = await getArticles(locale as 'en' | 'ar');

  return (
    <div className="flex flex-col gap-4 text-gray-500">
      <Nav />
      <h1 className="text-4xl font-bold pt-4">{t("title")}</h1>
      <p className="text-sm">
        {t("description")}
      </p>
      <Suspense fallback={<div>Loading...</div>}> {articles.map((article) => (
        <Link href={`/blogs/${article.slug}`} key={article.id} className="flex flex-col gap-1 border-s-2 border-gray-300 ps-4 w-fit justify-start items-start">
          <p className="font-bold">
            {article.title}
          </p>
          <p className="text-xs italic">
            {formatDate(article.created_at, locale as 'en' | 'ar')}
          </p>
        </Link>
      ))}
      </Suspense>
    </div>
  );
}