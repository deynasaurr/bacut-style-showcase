import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Body & Apparel Cut
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover comfort and style in every piece
          </p>
          <Link to="/shop">
            <Button size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', link: '/shop?category=T-Shirts' },
            { name: 'Underwear', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80', link: '/shop?category=Underwear' },
            { name: 'Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80', link: '/shop?category=Shorts' },
            { name: 'Sweaters', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80', link: '/shop?category=Sweaters' },
          ].map((category) => (
            <Link key={category.name} to={category.link} className="group">
              <div className="aspect-square overflow-hidden rounded-sm bg-secondary relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                  <h3 className="text-2xl font-serif font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Quality You Can Feel
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At BACut, we believe that great style starts with great fit. Our carefully curated
                collection combines premium materials with modern designs to create pieces that
                look as good as they feel.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From everyday essentials to statement pieces, every item is crafted with attention
                to detail and your comfort in mind.
              </p>
              <Link to="/shop">
                <Button>
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Quality fashion"
                className="rounded-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          New to BACut?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sign up to receive exclusive offers, style tips, and be the first to know about new arrivals.
        </p>
        <Link to="/signup">
          <Button size="lg">
            Create Account
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
