import React, { Component } from 'react';
// import Loader from 'react-loader-spinner';
import moment from 'moment';
import { connect } from 'react-redux';
import { inputAction } from './redux/actions/inputAction';
import { fetchData } from './redux/actions/fetchDataAction';
import { saveToList } from './redux/actions/saveToListAction';
import styles from './App.module.css';


class App extends Component {

  state = {
    date: {},
    isLoaded: false,
  }


  componentDidMount() {
    this.props.fetchData(this.props.input);
  }

  getData = async (e) => {
    e.preventDefault();
    await this.props.fetchData(this.props.input);
    this.props.saveToList(this.props.input)
  }

  timeFunction = () => {
    setInterval(() => {
      let date = moment().format('LLLL');
      this.setState({
        date: date,
      })
    }, 1000)
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
              <ul className={styles.weather_info}>
                <li>Name : {data.name}</li>
                <li>temperature : {data.main.temp} &deg; C</li>
                <li>pressure : {data.main.pressure} mm Hg </li>
                <li>humidity : {data.main.humidity} %</li>
                <li>wind : {data.wind.speed} m/s</li>
                <li>condition <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" /></li>
              </ul>

              {favoriteList.map(el => <div>{el}</div>)}

            </div>

        }

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
