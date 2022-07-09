import React from 'react';
import './Currencies.css';
import Currency from '../Currency/Currency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import Axios from 'axios';

const Currencies = () => {

    // CoinLor API
    // const options = {
    //     method: 'GET',
    //     url: 'https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/',
    //     params: { start: '0', limit: '100' },
    //     headers: {
    //         'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com',
    //         'X-RapidAPI-Key': '424534824cmsh4bedc0bad7d5e5dp1d8599jsn6ff6fb980362'
    //     }
    // };


    // const options = {
    //     method: 'GET',
    //     url: 'https://rest.coinapi.io/v1/exchanges',
    //   // params: { vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc' },
    //     headers: {
    //         'X-CoinAPI-Host': 'rest.coinapi.io',
    //         'X-CoinAPI-Key': 'A1EDC5F9-DD30-4ADB-A9DF-71A54390436B'
    //     }
    // };

    // Axios.request(options).then(function (response) {
    //     console.log('coins from coin api',response.data);
    //     localStorage.setItem('CoinGecko', JSON.stringify(response.data))
    // }).catch(function (error) {
    //     console.error(error);
    // });




    const getCryptoInfo = () => {
        // Axios.request(options).then(function (response) {
        //     console.log(response.data);
        //     localStorage.setItem('cryptoC', JSON.stringify(response.data))
        // }).catch(function (error) {
        //     console.error(error);
        // });


        console.log('hey', JSON.parse(localStorage.getItem('CoinGecko')));
        console.log(JSON.parse(localStorage.getItem('cryptoC')));
    }

    const rank = '#', coin = 'Coin', symbol = 'Symbol', price = 'Price', change = 'Change', marketCap = 'Market-Cap', lastDays = 'Volume 24h';
    const height = 10;
    const jsonCrypto = JSON.parse(localStorage.getItem('cryptoC'));
    const jsonCoinGecko = JSON.parse(localStorage.getItem('CoinGecko'));
    const [pageNumber, setPageNumber] = useState(1);

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    }

    const previousPage = () => {
        setPageNumber(pageNumber - 1);
    }

    console.log(jsonCrypto.data[0]);
    return (
        <div className="currencies-container">
            <div className="table">
                <Currency bool={false} height={height} rank={rank} coin={coin}
                    symbol={symbol} price={price} change={change}
                    marketCap={marketCap} lastDays={lastDays} />
                {jsonCoinGecko.slice((pageNumber - 1) * 10, pageNumber * 10).map((el, index) => {
                    return (
                        <Currency id={index} className='currency' bool={true} height={150} rank={el.rank}
                            image={el.image}
                            coin={el.name}
                            symbol={el.symbol} price={el.price_usd + '$'}
                            change={el.price_change_percentage_24h + '%'}
                            marketCap={el.market_cap}
                            lastDays={el.market_cap_change_24h} />
                    )
                })}
            </div>
            <button className='btn-info' onClick={getCryptoInfo}>Get Info</button>
            <div className="nav-bar">
                <button disabled={pageNumber === 1 ? true : false} onClick={previousPage}>
                    <FaAngleLeft />
                </button>
                <button >Page {pageNumber}</button>
                <button>Page {pageNumber + 1}</button>
                <button>Page {pageNumber + 2}</button>
                <button disabled={pageNumber === 10 ? true : false} onClick={nextPage}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );


}

export default Currencies;