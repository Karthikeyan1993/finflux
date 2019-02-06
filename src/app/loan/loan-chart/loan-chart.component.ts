import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-chart',
  templateUrl: './loan-chart.component.html',
  styleUrls: ['./loan-chart.component.css']
})
export class LoanChartComponent implements OnInit {
  options: any;
  chart: any;
  @Input('data') data;
  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
          ]
        },
        style: {
          fontFamily: '\'Roboto\', sans-serif'
        },
        plotBorderColor: '#606063'
      },
      series: this.makeChartData(this.data),
      title: {
        text: ''
      },
      plotOptions: {
        series: {
          lineWidth: 0.5,
          marker: {
            radius: 0.5
          }
        }
      },
      xAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          },
          formatter: function () {
            return this.value + 1;
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
      },
      yAxis: {
        title: {
          text: null
        },
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      labels: {
        style: {
          color: '#707073'
        }
      },
    };

  }


  makeChartData = (data) => {
    let dummy = [];
    let _principal = [];
    for (let i = 0; i < data.length; i++) {
      _principal.push(Number(data[i].principal));
    }
    dummy.push(
      {
        'data': _principal, 'name': 'Principal', type: 'area',
        color: 'rgb(27, 191, 137)',
        tooltip: {
          valueDecimals: 2
        },
        showInLegend: false,
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgb(27, 191, 137)'],
            [1, 'rgba(27, 191, 137, 0.1)']
          ]
        },
        threshold: null
      });
    return dummy;
  }

  saveInstance(chartInstance): void {
    this.chart = chartInstance;
  }

}