import React, { useState } from 'react';
import { Basket } from './Basket/Basket';

import basket from "../../../img/basket.svg"
import './Top.scss';

export const Top = () => {
  const [openedBascket, setOpenedBascket] = useState(false);

  return (
    <>
      <div className="header__top top">
        <div className="top__content">
          <a href="/" className="top__basket-link">
          <img 
            className="top__basket-img"
            src={basket} 
            alt="basket"
          />
          </a>
  
          <span className="top__total">
            Total :
          </span>
          <span className="top__total-price">
             143 €
          </span>
          <div className="top__details details" >
            <span className="details__text" onClick={() => setOpenedBascket( prev => !prev)}>
              Details
            </span>
            <button className="details__toogler" onClick={() => setOpenedBascket( prev => !prev)}/>
            {openedBascket && <Basket setOpenedBascket={setOpenedBascket}/>}
           
          </div>
        </div>
      </div>
    </>
  )
}