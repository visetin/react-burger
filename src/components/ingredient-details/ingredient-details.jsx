import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { ingredientPropType } from '../../lib/prop-types';
import IngredientDetailsStyles from './ingredient-details.module.css';

const IngredientDetails = ({
  ingredient,
}) => {

  return (
    <section className="flex-col flex-ai-center">
      <img src={ingredient.image_large} alt="Ингредиент" className="img-fluid img-contain mb-15" />

      <h2 className="text-center text text_type_main-medium mb-8">{ingredient.name}</h2>

      <div className="flex-row gap-x-5">
        <div className={IngredientDetailsStyles.formulationsItem}>
          <p className="text-center text text_type_main-default text_color_inactive mb-2">Калории, ккал</p>
          <p className="text-center text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </div>
        <div className={IngredientDetailsStyles.formulationsItem}>
          <p className="text-center text text_type_main-default text_color_inactive mb-2">Белки, г</p>
          <p className="text-center text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </div>
        <div className={IngredientDetailsStyles.formulationsItem}>
          <p className="text-center text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
          <p className="text-center text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </div>
        <div className={IngredientDetailsStyles.formulationsItem}>
          <p className="text-center text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
          <p className="text-center text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </div>
      </div>
    </section>
  )
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientDetails;
