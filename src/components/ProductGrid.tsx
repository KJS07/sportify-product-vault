
import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Nike Air Jordan Basketball Shoes",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Adidas Soccer Ball FIFA Quality",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&h=400&fit=crop",
    category: "Soccer",
    rating: 4.6,
    inStock: true
  },
  {
    id: 3,
    name: "Wilson Tennis Racket Pro",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: "Nike Running Shoes Air Max",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop",
    category: "Running",
    rating: 4.5,
    inStock: false
  },
  {
    id: 5,
    name: "Spalding Basketball Official Size",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=400&fit=crop",
    category: "Basketball",
    rating: 4.4,
    inStock: true
  },
  {
    id: 6,
    name: "Yoga Mat Premium Quality",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Fitness",
    rating: 4.3,
    inStock: true
  },
  {
    id: 7,
    name: "Speedo Swimming Goggles",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Swimming",
    rating: 4.6,
    inStock: true
  },
  {
    id: 8,
    name: "Dumbbells Set 20lbs",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
    category: "Fitness",
    rating: 4.8,
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
          Our Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of premium sports equipment designed for athletes of all levels
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
