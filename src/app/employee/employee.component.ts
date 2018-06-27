import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public Employee = [];
  options: any;
  constructor(private _employeeService: HeroService) {
    
  }
  private drawChart = function(data){
    this.options = {
      chart: {
          zoomType: 'x'
      },
      title: {
          text: 'USD to EUR exchange rate over time'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
          title: {
              text: 'Exchange rate'
          }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          area: {
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },
      series:[{
        type: 'area',
        name: 'USD to EUR',
        data: data
    }]
  }
  }
  ngOnInit() {
    let self =this;
    this._employeeService.getDetails()
      .subscribe(function (res) {
        
         self.drawChart(res)
      })
  }
}
