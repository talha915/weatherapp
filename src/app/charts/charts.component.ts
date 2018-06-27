import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  options: Object;
  constructor() { 
    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'simple chart'
      },
      subtitle: {
        text: 'Graph'
      },
      xAxis: {
        categories: ['Apple', 'Mango', 'Grapes', 'Pineapple']
      },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      tooltip:{
        pointFormat:'{series.name}: <b>{point.y}</b><br/>',
        backgroundColor: 'yellow',
        color: 'black',
        valueSuffix: 'cm',
        borderWidth: 5,
        borderRadius: 8
      },
     
      focusborder:{
        enabled: false
      },
      plotOptions: {
        series: {
          pointStart: 2010
        }
      },
      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }
      ],
    };
  }

  ngOnInit() {
  }
  
}
