import React, { Fragment } from 'react';
import Carousel from './Carousel';
import styles from '../css/content.min.css';

export default class Content extends React.Component {

  constructor(props) {
    super(props);
    this.items = this.props.arr.map((item, index) =>
      <div className={styles.container__item} key={index} onClick={this.handleClick}>
        {item}
      </div>
    );
  }

  handleClick(e) {
    e.target.classList.toggle(styles.container__item_selected);
  }

  render() {
    return (
      <Fragment>
        <div className={[styles.container, 'offset-3 col-6'].join(' ')}>
          {this.items}
        </div>
        <Carousel carousel={this.props.carousel}></Carousel>
      </Fragment>
    );
  }
}
