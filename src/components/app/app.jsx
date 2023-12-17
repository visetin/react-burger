import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { ingredientsMockData } from '../../utils/data';
import './app.css';

const App = () => {
  return (
    <>
      <AppHeader />
      <main className="page-container page-layout page-layout_cropped pl-5 pt-10 pr-5 pb-10">
        <div className="page-col page-col_cropped">
          <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
          <BurgerIngredients ingredients={ingredientsMockData} />
        </div>
        <div className="page-col page-col_cropped">constructor</div>
      </main>
    </>
  )
};

export default App;
