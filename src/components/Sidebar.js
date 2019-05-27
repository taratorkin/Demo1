import React, { Fragment } from 'react';
import styles from '../css/sidebar.min.css';

export default function Sidebar() {
  return (
    <Fragment>
      <div className={styles.sidebar}>
        <ul>
          <li><a href="#">Подписки</a></li> 
          <li><a href="#">Видео</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Фотографии</a></li>
        </ul>
      </div>
    </Fragment>
  );
}
