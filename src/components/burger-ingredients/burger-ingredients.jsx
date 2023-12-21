import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';

const BurgerIngredients = ({ ingredients }) => {

  return (
    <>
      <ul className={`${burgerIngredientsStyles.tabs} mb-10`}>
        {
          ingredients.map(({ category }, index) => {
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
          ingredients.map(({ category, items }, index) => {

            return (
              <section key={index} className="mb-10">
                <h2 className="text text_type_main-medium mb-6">{category}</h2>

                <div className={`${burgerIngredientsStyles.tile} pl-1 pr-1`}>
                  {
                    items.map((ingredient) => {

                      return (
                        <article key={ingredient._id} className={`${burgerIngredientsStyles.card} ${burgerIngredientsStyles.col} pl-3 pr-3`}>
                          <Counter count={0} size="default" />
                          <img src={ingredient.image} alt="" className={`${burgerIngredientsStyles.cardImage} pl-4 pr-4 mb-1`} />

                          <div className={`${burgerIngredientsStyles.cardPriceBox} mb-1`}>
                            <span className="text text_type_digits-default mr-2">{ingredient.price}</span>
                            <CurrencyIcon type="primary" />
                          </div>

                          <h3 className={`${burgerIngredientsStyles.cardName} text text_type_main-default`}>{ingredient.name}</h3>
                        </article>
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
