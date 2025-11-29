import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="group">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-secondary mb-4 relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{post.category}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <p className="text-sm font-medium group-hover:text-accent transition-colors">
          Read More →
        </p>
      </div>
    </Link>
  );
};
