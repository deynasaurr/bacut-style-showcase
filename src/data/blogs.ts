export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Finding Your Perfect Fit',
    excerpt: 'Discover the secrets to choosing underwear and apparel that fits your body perfectly.',
    content: `Finding the perfect fit is essential for comfort and confidence. Whether you're shopping for everyday basics or special occasion pieces, understanding your body measurements and fabric preferences makes all the difference.

## Understanding Sizing

Size charts vary between brands, so always measure yourself before ordering. Take measurements of your bust, waist, hips, and inseam for the most accurate fit.

## Fabric Matters

Natural fabrics like cotton breathe well and are ideal for daily wear, while synthetic blends offer stretch and moisture-wicking properties perfect for active lifestyles.

## Try Before You Buy

Don't be afraid to try multiple sizes and styles. What works for one body type may not work for another, and that's perfectly normal. The key is finding what makes you feel comfortable and confident.`,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    date: '2024-03-15',
    author: 'Sarah Johnson',
    category: 'Style Tips',
  },
  {
    id: '2',
    title: 'Sustainable Fashion: Making Conscious Choices',
    excerpt: 'Learn how to build a sustainable wardrobe without compromising on style or comfort.',
    content: `Sustainability in fashion isn't just a trend—it's a necessary shift towards responsible consumption. Here's how you can make more conscious choices in your wardrobe.

## Quality Over Quantity

Invest in well-made pieces that will last years rather than fast fashion items that wear out quickly. Look for reinforced seams, quality fabrics, and timeless designs.

## Care for Your Garments

Proper care extends the life of your clothing. Wash in cold water, air dry when possible, and store items properly to maintain their shape and quality.

## Choose Ethical Brands

Support brands that prioritize fair labor practices, sustainable materials, and transparent supply chains. Your purchasing power can drive positive change in the industry.`,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    date: '2024-03-10',
    author: 'Emma Davis',
    category: 'Sustainability',
  },
  {
    id: '3',
    title: 'Wardrobe Essentials: Building Your Foundation',
    excerpt: 'Every great wardrobe starts with the basics. Here are the essential pieces you need.',
    content: `A well-curated wardrobe begins with versatile essentials that can be mixed and matched effortlessly. These foundation pieces form the backbone of countless outfits.

## The Perfect White Tee

A quality white t-shirt is infinitely versatile. Look for one with a flattering neckline and the right weight fabric—not too thin, not too thick.

## Classic Denim

Well-fitting jeans or denim shorts are wardrobe workhorses. Find a cut that flatters your body type and you'll reach for them again and again.

## Quality Undergarments

Never underestimate the importance of good underwear and bras. They're the foundation of every outfit and should provide both comfort and support.

## Layering Pieces

Cardigans, lightweight sweaters, and jackets allow you to adapt your outfit to any temperature while adding style dimension.`,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    date: '2024-03-05',
    author: 'Olivia Martinez',
    category: 'Fashion Basics',
  },
  {
    id: '4',
    title: 'Active Wear Evolution: Style Meets Performance',
    excerpt: 'Explore how activewear has transformed into fashion-forward pieces you can wear anywhere.',
    content: `The line between activewear and everyday fashion has blurred beautifully, creating versatile pieces that perform well both in the gym and out on the street.

## Technical Fabrics

Modern activewear uses advanced fabrics that wick moisture, provide compression, and offer UV protection while remaining incredibly comfortable.

## Athleisure Styling

Pair cycling shorts with an oversized blazer, or wear a sports bra as a crop top under a sheer shirt. The possibilities for styling athletic pieces are endless.

## Versatility is Key

Choose pieces that transition seamlessly from workout to weekend brunch. Neutral colors and clean designs offer the most styling flexibility.

## Comfort Without Compromise

You no longer have to choose between comfort and style. Today's activewear delivers both, making it a staple in every modern wardrobe.`,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80',
    date: '2024-03-01',
    author: 'Lisa Chen',
    category: 'Activewear',
  },
];
