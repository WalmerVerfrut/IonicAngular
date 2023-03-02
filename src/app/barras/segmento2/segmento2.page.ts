import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {Chart} from "chart.js";

interface Props {
  chartData: number[];
}

@Component({
  selector: 'app-segmento2',
  templateUrl: './segmento2.page.html',
  styleUrls: ['./segmento2.page.scss'],
})
export class Segmento2Page implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  @ViewChild('canvas') canva: ElementRef<any> | undefined


  data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],

    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  config = {
    type: 'radar',
    data: this.data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };
  options = {
    plugins: {
      colors: {
        enabled: false
      }
    }
  };


}
