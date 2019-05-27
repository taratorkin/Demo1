import React, { Fragment } from 'react';
import Slide from './Slide';
import styles from '../css/Carousel.min.css';

export default class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.state = {
      currentImageIndex: 0
    };
  }

  prevClick(e) {
    this.rightArrow.classList.remove(styles.invisible);

    this.setState((prevState, props) => ({
      currentImageIndex: prevState.currentImageIndex - 1
    }));

    if (this.state.currentImageIndex - 2 < 0) {
      e.target.classList.add(styles.invisible);
    }
  }

  nextClick(e) {
    this.leftArrow.classList.remove(styles.invisible);

    this.setState((prevState, props) => ({
      currentImageIndex: prevState.currentImageIndex + 1
    }));

    if (this.state.currentImageIndex + 1 > this.props.carousel.length - 2) {
      e.target.classList.add(styles.invisible);
    }
  }

  dotClick(e) {
    let targetArray = Array.from(this.dotNavbar.children);
    let targetDot = targetArray.findIndex(elem => { return elem === e.target });
    this.setState({
      currentImageIndex: targetDot
    }, () => {
      if (this.state.currentImageIndex + 1 > this.props.carousel.length - 1) {
        this.rightArrow.classList.add(styles.invisible);
        this.leftArrow.classList.remove(styles.invisible);
      } else if (this.state.currentImageIndex - 1 < 0) {
        this.leftArrow.classList.add(styles.invisible);
        this.rightArrow.classList.remove(styles.invisible);
      } else {
        this.rightArrow.classList.remove(styles.invisible);
        this.leftArrow.classList.remove(styles.invisible);
      }
    });
  }

  render() {
    let rendArrow = null;
    if (this.state.currentImageIndex - 1 < 0) {
      rendArrow = <i className={[styles.carousel__arrow_left, styles.invisible, 'material-icons'].join(' ')}
         onClick={this.prevClick}
         ref={elem => { this.leftArrow = elem }}>arrow_back</i>
    } else {
      rendArrow = <i className={[styles.carousel__arrow_left, 'material-icons'].join(' ')}
         onClick={this.prevClick}
         ref={elem => { this.leftArrow = elem }}>arrow_back</i>
    }

    let navDots = this.props.carousel.map((elem, index) => {
      if (this.state.currentImageIndex === index) {
        return (
          <div className={[styles.carousel__dotNavbar__dot, styles.carousel__dotNavbar__dot_active].join(' ')}
             onClick={this.dotClick} key={index}></div>
        );
      } else {
        return (
          <div className={styles.carousel__dotNavbar__dot}
             onClick={this.dotClick} key={index}></div>
        );
      }
  });

    return (
      <Fragment>

        <div className={[styles.wrapper, 'offset-3 col-6'].join(' ')}>
          {rendArrow}
          <div className={[styles.carousel].join(' ')}>
            <Slide carousel={this.props.carousel} imgIndex={this.state.currentImageIndex}></Slide>
            <div className={[styles.carousel__dotNavbar, 'offset-3 col-6'].join(' ')} ref={elem => { this.dotNavbar = elem }}>
              {navDots}
            </div>
          </div>
          <i className={[styles.carousel__arrow_right, 'material-icons'].join(' ')}
             onClick={this.nextClick}
             ref={elem => { this.rightArrow = elem }}>arrow_forward</i>
        </div>

      </Fragment>
    );
  }

}
