import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { MappedMealDetail, Ingredient } from "../types";
import { extractIngredients } from "../types";

const MealDetailPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<MappedMealDetail | null>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        const rawMeal = data.meals[0];

        setMeal({
          id: rawMeal.idMeal,
          name: rawMeal.strMeal,
          category: rawMeal.strCategory,
          mealThumb: rawMeal.strMealThumb,
          instructions: rawMeal.strInstructions,
        });
        setIngredients(extractIngredients(rawMeal));
      } catch (error) {
        console.error("Failed to fetch the meal details page:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMealDetails();
  }, [id]);

  if (loading) {
    return <p className="font-dm-sans text-sm text-neutral-500">Loading...</p>;
  }

  if (!meal) {
    return <p className="font-dm-sans text-sm text-neutral-500">Meal not found.</p>;
  }

  const steps = meal.instructions
    .split(/\r\n|\r|\n/)
    .filter((step) => step.trim() !== "");

  return (
    <div>
      <Link to="/breakfast" className="font-dm-mono text-xs uppercase tracking-widest text-neutral-500">
        ← Back to breakfast
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl">
        <img src={meal.mealThumb} alt={meal.name} className="w-full h-70 object-cover" />
      </div>

      <div className="mt-6">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">{meal.category}</p>
        <h1 className="font-fraunces text-3xl text-neutral-900 mt-1">{meal.name}</h1>
      </div>

      <div className="mt-8">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">Ingredients</p>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {ingredients.map((item, index) => (
            <div key={index} className="flex justify-between border-b border-neutral-200 py-2">
              <p className="font-dm-sans text-sm text-neutral-800">{item.name}</p>
              <p className="font-dm-sans text-sm text-neutral-500">{item.measure}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">Instructions</p>
        <ol className="mt-3 space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="font-fraunces text-terracotta-500 text-lg">{index + 1}.</span>
              <p className="font-dm-sans text-sm text-neutral-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MealDetailPage;