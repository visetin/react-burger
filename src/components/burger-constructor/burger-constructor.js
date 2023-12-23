import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';

const ELEMENT_TEMP_IMG = 'https://code.s3.yandex.net/react/code/bun-02.png';

const makeMockIngredientsList = () => {
  const result = [];

  for (let index = 0; index < 10; index += 1) {
    result.push(<ConstructorElement
      key={index}
      text="Краторная булка N-200i"
      price={50}
      thumbnail={ELEMENT_TEMP_IMG}
    />);
  }

  return result;
}

const BurgerConstructor = () => {
  const mockIngredients = makeMockIngredientsList();

  return (
    <>
      <div className="flex-column h-100p cropper mb-10">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={ELEMENT_TEMP_IMG}
        />

        <div className="scroll custom-scroll h-100p mt-4 mb-4">
          <div className={burgerConstructorStyles.list}>
            {mockIngredients}
          </div>
        </div>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={ELEMENT_TEMP_IMG}
        />
      </div>

      <div className={burgerConstructorStyles.result}>
        <span className="text text_type_digits-medium mr-2">610</span>
        <span className="icon-32 pr-10">
          <CurrencyIcon type="primary" size="32" />
        </span>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </>
  )
};

export default BurgerConstructor;
