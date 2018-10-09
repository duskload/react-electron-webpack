import React, { Component } from "react";
import { connect } from 'react-redux';

import styles from "./styles.css";

export class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>{this.props.user}</h1>
        <p>A boilerplate for electron-react app.</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(App);