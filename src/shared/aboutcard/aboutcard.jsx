import React, { Fragment } from 'react'

import styles from "./card.module.css"


export const Aboutcard = ({name, child}) => {
  return (
    <Fragment>
      <div className={styles.aboutImageBox}>
        
      </div>
      <h2 className={styles.aboutCardTitle}>{name}</h2>
      <p className={styles.aboutCardText}>{child}</p>
    </Fragment>
  )
}
