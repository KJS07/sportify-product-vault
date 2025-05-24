
import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

const sampleProducts: Product[] = [
  // Cricket Equipment
  {
    id: 1,
    name: "Professional Cricket Bat",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Cricket Ball - Leather",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.6,
    inStock: true
  },
  {
    id: 3,
    name: "Batting Pads",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.5,
    inStock: true
  },
  {
    id: 4,
    name: "Batting Gloves",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.7,
    inStock: true
  },
  {
    id: 5,
    name: "Cricket Helmet",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.8,
    inStock: true
  },
  {
    id: 6,
    name: "Wicketkeeping Gloves",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.6,
    inStock: true
  },
  {
    id: 7,
    name: "Stumps and Bails Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.4,
    inStock: true
  },
  {
    id: 8,
    name: "Abdominal Guard (Box)",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Cricket",
    rating: 4.3,
    inStock: true
  },

  // Football (Soccer) Equipment
  {
    id: 9,
    name: "FIFA Quality Soccer Ball",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.8,
    inStock: true
  },
  {
    id: 10,
    name: "Football Boots (Cleats)",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.7,
    inStock: true
  },
  {
    id: 11,
    name: "Shin Guards",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.5,
    inStock: true
  },
  {
    id: 12,
    name: "Goalkeeper Gloves",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.6,
    inStock: true
  },
  {
    id: 13,
    name: "Goalposts and Net Set",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.7,
    inStock: true
  },
  {
    id: 14,
    name: "Training Cones Set",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.4,
    inStock: true
  },
  {
    id: 15,
    name: "Corner Flags",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.3,
    inStock: true
  },
  {
    id: 16,
    name: "Jersey and Shorts Kit",
    price: 54.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.6,
    inStock: true
  },

  // Hockey Equipment
  {
    id: 17,
    name: "Field Hockey Stick",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.7,
    inStock: true
  },
  {
    id: 18,
    name: "Hockey Ball",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.5,
    inStock: true
  },
  {
    id: 19,
    name: "Hockey Shin Pads",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.6,
    inStock: true
  },
  {
    id: 20,
    name: "Mouth Guard",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.4,
    inStock: true
  },
  {
    id: 21,
    name: "Goalkeeper Kit Complete",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.8,
    inStock: true
  },
  {
    id: 22,
    name: "Hockey Shoes",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.5,
    inStock: true
  },
  {
    id: 23,
    name: "Protective Cup",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.3,
    inStock: true
  },
  {
    id: 24,
    name: "Training Bibs Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "Hockey",
    rating: 4.2,
    inStock: true
  },

  // Tennis Equipment
  {
    id: 25,
    name: "Professional Tennis Racket",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.8,
    inStock: true
  },
  {
    id: 26,
    name: "Tennis Balls (Pack of 3)",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.6,
    inStock: true
  },
  {
    id: 27,
    name: "Tennis Shoes (Non-marking)",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.7,
    inStock: true
  },
  {
    id: 28,
    name: "Sweatbands Set",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.4,
    inStock: true
  },
  {
    id: 29,
    name: "Tennis Net",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.5,
    inStock: true
  },
  {
    id: 30,
    name: "Ball Hopper Basket",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.3,
    inStock: true
  },
  {
    id: 31,
    name: "Racket Overgrips",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.2,
    inStock: true
  },
  {
    id: 32,
    name: "Racket Strings",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.4,
    inStock: true
  },

  // Table Tennis Equipment
  {
    id: 33,
    name: "Table Tennis Table",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.8,
    inStock: true
  },
  {
    id: 34,
    name: "Table Tennis Racket",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.6,
    inStock: true
  },
  {
    id: 35,
    name: "Table Tennis Balls (Pack of 6)",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.5,
    inStock: true
  },
  {
    id: 36,
    name: "Net and Post Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.4,
    inStock: true
  },
  {
    id: 37,
    name: "Table Cover",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.3,
    inStock: true
  },
  {
    id: 38,
    name: "Scoreboard",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.2,
    inStock: true
  },
  {
    id: 39,
    name: "Edge Tape",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.1,
    inStock: true
  },
  {
    id: 40,
    name: "Racket Case",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Table Tennis",
    rating: 4.3,
    inStock: true
  },

  // Basketball Equipment
  {
    id: 41,
    name: "Official Basketball",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.7,
    inStock: true
  },
  {
    id: 42,
    name: "Basketball Hoop with Net",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.8,
    inStock: true
  },
  {
    id: 43,
    name: "Basketball Backboard",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.6,
    inStock: true
  },
  {
    id: 44,
    name: "Basketball Shoes",
    price: 119.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.8,
    inStock: true
  },
  {
    id: 45,
    name: "Basketball Jersey and Shorts",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.5,
    inStock: true
  },
  {
    id: 46,
    name: "Knee/Elbow Pads",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.4,
    inStock: true
  },
  {
    id: 47,
    name: "Ankle Braces",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.6,
    inStock: true
  },
  {
    id: 48,
    name: "Referee Whistle",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.3,
    inStock: true
  }
];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Sports Equipment
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Complete range of professional sports equipment for Cricket, Football, Hockey, Tennis, Table Tennis, and Basketball
        </p>
      </div>

      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
