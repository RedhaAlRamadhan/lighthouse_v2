import Nav from "@/components/Nav";
import { formatDate } from "@/lib/formatDate";
import { createMarkup } from "@/lib/markup";
import { articleQueries } from "@/lib/supabase";
import { getLocale } from "next-intl/server";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const locale = await getLocale();
    const article = await articleQueries.getArticleBySlug(slug, locale as 'en' | 'ar');

    return <div className="flex flex-col gap-4 text-gray-500">
        <Nav />
        <h1 className="text-4xl font-bold pt-4">{article.title}</h1>
        <p className="text-sm italic">
            {formatDate(article.created_at, locale as 'en' | 'ar')}
        </p>
        <div
            className="leading-relaxed text-sm text-justify"
            dangerouslySetInnerHTML={createMarkup(article.content)}
        />
    </div>;
}