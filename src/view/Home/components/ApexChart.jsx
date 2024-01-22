// import React, { Component } from "react";
// import Chart from "react-apexcharts";
// import Donut from "./ApexChartDonut";

// class ApexChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar",
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//         },
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91],
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="container mx-auto mt-5">
//         <div className="flex flex-wrap justify-center">
//           <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//             <Donut />
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="line"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ApexChart;


import React, { Component } from "react";
import Chart from "react-apexcharts";
import Donut from "./ApexChartDonut";
import { chartOptions, chartSeries, chartOptions2 , chartSeries2, chartOptions3 , chartSeries3 } from "../../../constants/chartData"; // Adjust the path accordingly

class ApexChart extends Component {
  render() {
    return (
      <div className="container mx-auto mt-5">
        <div className="flex flex-col items-start lg:items-start">
          <div className="w-full lg:w-2/3 p-4">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              width="100%"
            />
          </div>
          {/* <div className="w-full lg:w-2/3 p-4">
            <Chart
              options={chartOptions3}
              series={chartSeries3}
              type="line"
              width="100%"
            />
          </div> */}
          <div className="w-full lg:w-2/3 p-4">
            <Donut />
          </div>
          <div className="w-full lg:w-2/3 p-4">
            <Chart
              options={chartOptions2}
              series={chartSeries2}
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;