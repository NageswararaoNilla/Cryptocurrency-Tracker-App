import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails
  return (
    <li className="list-item">
      <div className="name">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="rate">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
