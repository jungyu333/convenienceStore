import { ICart } from '../@types/common';

const uesGetTotal = (carts: ICart[]) => {
  let total = 0;
  carts.forEach(cart => {
    total += cart.product.price * cart.quantity;
  });
  return total;
};

export default uesGetTotal;
