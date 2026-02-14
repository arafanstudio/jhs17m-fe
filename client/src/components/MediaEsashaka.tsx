import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface Article {
  id: number;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}

const MediaEsashaka: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/articles/latest`);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const renderArticleCard = (article: Article) => (
    <Card key={article.id} className="rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={article.image_url || "https://via.placeholder.com/400x250?text=Media+Esashaka"}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </CardTitle>
        <p className="text-gray-600 text-sm mb-4">
          Tanggal: {formatDate(article.created_at)}
        </p>
        <p className="text-gray-700 line-clamp-3">
          {article.content}
        </p>
        <a
          href={`/article/${article.id}`} // Placeholder link for full article view
          className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          Baca Selengkapnya &rarr;
        </a>
      </CardContent>
    </Card>
  );

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Skeleton className="w-full h-48" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Media Esashaka
        </h2>
        {loading && renderSkeleton()}
        {error && (
          <p className="text-center text-red-500 text-lg">{error}</p>
        )}
        {!loading && !error && articles.length === 0 && (
          <p className="text-center text-gray-500 text-lg">No articles found.</p>
        )}
        {!loading && !error && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(renderArticleCard)}
          </div>
        )}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaEsashaka;
