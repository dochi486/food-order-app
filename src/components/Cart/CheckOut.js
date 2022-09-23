import classes from './CheckOut.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const CheckOut = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;

    const enteredNameisValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameisValid,
      address: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameisValid && enteredAddressIsValid && enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">받는 분 성함</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>정확한 성함을 입력해주세요.</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">주소</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>정확한 주소를 입력해주세요.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">우편번호</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>5자리의 우편번호를 입력해주세요.</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button className={classes.submit}>확인</button>
      </div>
    </form>
  );
};

export default CheckOut;
