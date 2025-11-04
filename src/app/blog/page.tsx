// src/app/blog/page.tsx
import { ALL_POSTS } from "@/data/blog-posts";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";

// --- SEO Metadata for the main blog page ---
export const metadata: Metadata = {
  title: "Battery Blog & Expert Guides | Alberton Battery Mart",
  description: "Read expert guides from Alberton Battery Mart on car battery maintenance, AGM vs. EFB technology, mobile fitment, and load shedding solutions.",
};

export default function BlogHubPage() {
  // Sort posts by date, newest first
  const sortedPosts = ALL_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container py-16">
      {/* Page Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
          The <span className="text-battery">Expert Hub</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Expert guides, local service explainers, and technical advice from Alberton's battery specialists.
        </p>
      </div>

      {/* Grid of Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden bg-card border-border shadow-lg hover:shadow-battery/30 transition-shadow h-full">
            {/* Make the entire card a link to the post */}
            <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
              
              <CardHeader className="flex-grow">
                <CardTitle className="text-2xl font-bold text-foreground hover:text-battery transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
              </CardContent>

              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <span className="flex items-center text-battery font-semibold">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}