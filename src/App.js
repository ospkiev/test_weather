import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { inputAction } from './redux/actions/inputAction';
import { fetchData } from './redux/actions/fetchDataAction';
import { saveToList } from './redux/actions/saveToListAction';
import { inputClear } from './redux/actions/inputAction';
import { fetchDataMoreDays } from './redux/actions/fetchDataMoreDaysAction';
import styles from './App.module.css';
import MoreDays from './moreDays/MoreDays';
import Menu from './menu/Menu';
import Today from './today/Today';


class App extends Component {

  state = {
    date: '',
    picturesCity: {},
  };

  componentDidMount = async () => {
    await this.props.fetchDataMoreDays();
    await this.props.fetchData();
    this.timeFunction();
    this.getPicture();
  };

  getData = async (e) => {
    e.preventDefault();
    await this.props.fetchDataMoreDays(this.props.input);
    await this.props.fetchData(this.props.input);
    this.props.saveToList(this.props.input);
    this.getPicture(this.props.input);
    this.props.inputClear();
  };

  getDataFromFavoriteList = (e) => {
    let id = e.target.dataset.id;
    let cityName = this.props.favoriteList.filter(el => el.id === id)[0].name;
    this.props.fetchData(cityName);
    this.props.fetchDataMoreDays(cityName);
    this.getPicture(cityName);
  };

  timeFunction = () => {
    setInterval(() => {
      let date = moment().format('LLLL');
      this.setState({
        date: date,
      })
    }, 1000)
  };

  getPicture = (q) => {
    axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${q || 'Kiev'}`)
      .then(res => {
        this.setState({
          picturesCity: res.data.hits[Math.floor(Math.random() * res.data.hits.length)].largeImageURL,
        })
      })
      .catch(error => {
        console.log(error);
      })
  };




  render() {
    const { input, favoriteList } = this.props;

    return (
      < div className={styles.app}>
        <div>
          <form action="" onSubmit={this.getData}>
            <div className={styles.input_wrapper}>
              <input type="text" placeholder=" Enter name of city..." value={input} className={styles.input} onChange={this.props.inputAction} required />
            </div>
          </form>
          <div className={styles.time}>{this.state.date}</div>
          <div className={styles.favoriteList} onClick={this.getDataFromFavoriteList}>{favoriteList.map(el => <p className={styles.favorite_item} key={el.id} data-id={el.id}>{el.name}</p>)}</div>
        </div>
        <Menu />
        <Switch>
          <Route exact path='/' render={() => <Today />} />
          <Route path='/moredays' render={() => <MoreDays />} />
        </Switch>
        <div className={styles.main_img} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${this.state.picturesCity})` }}></div>
      </div >
    );
  }
}




function mapStateToProps(state) {
  return {
    input: state.input,
    data: state.data.data,
    loading: state.data.loading,
    favoriteList: state.favoriteList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputAction: function (e) {
      dispatch(inputAction(e))
    },
    fetchData: function (param) {
      dispatch(fetchData(param))
    },
    saveToList: function (input) {
      dispatch(saveToList(input))
    },
    inputClear: function () {
      dispatch(inputClear())
    },
    fetchDataMoreDays: function (param) {
      dispatch(fetchDataMoreDays(param))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
