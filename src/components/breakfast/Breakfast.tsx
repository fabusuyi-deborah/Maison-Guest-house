import { useState, useEffect } from 'react'
import type { Breakfast } from '../../types';
import { Link } from 'react-router-dom';

export interface MappedMeal {
  name: string;
  thumbnail: string;
  id: string;
  country: string;
}

const BreakfastComponent = () => {
  const [meals, setMeals] = useState<MappedMeal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreakfast = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
        const data = await response.json()

        const meals = data.meals.map((item: Breakfast) => ({
          name: item.strMeal,
          thumbnail: item.strMealThumb,
          id: item.idMeal,
          country: item.strCountry,
          
        }))
        setMeals(meals)
      }
      catch (error) {
        console.error("Failed to fetch Breakfast list:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBreakfast()
    
  }, [])

  return (
    <section>
  <div className="mb-6">
    <h2 className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">
      Breakfast
    </h2>

    <p className="mt-1 font-fraunces text-2xl text-neutral-900">
      List of different breakfast ideas to try
    </p>
  </div>

  {loading ? (
    <p className="text-sm font-dm-sans text-neutral-500">
      Loading breakfast ideas...
    </p>
  ) : (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal) => (
        <article key={meal.id}>
          <Link
            to={`/breakfast/${meal.id}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={meal.thumbnail}
                alt={meal.name}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-3">
              <h3 className="font-fraunces text-lg text-neutral-900">
                {meal.name}
              </h3>

              <span className="mt-2 inline-block rounded-full bg-neutral-200 px-3 py-1 text-xs text-terracotta-500">
                {meal.country}
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )}
</section>
  )
}

export default BreakfastComponent;
