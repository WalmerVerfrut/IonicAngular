import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento1',
  templateUrl: './segmento1.page.html',
  styleUrls: ['./segmento1.page.scss'],
})
export class Segmento1Page implements OnInit {

  constructor() { }
  data=[
    {
      img:'https://tse2.mm.bing.net/th?id=OIP.ooTyo0Cvq9ECAlZ8s9kvLQHaEK&pid=Api&P=0',
      description:" cora y sus descripciones",
      title:"title 1"
    },
    {
      img:'https://tse2.mm.bing.net/th?id=OIP.ooTyo0Cvq9ECAlZ8s9kvLQHaEK&pid=Api&P=0',
      description:" cora y sus descripciones 2",
      title:"title 2"
    },
    {
      img:'https://tse2.mm.bing.net/th?id=OIP.ooTyo0Cvq9ECAlZ8s9kvLQHaEK&pid=Api&P=0',
      description:" cora y sus descripciones 3",
      title:"title 3"
    },
    {
      img:'https://tse2.mm.bing.net/th?id=OIP.ooTyo0Cvq9ECAlZ8s9kvLQHaEK&pid=Api&P=0',
      description:" cora y sus descripciones 4",
      title:"title 4"
    },
    {
      img:'https://tse2.mm.bing.net/th?id=OIP.ooTyo0Cvq9ECAlZ8s9kvLQHaEK&pid=Api&P=0',
      description:" cora y sus descripciones 5",
      title:"title 5"
    },


  ]

  ngOnInit() {
  }

}
