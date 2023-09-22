import React from 'react'
import { Fragment } from 'react'
import  logo  from "../../assets/images/site-images.svg"
import menuIcon from "../../assets/icons/menu-icon-img.png"
import styles from "./header.module.css";
import { Button } from '../../shared/button/button';


export const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container header__container">
          <div className={styles["header__box"]}>
            <div className={styles["header__left-box"]}>
              <div className={styles["header__logo-box"]}>
                <a href="#home">
                  <img src={logo} alt="Site Logo" />
                </a>
              </div>
              <nav>
                <ul className={styles["nav__list"]}>
                  <li className={styles["nav__list-item"]}><a className={styles["nav__link"]} href="#home">Home</a></li>
                  <li className={styles["nav__list-item"]}><a className={styles["nav__link"]} href="#about">About</a></li>
                  <li className={styles["nav__list-item"]}><a className={styles["nav__link"]} href="#service">Services</a></li>
                  <li className={styles["nav__list-item"]}><a className={styles["nav__link"]} href="#articles">Articles</a></li>
                  <li className={styles["nav__list-item"]}><a className={styles["nav__link"]} href="#contact">Contact</a></li>
                </ul>
              </nav>
              <div className={styles["menu__nav-bar"]}>
                <img src={menuIcon} alt="menu icon" />
              </div>
            </div>
            <div className={styles["header__right-box"]}>
              <p className={styles["header__text"]}>Cart(<span>0</span>)</p>
              <Fragment>
                <Button name="Get a free quote" />
              </Fragment>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}
