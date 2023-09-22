import React, { Fragment } from 'react'
import styles from "./homesection.module.css"
import backgroundImage from "../../assets/images/home-background.jpg"
import { Button } from '../../shared/button/button'
import { Phone } from '../../shared/telephone/phone'

export const HomeSection = () => {

  return (
    <Fragment>
      <section id='home'>
        <div className='container home__container'>
          <div className={styles["home__section__left-box"]}>
            <h1 className={styles["home__title"]}>
              Quality cleaning for your home
            </h1>
            <p className={styles["home__text"]}>
              Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
            </p>
            <div style={{display: 'flex', marginTop: "34px", gap: "28px"}}>
              <Button name={"Get a free quote"}/>
              <Phone />
            </div>
          </div>
          <div className={styles["home__section__right-box"]}>
            <img src={backgroundImage} alt="home img" />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
