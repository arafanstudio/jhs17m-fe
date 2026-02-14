import React, { useState, useEffect } from "react";
import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface Article {
  id: number;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}

const ArticleDetail: React.FC = () => {
  const params = useParams<{ id: string }>();
  const articleId = params?.id;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleId) {
      setError("Article ID is missing.");
      setLoading(false);
      return;
    }

    const fetchArticle = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/articles/${articleId}`);
        if (response.status === 404) {
          setError("Article not found.");
          return;
        }
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const data: Article = await response.json();
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-lg text-gray-600">{error}</p>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
            &larr; Kembali ke Beranda
          </Link>
        </div>
      );
    }

    if (!article) {
      return null; // Should be covered by error state
    }

    return (
      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {article.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Dipublikasikan pada: {formatDate(article.created_at)}
          </p>
          <div className="mb-8">
            <img
              src={article.image_url || "https://via.placeholder.com/1200x600?text=Media+Esashaka"}
              alt={article.title}
              className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            <p>{article.content}</p>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              &larr; Kembali ke Beranda
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10 md:py-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
