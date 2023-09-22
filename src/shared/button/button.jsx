import React, { Fragment } from 'react'
import styles from "./button.module.css"

export const Button = ({name}) => {
  return (
    <Fragment>
      <button className={styles["shared__btn"]}>
        {name}
      </button>
    </Fragment>
  )
}
