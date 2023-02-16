import { Component, OnInit,Input  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bod-detalle',
  templateUrl: './bod-detalle.page.html',
  styleUrls: ['./bod-detalle.page.scss'],
})
export class BodDetallePage implements OnInit {

  @Input() bod:any;
  constructor(
    private activateRoute: ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    console.log(this.bod.bodega.NOM_ZON)

  }


}
