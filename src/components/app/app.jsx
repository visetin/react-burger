import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { routs } from '../../lib/consts';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

const App = () => {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    fetch(routs.ingredientsAPI)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIngredients(data.data);
      })
      .catch((e) => {
        console.log('Errors occurred when making an API request');
      })
  }, []);

  const categorizedIngredients = React.useMemo(() => {
    if (!ingredients.length) {
      return [];
    }

    const categoriesMap = {
      bun: 'Булки',
      main: 'Начинки',
      sauce: 'Соусы',
    };

    return ingredients
      .map((ingredient) => {
        return ingredient.type;
      })
      .filter((category, index, arr) => {
        return arr.indexOf(category) === index;
      })
      .map((category) => {
        return {
          category: categoriesMap[category],
          items: ingredients.filter(({ type }) => {
            return type === category;
          }),
        };
      });
  }, [ingredients]);

  return (
    <>
      <AppHeader />
      <main className="page-container page-layout page-layout_cropped pl-5 pt-10 pr-5 pb-10">
        <div className="page-slot flex-column page-slot_cropped">
          <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
          <div className="page-slot__scroll-box">
            <BurgerIngredients ingredients={categorizedIngredients} />
          </div>
        </div>

        <div className="page-slot flex-column page-slot_cropped">constructor</div>
      </main>
    </>
  )
};

export default App;
