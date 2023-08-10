import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import Emoji from '../Emoji'
import './index.css'

class SearchVolume extends Component {
  state = {keyWord: '', apiStatus: true, countValue: ''}

  onButtonClicked = () => {
    this.getSearchVolume()
  }

  onInputEleChange = event => {
    this.setState({keyWord: event.target.value})
  }

  getSearchVolume = async () => {
    this.setState({apiStatus: false})

    const {keyWord} = this.state
    const API_KEY = 'AIzaSyCo6cMKgcB_bUtEFCNZf-81RUU1M7cu1uw'
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(
        keyWord,
      )}&key=${API_KEY}`,
    )
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    const searchCountValue = data.pageInfo.totalResults
    // console.log(searchCountValue)
    if (response.ok === true) {
      this.setState({
        countValue: searchCountValue,
        apiStatus: true,
      })
    }

    // console.error('Error fetching search volume:', error);
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {countValue} = this.state

    return <p className="results1">{countValue}</p>
  }

  render() {
    const {keyWord, apiStatus} = this.state
    return (
      <div className="main-container">
        <div className="text-container ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png"
            alt="youtube"
            className="you-tube-image"
          />
          <h1 className="main-heading">Keyword Search Volume Checker</h1>
          <div className="input-container">
            <input
              type="search"
              value={keyWord}
              placeholder="Enter your keyword here..."
              onChange={this.onInputEleChange}
              className="special-input"
            />
            <button type="button" onClick={this.onButtonClicked}>
              Check Search Volume
            </button>
            <p className="results2">
              The Above Entered Keyword is searched in Youtube is(times):
            </p>
            {apiStatus ? this.renderSuccessView() : this.renderLoadingView()}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchVolume
