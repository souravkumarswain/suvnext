import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        SUVDev
      </div>
      <div className={styles.text}>
        SUV creative thoughts agency ©️ All rights reserved
      </div>
    </div>
  )
}

export default Footer