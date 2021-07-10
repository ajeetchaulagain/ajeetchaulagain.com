import React from 'react';
import coffeImage from '../../images/cuplogo-sm.png';
import * as buyMeCoffeeButtonStyles from './buy-me-coffee-button.module.scss';

const BuyMeCoffeeButton = (): JSX.Element => {
  return (
    <div className={buyMeCoffeeButtonStyles.buymecoffeeWrapper}>
      <a href="https://ko-fi.com/ajeetchaulagain">
        {' '}
        <img src={coffeImage} />
        Buy me a coffee{' '}
      </a>
    </div>
  );
};

export default BuyMeCoffeeButton;
