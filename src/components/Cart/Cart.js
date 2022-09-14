import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Schnitzel', amount: 2, price: 28000 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>총 합계</span>
        <span>36000</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          닫기
        </button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
};

export default Cart;
