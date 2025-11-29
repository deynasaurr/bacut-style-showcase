import { blogPosts } from '@/data/blogs';
import { BlogCard } from '@/components/BlogCard';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Blog</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Style tips, fashion insights, and the latest trends from the BACut team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
