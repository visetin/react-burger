import { apiRouts } from '../lib/api-routs';

export const fetchIngredients = () => {
  return fetch(apiRouts.ingredients)
    .then((res) => {
      return res.json();
    });
};
