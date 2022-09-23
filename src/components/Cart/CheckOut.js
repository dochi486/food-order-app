import classes from './CheckOut.module.css';

const CheckOut = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">받는 분 성함</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">주소</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">우편번호</label>
        <input type="text" id="postal" />
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
