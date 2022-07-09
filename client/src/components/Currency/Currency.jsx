import React from 'react';
import './Currency.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Figure from '../Figures/Figure';
import Plot from '../Plot/Plot';
import jsonFile from '../../data/Bitcoin-Historical.json';
import { Line } from 'react-chartjs-2';


const Currency = ({ height, rank, coin, symbol, price, change, marketCap, lastDays, bool, image }) => {
  const [dropDown, setDropDown] = useState(false);
  const toggle = () => {
    setDropDown(!dropDown);
  }

  let Y = jsonFile.map((el) => { return (parseFloat(el.Price.replace(",", ""))/39000 )}).reverse();
  let X = jsonFile.map((el) => { return (Date.parse(el.Date) - Date.parse(jsonFile[30].Date))/(1000*60*60*24) }).reverse();


  console.log('X data from Currency', X)
  console.log('Y data from Currency', Y)

  const data = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  const variants = {
    toggle: {
      height: "100%",
    },
    notToggle: {
      height: 0
    }
  }

  return (
    <div className="container">
      <div className="currency">
        <span id="angle"> {bool && dropDown ? <FaAngleUp onClick={toggle} /> : <FaAngleDown onClick={toggle} />}</span>
        <span id='1'>{rank}</span>
        <span id='2'><img src={image} alt="" width={18} />{coin}</span>
        <span id='3'>{symbol}</span>
        <span id='4'>{price}</span>
        <span id='5'>{change}</span>
        <span id='6'>{marketCap}</span>
        <span id='7'>{lastDays}</span>
      </div>
      {dropDown && <div animate={toggle ? 'toggle' : 'notToggle'}
        variants={variants}
        transition={{ duration: 4 }}
        className='drop-down'>
        <span id='last-7-days'>
          <h4>Last 7 days</h4>
          {/* <Line data={data} options={{
            title: {
              display: true,
              text: 'Rain Fall',
              fontSize: 10
            },
            legend: {
              display: true,
              position: 'right'
            }
          }} /> */}
          <Plot X={X} Y={Y} />
        </span>
        <span id='last-24-h'>
          <h4>Last 24h</h4>
          <Figure />
        </span>
        <span id='last-h'>
          <h4>Last hour</h4>
          <Figure />
        </span>
      </div>}
    </div>
  )
}

export default Currency;