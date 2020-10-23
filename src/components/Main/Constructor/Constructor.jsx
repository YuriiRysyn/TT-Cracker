import React, { useState } from 'react';
import classNames from 'classnames/bind';

import './Constructor.scss';
import soybean from '../../../img/constructor/soybean.svg'
import sesame from '../../../img/constructor/sesame.svg'
import wheat from '../../../img/constructor/wheat.svg'
import corn from '../../../img/constructor/corn.svg'
import pacage from '../../../img/constructor/pacage.svg'

export const Constructor = () => {
  const [positions, setPositions] = useState([20, 10, 30, 40]);
  const [selectedPack, setSelectedPack] = useState("Small pack");
  const [openedList, setOpenedList] = useState(false);

  const changePositions = (index, value) => {
    const arr = [...positions];
    const currentValue = positions[index];
    arr[index] = value;
    arr[3] = positions[3] - value + currentValue;
    setPositions(arr);
  };

  const onSliderChange = (event, index) => {
    const value = Number(event.target.value);
    const currentMax = positions[index] + positions[3];
    value < currentMax ? changePositions(index, value) : changePositions(index, currentMax);
  };

  const changeSelectedPack = (value) => {
    setSelectedPack(value)
    setOpenedList(false)
  };

  return (
    <section className="main__constructor constructor">
      <div className="constructor__content">
        <h2 className="constructor__headling">
          Cracker constructor 
        </h2>
  
        <div className="constructor__ingredients-calculator">
          <p className="constructor__current-value">
            Current value:
            <span>
              143 €
            </span>
          </p>
          <ul className="constructor__list">
  
            <li className="constructor__item">
              <img 
                className="constructor__item-icon"
                src={soybean} 
                alt="soybean"
              />
              <input 
                type="range"
                className="constructor__item-range soybean"
                value={positions[0]}
                min="0"
                max="100"
                onChange={(event)=> onSliderChange(event, 0)}
              />
              <span className="constructor__item-value soybean__item-value">
                {positions[0]}%
              </span>
            </li>
  
            <li className="constructor__item">
              <img 
                className="constructor__item-icon"
                src={sesame} 
                alt="sesame"
              />
              <input 
                type="range"
                className="constructor__item-range sesame"
                value={positions[1]}
                min="0"
                max="100"
                onChange={(event)=> onSliderChange(event, 1)}
              />
              <span className="constructor__item-value sesame__item-value">
                {positions[1]}%
              </span>
            </li>
  
            <li className="constructor__item">
              <img 
                className="constructor__item-icon"
                src={wheat} 
                alt="wheat"
              />
              <input 
                type="range"
                className="constructor__item-range wheat"
                value={positions[2]}
                min="0"
                max="100"
                onChange={(event)=> onSliderChange(event, 2)}

              />
              <span className="constructor__item-value wheat__item-value">
                {positions[2]}%
              </span>
            </li>
  
            <li className="constructor__item">
              <img 
                className="constructor__item-icon"
                src={corn} 
                alt="corn"
              />
              <input 
                type="range"
                className="constructor__item-range corn"
                value={positions[3]}
                min="0"
                max="100"
              />
              <span className="constructor__item-value corn__item-value">
                {positions[3]}%
              </span>
            </li>
  
            <li className="constructor__item">
              <img 
                className="constructor__item-icon"
                src={pacage} 
                alt="pacage"
              />

              <div 
                className={classNames('pacage-select', { 'pacage-select--closed': !openedList })}
                onClick={() => setOpenedList( prev => !prev)}
              > 
                <span className="pacage-select__selected-item" >
                  {selectedPack}
                </span>
              </div>

              {openedList ? 
                <div className="pacage-select__options">
                  <span className="pacage-select__item pacage-select__item--disabled">
                    Choose your pack
                  </span>
                  <span 
                    className="pacage-select__item"
                    onClick={() => changeSelectedPack("Small pack")}
                  >
                    Small pack
                  </span>
                  <span 
                    className="pacage-select__item"
                    onClick={() => changeSelectedPack("Medium pack")}
                  >
                    Medium pack
                  </span>
                  <span 
                    className="pacage-select__item pacage-select__item--last"
                    onClick={() => changeSelectedPack("Large pack")}
                  >
                    Large pack
                  </span>
                </div>
                  : ''
                }
            </li>
          </ul>
          <button className="constructor__btn">
            <span className="constructor__btn-text">+</span>
            <span className="constructor__btn-text--hovered">Add&nbsp;to&nbsp;card</span>
          </button>
        </div>
  
      </div>
    </section>
  )
};