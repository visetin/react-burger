import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const ELEMENT_TEMP_IMG = 'https://code.s3.yandex.net/react/code/bun-02.png';

const makeMockIngredientsList = () => {
  const result = [];

  for (let index = 0; index < 8; index += 1) {
    result.push(
      <div className="relative pl-8 pr-2" key={index}>
        <div className="absolute pos-left pos-middle flex-row">
          <DragIcon type="primary" />
        </div>

        <ConstructorElement
          text="Краторная булка N-200i"
          price={50}
          thumbnail={ELEMENT_TEMP_IMG}
        />
      </div>
    );
  }

  return result;
}

const BurgerConstructor = () => {
  const mockIngredients = makeMockIngredientsList();

  return (
    <>
      <div className="flex-col h-100p cropper mb-10">
        <div className="pl-8 pr-5">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={ELEMENT_TEMP_IMG}
          />
        </div>

        <div className="scroll custom-scroll h-100p mt-4 mb-4">
          <div className="flex-col gap-y-4">
            {mockIngredients}
          </div>
        </div>

        <div className="pl-8 pr-5">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={ELEMENT_TEMP_IMG}
          />
        </div>
      </div>

      <div className="flex-row flex-jc-end flex-ai-center">
        <span className="text text_type_digits-medium mr-2">610</span>
        <span className="icon-8 pr-10">
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
