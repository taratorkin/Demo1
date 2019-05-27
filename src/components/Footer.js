import React, { Fragment } from 'react';
import styles from '../css/footer.min.css'

export default function Footer() {
  return (
    <Fragment>
      <div className={styles.footer}>
        <ul className="col-3">
          <li><a href="#">Вакансии</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">Каталог</a></li>
        </ul>
        <p className="col-6">2019</p>
        <ul className="col-3">
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Цены</a></li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">О нас</a></li>
        </ul>
      </div>
    </Fragment>
  );
}
