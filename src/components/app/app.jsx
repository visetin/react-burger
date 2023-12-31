import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { fetchIngredients } from '../../api';
import Modal from '../modal/modal';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

const App = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [selectedIngredient, setIngredient] = React.useState(null);
  const [isModalIngredientDetailsShown, setModalIngredientDetailsShown] = React.useState(false);
  const [isModalOrderDetailsShown, setModalOrderDetailsShown] = React.useState(false);

  React.useEffect(() => {
    fetchIngredients()
      .then((data) => {
        setIngredients(data.data);
      })
      .catch(console.error);
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
      .map((selectedIngredient) => {
        return selectedIngredient.type;
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

  const toggleModalOrderDetails = () => {
    setModalOrderDetailsShown(!isModalOrderDetailsShown);
  };

  const toggleModalIngredientDetails = () => {
    setModalIngredientDetailsShown(!isModalIngredientDetailsShown);
  };

  const handleIngredientClick = (targetIngredient) => () => {
    setModalIngredientDetailsShown(true);
    setIngredient(targetIngredient);
  };

  return (
    <>
      <AppHeader />
      <main className="page cropper pl-5 pt-10 pr-5 pb-10 page_cropped">
        <div className="container cropper h-100p flex-row gap-x-10">
          <div className="flex-col page__slot">
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <div className="cropper h-100p">
              <BurgerIngredients ingredients={categorizedIngredients} handleIngredientClick={handleIngredientClick} />
            </div>
          </div>

          <div className="flex-col pt-25 pb-18 pr-4 pl-4 page__slot">
            <BurgerConstructor handleSuccessSubmit={toggleModalOrderDetails} />
          </div>
        </div>
      </main>

      {
        isModalOrderDetailsShown && (
          <Modal handleClose={toggleModalOrderDetails}>
            <OrderDetails />
          </Modal>
        )
      }

      {
        isModalIngredientDetailsShown
        && selectedIngredient
        && (
          <Modal handleClose={toggleModalIngredientDetails} title="Детали ингредиента">
            <IngredientDetails ingredient={selectedIngredient} />
          </Modal>
        )
      }
    </>
  )
};

export default App;
