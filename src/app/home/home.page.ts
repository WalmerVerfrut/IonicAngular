import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private toastController:ToastController,
    private alertController:AlertController
  ) { }
  botonPrueba(){
    this.router.navigate(['/trabajador'])
  }

  ngOnInit() {
  }
  async Toast(mensaje:String){
    const  toast=await this.toastController.create({
      message:mensaje.toString(),
      duration:500,
      position:"middle"
    });
    toast.present();
  }
  async AlerTa(mensaje: String ){
    const aler=await this.alertController.create({
      header: "Borar dato",
      message:mensaje.toString(),
      buttons:[
        {
        text:"Cancelar",
        handler:()=>{
          console.log("cancelado")
          }
        },
        {text:"Ok",
          handler:()=>{
            console.log("Correcto")
          }}
        ],
    })
    aler.present();
  }
}
