
// import React, { Component } from 'react';
// import Chart from 'react-apexcharts'

// class Donut extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {},
//       series: [44, 55, 41, 17, 15],
//       labels: ['A', 'B', 'C', 'D', 'E']
//     }
//   }

//   render() {

//     return (
//       <div className="donut">
//         <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//       </div>
//     );
//   }
// }

// export default Donut;
import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { donutChartOptions, donutChartSeries, donutChartLabels } from '../../../constants/chartData'; // Adjust the path accordingly

class Donut extends Component {

  render() {
    return (
      <div className="donut">
        <Chart options={donutChartOptions} series={donutChartSeries} type="pie" width="500" />
      </div>
    );
  }
}

export default Donut;
