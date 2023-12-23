import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { ingredientPropType } from '../../lib/prop-types';
import IngredientFormulationsProp from './ui/ingredient-formulations-prop/ingredient-formulations-prop';

const IngredientDetails = ({
  ingredient,
}) => {

  return (
    <section className={`flex-col flex-ai-center pt-4 pb-15`}>
      <img src={ingredient.image_large} alt="" className="img-fluid img-contain mb-15" />

      <p className="text-center text text_type_main-medium mb-8">{ingredient.name}</p>

      <div className="flex-row gap-x-5">
        <IngredientFormulationsProp title="Калории, ккал" value={ingredient.calories} />
        <IngredientFormulationsProp title="Белки, г" value={ingredient.proteins} />
        <IngredientFormulationsProp title="Жиры, г" value={ingredient.fat} />
        <IngredientFormulationsProp title="Углеводы, г" value={ingredient.carbohydrates} />
      </div>
    </section>
  )
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientDetails;
