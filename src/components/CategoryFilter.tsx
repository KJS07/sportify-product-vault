
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Basketball",
  "Soccer",
  "Tennis",
  "Running",
  "Fitness",
  "Swimming"
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-200 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
              : "hover:bg-orange-50 hover:border-orange-300"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
