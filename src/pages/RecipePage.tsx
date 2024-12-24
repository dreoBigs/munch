import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import { RecipeDetail } from "../components/RecipeDetail";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="container py-8 text-center">
        <h1 className="font-display text-3xl mb-4">Recipe not found</h1>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to recipes
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Button asChild className="mb-8">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to recipes
        </Link>
      </Button>
      <RecipeDetail recipe={recipe} />
    </div>
  );
};

export default RecipePage;