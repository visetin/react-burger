import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';

const AppHeader = () => {

  return (
    <header className={appHeaderStyles.header}>
      <div className={`${appHeaderStyles.row} pt-4 pb-4 pl-10 pr-10`}>
        <nav className={appHeaderStyles.nav}>
          <a href="/" className={`${appHeaderStyles.link} pt-4 pb-4 pl-5 pr-5`}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default">Конструктор</span>
          </a>
          <a href="/" className={`${appHeaderStyles.link} pt-4 pb-4 pl-5 pr-5`}>
            <ListIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
          </a>
        </nav>
        <Logo />
        <a href="/" className={`${appHeaderStyles.link} pt-4 pb-4 pl-5 pr-5`}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
        </a>
      </div>
    </header>
  )
};

export default AppHeader;
