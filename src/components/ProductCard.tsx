import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeDialog, setShowSizeDialog] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeDialog(true);
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });

    toast({
      title: 'Added to cart',
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    });

    setSelectedSize('');
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setShowSizeDialog(false);
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
    });

    toast({
      title: 'Added to cart',
      description: `${product.name} (${size}) has been added to your cart.`,
    });
  };

  return (
    <>
      <div className="group cursor-pointer">
        <div className="aspect-square overflow-hidden rounded-sm bg-secondary mb-4 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </div>
        
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
          
          <Button
            onClick={handleAddToCart}
            className="w-full mt-3"
            variant="default"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <Dialog open={showSizeDialog} onOpenChange={setShowSizeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Size</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant="outline"
                onClick={() => handleSizeSelect(size)}
                className="hover:bg-accent hover:text-accent-foreground"
              >
                {size}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
