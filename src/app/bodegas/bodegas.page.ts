import { Component, OnInit } from '@angular/core';
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ModalController} from "@ionic/angular";
import {BodDetallePage} from "./bod-detalle/bod-detalle.page";

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.page.html',
  styleUrls: ['./bodegas.page.scss'],
})
export class BodegasPage implements OnInit {

  constructor(
    private modalCtrl:ModalController,
    private http:HttpClient) {

  }

  private bodegas:any=[];
  public searcherdBodega:any;
  ngOnInit() {
    this.getBodegas().subscribe(res=>{
      this.bodegas=res;
      this.searcherdBodega=this.bodegas;
    })
  }
  seachBodega(event: any ){
    const text=event.target.value;
    this.searcherdBodega=this.bodegas
    if(text&&text.trim()!=''){
      this.searcherdBodega=this.searcherdBodega.filter((bodegas: any)=>{
        return (bodegas.NOM_ZON.toLowerCase().indexOf(text.toLowerCase())>-1 || bodegas.NOM_BOD.toLowerCase().indexOf(text.toLowerCase())>-1)
      })
    }
  }
  getBodegas(){
    return this.http
      .get("assets/files/bodegas.json")
      .pipe(
        map((res:any)=>{
          return res.data
        })
      )
  }
  async detalle(bodega:any){
    const modal=await this.modalCtrl.create({
      component: BodDetallePage,
      componentProps:{
        bod:bodega
      }
    });
    await modal.present();
  }

  handleRefresh(event:any) {
    this.seachBodega(event)
    event.target.complete();
  };
}
