import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.page.html',
  styleUrls: ['./trabajador.page.scss'],
})
export class TrabajadorPage implements OnInit {

  constructor(
    private router: Router,
    private http:HttpClient,
    private toastController:ToastController
  ){}
  public trabajadores:any=[];
  ngOnInit() {
    this.getTrabajadores().subscribe(res=>{
      this.trabajadores=res;
    })
  }
  /*async Toast(mensaje:String){
    const  toast=await this.toastController.create({
      message:mensaje.toString(),
      duration:500,
      position:"bottom"
    });
    toast.present();
  }*/
  //metodo para obtener la lsita de trabajdores
  getTrabajadores(){
    return this.http
      .get("assets/files/data.json")
      .pipe(
        map((res:any)=>{
          return res.data
        })
      )
  }

}
