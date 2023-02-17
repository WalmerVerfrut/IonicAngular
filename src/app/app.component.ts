import { Component } from '@angular/core';
import {ToastController} from "@ionic/angular";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'trabajdor', url: '/trabajador', icon: 'person-remove' },
    { title: 'Bodegas', url: '/bodegas', icon: 'hourglass' },
    { title: 'Coordenadas', url: '/mapacoordenadas', icon: 'map' },
  ];
  public labels = [];
  constructor(
    public toastController:ToastController
  ) {}
  async Toast(mensaje:String){
    const  toast=await this.toastController.create({
      message:mensaje.toString(),
      duration:500,
      position:"bottom"
    });
    toast.present();
  }

}
