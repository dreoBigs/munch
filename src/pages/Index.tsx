import { recipes } from "../data/recipes";
import { RecipeCard } from "../components/RecipeCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-16 mb-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="font-display text-5xl">Delicious & Nutritious</h1>
            <p className="text-xl text-muted-foreground">
              Discover recipes that are both tasty and good for you
            </p>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="font-display text-3xl mb-8">Featured Recipes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;