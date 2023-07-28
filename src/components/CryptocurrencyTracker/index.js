import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getFetchData()
  }

  getFetchData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const dataList = await response.json()
    const updateData = dataList.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({
      cryptoList: updateData,
      isLoading: false,
    })
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div className="loader-cls" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoList={cryptoList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
