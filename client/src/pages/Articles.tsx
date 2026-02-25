import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

interface Article {
  id: number;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      // Fetch all articles (assuming there's an endpoint for all articles, or use the same one if it returns all)
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/articles`);
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data: Article[] = await response.json();
      setArticles(data);
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError("Gagal memuat berita. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
        <Link
          href={`/article/${article.id}`}
          className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          Baca Selengkapnya &rarr;
        </Link>
      </CardContent>
    </Card>
  );

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Berita & Artikel</h1>
            <p className="text-blue-100 mt-2">Informasi terbaru seputar kegiatan dan prestasi SMPN 17 Malang</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading && renderSkeleton()}
            {error && (
              <div className="text-center py-12">
                <p className="text-red-500 text-lg mb-4">{error}</p>
                <button 
                  onClick={() => fetchArticles()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Coba Lagi
                </button>
              </div>
            )}
            {!loading && !error && articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Belum ada berita yang diterbitkan.</p>
              </div>
            )}
            {!loading && !error && articles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map(renderArticleCard)}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
