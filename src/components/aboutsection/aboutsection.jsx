import React from 'react';
import { Aboutcard } from '../../shared/aboutcard/aboutcard';
import aboutImage1 from "../../assets/images/about-image-1.svg";
import aboutImage2 from "../../assets/images/about-image-2.svg";
import aboutImage3 from "../../assets/images/about-image-3.svg"
import styles from "./about.module.css"
import { Button } from '../../shared/button/button';
import { ButtonWhite } from '../../shared/buttonwhite/buttonwhite';


export const Aboutsection = () => {
  return (
    <section>
      <div className="container about__container">
        <h1 className={styles.aboutTitle}>About Us</h1>
        <div className={styles.aboutTextBox}>
          <h6 className={styles.aboutText}>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.
          </h6>
        </div>
        <ul className={styles["about__list"]}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutCardImgBox}>
                <img src={aboutImage1} alt="About Card" />
            </div>
            <Aboutcard name="1. Schedule online" child="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n." image={aboutImage1}/>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutCardImgBox}>
                <img src={aboutImage2} alt="About Card" />
            </div>
            <Aboutcard name="2. Pay online easily" child="Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc." image={aboutImage1}/>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutCardImgBox}>
                <img src={aboutImage3} alt="About Card" />
            </div>
            <Aboutcard name="3. Get your house cleaned"  child="Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend." image={aboutImage1}/>
          </li>
        </ul>
        <div className={styles.aboutBtnBox}>
          <Button name="Get a free quote"/>
          <ButtonWhite name="Explore services"/>
        </div>
      </div>
      
    </section>
  )
}
