import { Component, OnInit } from '@angular/core';
import {Segmento2PageRoutingModule} from "./segmento2/segmento2-routing.module";
import {Segmento2Page} from "./segmento2/segmento2.page";

@Component({
  selector: 'app-barras',
  templateUrl: './barras.page.html',
  styleUrls: ['./barras.page.scss'],
})
export class BarrasPage implements OnInit {
  item:any

  constructor() {
  }

  ngOnInit() {
  }
  mostrarfragmento(event:any) {
    this.item=event.detail.value
  }
}
