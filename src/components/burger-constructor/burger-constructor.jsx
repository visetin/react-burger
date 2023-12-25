import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({
  handleSuccessSubmit,
}) => {

  return (
    <>
      <div className="flex-col h-100p cropper mb-10">
        <div className="pl-8 pr-5">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>

        <div className="scroll custom-scroll h-100p mt-4 mb-4">
          <div className="flex-col gap-y-4">
            <div className="relative pl-8 pr-2">
              <div className="absolute pos-left pos-middle icon-box">
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                text="Сыр с астероидной плесенью"
                price={4142}
                thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
              />
            </div>

            <div className="relative pl-8 pr-2">
              <div className="absolute pos-left pos-middle icon-box">
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                text="Биокотлета из марсианской Магнолии"
                price={424}
                thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
              />
            </div>

            <div className="relative pl-8 pr-2">
              <div className="absolute pos-left pos-middle icon-box">
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={300}
                thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
              />
            </div>

            <div className="relative pl-8 pr-2">
              <div className="absolute pos-left pos-middle icon-box">
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                text="Соус традиционный галактический"
                price={15}
                thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
              />
            </div>

            <div className="relative pl-8 pr-2">
              <div className="absolute pos-left pos-middle icon-box">
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                text="Сыр с астероидной плесенью"
                price={4142}
                thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
              />
            </div>

            <div className="relative pl-8 pr-2">
              <div className="absolute pos-left pos-middle icon-box">
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                text="Соус фирменный Space Sauce"
                price={80}
                thumbnail="https://code.s3.yandex.net/react/code/sauce-04.png"
              />
            </div>
          </div>
        </div>

        <div className="pl-8 pr-5">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </div>

      <div className="flex-row flex-jc-end flex-ai-center">
        <span className="text text_type_digits-medium mr-2">610</span>
        <span className="icon-size-8 pr-10">
          <CurrencyIcon type="primary" size="32" />
        </span>
        <Button htmlType="button" type="primary" size="large" onClick={handleSuccessSubmit}>
          Оформить заказ
        </Button>
      </div>
    </>
  )
};

BurgerConstructor.propTypes = {
  handleSuccessSubmit: PropTypes.func.isRequired
};

export default BurgerConstructor;
