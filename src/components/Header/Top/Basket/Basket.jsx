import React from 'react';

import './Basket.scss';
import soybean from '../../../../img/basket-details/1.png';
import sesame from '../../../../img/basket-details/2.png';
import wheat from '../../../../img/basket-details/3.png';
import corn from '../../../../img/basket-details/4.png';
import s from '../../../../img/basket-details/sesame.png';
import deleteIcon from '../../../../img/basket-details/x.png';

export const Basket = ({ setOpenedBascket }) => (
  <div className="details__content basket">

    <div className="basket__top">
      <div className="basket__top-images-container">
        <img 
          className="basket__img"
          src={soybean} 
          alt="soybean"
        />
        <img 
          className="basket__img"
          src={sesame} 
          alt=""
        />
        <img 
          className="basket__img"
          src={wheat} 
          alt="wheat"
        />
        <img 
          className="basket__img"
          src={corn} 
          alt="corn"
        />
      </div>
      
      <button 
        className="basket__btn-cancel"
        onClick={() => setOpenedBascket( prev => !prev)}
      />
    </div>

    <ul className="basket__items-list">

      <li className="basket__item">

        <img 
          className="basket__item-img"
          src={s} 
          alt="sesame"
        />
        <div className="basket__item-content">
          <span className="basket__item-percent basket__item-percent--soybean">
            4%
          </span>
          <span className="basket__item-percent basket__item-percent--sesame">
            15%
          </span>
          <span className="basket__item-percent basket__item-percent--wheat">
            61%
          </span>
          <span className="basket__item-percent basket__item-percent--corn">
            20%
          </span>
          <span className="basket__item-weight">
            1.50&nbsp;kg
          </span>
          <span className="basket__item-price">
            81.50&nbsp;€
          </span>
        </div>

        <img 
          className="basket__item-delete-icon"
          src={deleteIcon}
          alt="deleteIcon"
        />
      </li>
      
      <li className="basket__item">
        <img 
          className="basket__item-img"
          src={s} 
          alt="sesame"
        />
        <div className="basket__item-content">
          <span className="basket__item-percent basket__item-percent--soybean">
            14%
          </span>
          <span className="basket__item-percent basket__item-percent--sesame">
            19%
          </span>
          <span className="basket__item-percent basket__item-percent--wheat">
            51%
          </span>
          <span className="basket__item-percent basket__item-percent--corn">
            16%
          </span>
          <span className="basket__item-weight">
            0.50&nbsp;kg
          </span>
          <span className="basket__item-price">
            28.50&nbsp;€
          </span>
        </div>
        <img 
          className="basket__item-delete-icon"
          src={deleteIcon}
          alt="deleteIcon"
        />
      </li>

      <li className="basket__item">
        <img 
          className="basket__item-img"
          src={s} 
          alt="sesame"
        />
        <div className="basket__item-content">
          <span className="basket__item-percent basket__item-percent--soybean">
            5%
          </span>
          <span className="basket__item-percent basket__item-percent--sesame">
            14%
          </span>
          <span className="basket__item-percent basket__item-percent--wheat">
            65%
          </span>
          <span className="basket__item-percent basket__item-percent--corn">
            16%
          </span>
          <span className="basket__item-weight">
            0.66&nbsp;kg
          </span>
          <span className="basket__item-price">
            33.00&nbsp;€
          </span>
        </div>
        <img 
          className="basket__item-delete-icon"
          src={deleteIcon}
          alt="deleteIcon"
        />
      </li>
    </ul>

    <div className="basket__bottom">
      <span className="basket__bottom-price">
        Total: 143 €
      </span>
      <button className="basket__bottom-btn">
        Checkout
      </button>
    </div>

  </div>
)