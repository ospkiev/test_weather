import React, { Component } from 'react';

// import axios from 'axios';
import { connect } from 'react-redux';
import { inputAction } from './redux/actions/inputAction';
import { fetchData } from './redux/actions/fetchDataAction';
import styles from './App.module.css';


class App extends Component {


  // componentDidMount() {
  //   this.props.fetchData();
  // }

  getData = (e) => {
    e.preventDefault();
    this.props.fetchData(this.props.input);
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.getData}>
          <div className={styles.input_wrapper}>
            <input type="text" placeholder=" Enter name of city..." value={this.props.input} className={styles.input} onChange={this.props.inputDispatch} required />
            {/* <img src={star} alt="Add to favorite" className={styles.img_star} onClick={favoriteCityListFunction} /> */}

          </div>
          <p className={styles.date}></p>
        </form>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    input: state.input,
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputDispatch: function (e) {
      dispatch(inputAction(e))
    },
    fetchData: function (input) {
      dispatch(fetchData(input))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
