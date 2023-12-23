import PropTypes from 'prop-types';
import ingredientFormulationsPropStyles from './ingredient-formulations-prop.module.css';

const IngredientFormulationsProp = ({ title, value }) => {

  return (
    <div className={ingredientFormulationsPropStyles.item}>
      <p className="text-center text text_type_main-default text_color_inactive mb-2">{title}</p>
      <p className="text-center text text_type_digits-default text_color_inactive">{value}</p>
    </div>
  )
};

IngredientFormulationsProp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default IngredientFormulationsProp;
