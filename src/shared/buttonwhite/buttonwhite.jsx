import React from 'react'
import styles from "./buttonwhite.module.css"

export const ButtonWhite = ({name}) => {
  return (
    <button  className={styles["shared__btn-white"]}>
      {name}
    </button>
  )
}
