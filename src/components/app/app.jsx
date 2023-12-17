import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import AppHeader from '../app-header/app-header'
import './app.css';

const App = () => {
  return (
    <>
      <AppHeader />
      <main className="container row p-10">
        <div className="col">
          <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
          constructor
        </div>
        <div className="col">ingredients</div>
      </main>
    </>
  )
};

export default App;
