import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import img from '../../images/done.png'

const OrderDetails = () => {

  return (
    <section className={`flex-col flex-ai-center pt-4 pb-15`}>
      <h2 className="text-center text-shadow text text_type_digits-large mb-8">034536</h2>
      <p className="text-center text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={img} alt="" className="img-fluid img-contain mb-15" />
      <p className="text-center text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text-center text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </section>
  )
};

export default OrderDetails;
