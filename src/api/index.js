import { apiRouts } from '../lib/api-routs';

export const fetchIngredients = () => {
  return fetch(apiRouts.ingredients)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка ${res.status}`);
    });
};
