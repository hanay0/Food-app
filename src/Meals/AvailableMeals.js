import Card from '../UI/Card';
import classses from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      imgUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      imgUrl: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80'
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      imgUrl: 'https://images.unsplash.com/photo-1597296173397-751af4da6755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      imgUrl: 'https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((singleMeal) => {
        return <MealItem 
        key={singleMeal.id}
        imgURL={singleMeal.imgUrl} 
        name={singleMeal.name} 
        description={singleMeal.description} 
        price={singleMeal.price}
        />
    });

  return (
    <section className={classses.meals}>
      <Card>
        <ul>
            {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals