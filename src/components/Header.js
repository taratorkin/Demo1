import React, { Fragment } from 'react';
import styles from '../css/header.min.css';

export default function Header() {
  return (
    <Fragment>
      <div className={styles.header}>
        <h3>Демонстрация</h3>
      </div>
    </Fragment>
  );
}
