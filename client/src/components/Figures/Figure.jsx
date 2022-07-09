import React from 'react';
import Plot from 'react-plotly.js';
import jsonFile from '../../data/Bitcoin-Historical.json';



const Figure = () => {


  let Y = jsonFile.map((el) => { return (parseFloat(el.Price.replace(",", ""))) }).reverse();
  let X = jsonFile.map((el) => { return (Date.parse(el.Date) - Date.parse(jsonFile[30].Date)) }).reverse();

  console.log('X for figure', X);
  console.log('Y for figure', Y);

  let size = [220, 100];
  const data = [{
    x: X,
    y: Y,
    type: 'scatter',
    line: { color: "red" },
    marker: { color: "green" },
    mode: 'lines+markers'
  }];



  const layout = {
    width: size[0],
    height: size[1],
    title: 'My Title',
    margin: { l: 2, r: 2, b: 2, t: 0 },
    yaxis: {
      title: 'Y-axis title',
      titlefont: { size: 10 },
      automargin: true,
      color: "#fefab"
    },
    xaxis: {
      title: 'X-axis title',
      titlefont: { size: 10 },
      automargin: true,
      autorange: true,
      constrain: "range"
    }
  }
  console.log('Heelo before jsonFile')
  console.log('jsonFile ', jsonFile);

  return (
    <div>
      <Plot className='plot' data={data}
        layout={layout}
      />
    </div>
  )
}

export default Figure;