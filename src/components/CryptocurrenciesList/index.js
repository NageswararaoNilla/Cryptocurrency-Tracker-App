import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props
  return (
    <div className="responsive-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-img"
      />
      <ul className="crypto-container">
        <li className="table-header">
          <p>Coin Type</p>
          <div className="rate">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </li>
        {cryptoList.map(each => (
          <CryptocurrencyItem key={each.id} cryptoDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
