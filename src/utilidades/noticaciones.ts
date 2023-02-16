import {Component, OnInit} from '@angular/core';
import {ToastController} from "@ionic/angular";

export class Noticaciones {
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
