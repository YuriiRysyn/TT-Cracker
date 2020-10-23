import React from 'react';

import './Footer.scss'
import phoneIcon from "../../img/footer/phone.svg"
import mapMarkerIcon from "../../img/footer/map-marker.svg"
import shareIcon from "../../img/footer/fa-share-alt.svg"

import printestIcon from "../../img/footer/R-icon.png"
import facebookIcon from "../../img/footer/fb-icon.png"
import googleIcon from "../../img/footer/google-icon.png"


export const Footer = () => (
  <section className="footer">
    <div className="footer__content">

      <div className="footer__phone">
        <img 
          className="footer__phone-icon"
          src={phoneIcon}
          alt="phone icon"
        />
        <div className="footer__phone-content">
          <h3 className="footer__phone-headling">
            Phone
          </h3>
          <a href="tel: +43 ( 987 ) 345 - 6782" className="footer__phone-number">
            +43 ( 987 ) 345 - 6782
          </a>
        </div>
      </div>

      <div className="footer__address">
        <img 
          className="footer__address-icon"
          src={mapMarkerIcon}
          alt="phone icon"
        />
        <div className="footer__address-content">
          <h3 className="footer__address-headling">
            Address
          </h3>
          <span className="footer__address-location">
            Cracker Inc.&nbsp;10 
            Cloverfield Lane
            Berlin, IL 10928
            Germany
          </span>
        </div>
      </div>

      <div className="footer__share">
        <img 
          className="footer__share-icon"
          src={shareIcon}
          alt="phone icon"
        />
        <div className="footer__share-content">
          <h3 className="footer__share-headling">
            Share us
          </h3>
          <a href="https://www.pinterest.com/" className="footer__share-link">
            <img 
              className="footer__share-link-img"
              src={printestIcon} 
              alt="printest icon"
            />
            <span className="footer__share-link-address">
              https://www.pinterest.com/
            </span>
          </a>
          <a href="https://www.facebook.com/" className="footer__share-link">
          <img 
              className="footer__share-link-img"
              src={facebookIcon} 
              alt="facebook icon"
            />
            <span className="footer__share-link-address">
              https://www.facebook.com/
            </span>
          </a>
          <a href="https://www.google.com/" className="footer__share-link">
          <img 
              className="footer__share-link-img"
              src={googleIcon} 
              alt="google icon"
            />
            <span className="footer__share-link-address">
              https://www.google.com/
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
)