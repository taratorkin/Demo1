import React, { Component, Fragment } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import styles from '../css/app.min.css';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';


export default class App extends Component {

  constructor() {
    super();
    this.arr = ['Нажмите сюда', 'Нажмите сюда', 'Нажмите сюда'];
    this.carousel = [{ img: photo1 }, { img: photo2 }, { img: photo3 }];
  }

  render() {
    return (
      <Fragment>
        <div className={styles.container}>
          <Header></Header>
          <Sidebar></Sidebar>
          <Content arr={this.arr} carousel={this.carousel}></Content>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}
