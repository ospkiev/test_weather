import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { inputAction } from './redux/actions/inputAction';
import { fetchData } from './redux/actions/fetchDataAction';
import { saveToList } from './redux/actions/saveToListAction';
import styles from './App.module.css';


class App extends Component {

  state = {
    date: '',
    picturesCity: {},
  }


  componentDidMount() {
    this.props.fetchData(this.props.input);
    this.timeFunction();
    this.getPicture();
  }

  getData = async (e) => {
    e.preventDefault();
    await this.props.fetchData(this.props.input);
    this.props.saveToList(this.props.input);
    this.getPicture(this.props.input)
  }

  timeFunction = () => {
    setInterval(() => {
      let date = moment().format('LLLL');
      // console.log(date);
      this.setState({
        date: date,
      })
    }, 1000)
  }

  getPicture = (q) => {
    // let q = this.props.input;
    axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${q || 'Kiev'}`)
      .then(res => {
        this.setState({
          picturesCity: res.data.hits[Math.floor(Math.random() * res.data.hits.length)].largeImageURL,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    const { data, input, loading, favoriteList } = this.props;
    // console.log(data);
    return (
      <div className={styles.app}>

        {
          !loading ? <p>Loading ...</p> :
            <div>
              <form action="" onSubmit={this.getData}>
                <div className={styles.input_wrapper}>
                  <input type="text" placeholder=" Enter name of city..." value={input} className={styles.input} onChange={this.props.inputDispatch} required />
                </div>
              </form>
              <div className={styles.time}>{this.state.date}</div>
              <ul className={styles.weather_info}>
                <li className={styles.city_name}>{data.name}</li>
                <li>temperature : {data.main.temp} &deg; C</li>
                <li>pressure : {data.main.pressure} mm Hg </li>
                <li>humidity : {data.main.humidity} %</li>
                <li>wind : {data.wind.speed} m/s</li>
                <li><img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" /></li>
              </ul>

              <div className={styles.favoriteList}>{favoriteList.map(el => <div>{el}</div>)}</div>

            </div>

        }
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
    inputDispatch: function (e) {
      dispatch(inputAction(e))
    },
    fetchData: function (input) {
      dispatch(fetchData(input))
    },
    saveToList: function (input) {
      dispatch(saveToList(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
