import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { ingredientPropType } from '../../lib/prop-types';

const BurgerIngredients = ({
  ingredients,
  handleIngredientClick,
}) => {

  return (
    <>
      <ul className="list flex-row">
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

      <div className={`${burgerIngredientsStyles.main} scroll custom-scroll mt-10`}>
        {
          ingredients.map(({ category, items }, index) => {

            return (
              <section key={index} className="mb-10">
                <h2 className="text text_type_main-medium mb-6">{category}</h2>

                <div className="flex-row flex-wrap gap-y-8 gap-x-6 pl-4 pr-4">
                  {
                    items.map((ingredient) => {

                      return (
                        <div key={ingredient._id} className={burgerIngredientsStyles.slot}>
                          <article className={`${burgerIngredientsStyles.card} pl-3 pr-3`} onClick={handleIngredientClick} id={ingredient._id}>
                            <Counter count={0} size="default" />
                            <img src={ingredient.image} alt="" className="img-fluid img-contain pl-4 pr-4 mb-1" />

                            <div className="flex-row flex-center mb-1">
                              <span className="text text_type_digits-default mr-2">{ingredient.price}</span>
                              <CurrencyIcon type="primary" />
                            </div>

                            <h3 className="text-center text text_type_main-default">{ingredient.name}</h3>
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

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
  handleIngredientClick: PropTypes.func.isRequired
}

export default BurgerIngredients;
