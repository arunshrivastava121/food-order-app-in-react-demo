import React, { useRef, useState } from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = props => {

  const [isValidForm, setIsValidform] = useState(true);
  const inputNumber = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = inputNumber.current.value;
    const enteredAmountNo = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNo < 1 || enteredAmountNo > 5){
      setIsValidform(false);
      return;
    }

    props.onAddToCart(enteredAmountNo);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        lable='Amount'
        ref={inputNumber}
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!isValidForm && <p>Please enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;