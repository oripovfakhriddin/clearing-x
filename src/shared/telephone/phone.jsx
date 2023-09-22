import React from 'react'
import phoneIcon from "../../assets/icons/phone-icon.svg"
import styles from "./phone.module.css"


export const Phone = () => {
  return (
    <a href='tel: (414) 567 - 2109'>
      <div className={styles.phoneBox}> 
        <div className={styles.phoneLeft}>
          <img src={phoneIcon} alt="Icon Phone" />
        </div>
        <div className={styles.phoneRight}>
          <p className={styles.phoneTitle}>Call us now</p>
          <p className={styles.phoneText} >(414) 567 - 2109</p>
        </div>
      </div>
    </a>
  )
}
