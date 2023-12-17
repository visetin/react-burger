import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';

const categoriesMap = {
  bun: 'Булки',
  main: 'Начинки',
  sauce: 'Соусы',
};

const BurgerIngredients = ({ ingredients }) => {
  const categorizedIngredients = ingredients
    .map((ingredient) => {
      return ingredient.type;
    })
    .filter((category, index, arr) => {
      return arr.indexOf(category) === index;
    })
    .reduce((acc, category) => {
      const processedCategory = {
        category: categoriesMap[category],
        items: ingredients.filter(({ type }) => {
          return type === category;
        }),
      };

      return [...acc, processedCategory];
    }, []);

  return (
    <>
      <ul className={`${burgerIngredientsStyles.tabs} mb-10`}>
        {
          categorizedIngredients.map(({ category }, index) => {
            return (
              <li key={index}>
                <Tab active={index === 0}>
                  {category}
                </Tab>
              </li>
            )
          })
        }
      </ul>

      <div className={`${burgerIngredientsStyles.scrollBox} custom-scroll`}>
        {
          categorizedIngredients.map(({ category, items }, index) => {

            return (
              <section key={index} className="mb-10">
                <h2 className="text text_type_main-medium mb-6">{category}</h2>

                <div className={`${burgerIngredientsStyles.tile} pl-1 pr-1`}>
                  {
                    items.map((ingredient) => {

                      return (
                        <div key={ingredient._id} className={`${burgerIngredientsStyles.col} pl-3 pr-3`}>
                          <article className={burgerIngredientsStyles.card}>
                            <Counter count={1} size="default" />
                            <img src={ingredient.image} alt="" className={`${burgerIngredientsStyles.cardImage} pl-4 pr-4 mb-1`} />

                            <div className={`${burgerIngredientsStyles.cardPriceBox} mb-1`}>
                              <span className="text text_type_digits-default mr-2">{ingredient.price}</span>
                              <CurrencyIcon type="primary" />
                            </div>

                            <p className={`text text_type_main-default ${burgerIngredientsStyles.cardName}`}>{ingredient.name}</p>
                          </article>
                        </div>
                      )
                    })
                  }
                </div>
              </section>
            )
          })
        }
      </div>
    </>
  )
};

export default BurgerIngredients;
