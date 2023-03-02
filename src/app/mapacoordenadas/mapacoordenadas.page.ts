import {Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import  * as mapboxgl  from 'mapbox-gl';
import {DOCUMENT} from "@angular/common";
import {MapaserviceService} from './mapaservice.service';
import {ModalController} from "@ionic/angular";
import { Capacitor, Plugins, CallbackID } from "@capacitor/core";
import {GooglemapsComponent} from "../googlemaps/googlemaps.component";


//agregar el paquete de mapas

const { Geolocation} = Plugins;
declare var google:any;
@Component({
  selector: 'app-mapacoordenadas',
  templateUrl: './mapacoordenadas.page.html',
  styleUrls: ['./mapacoordenadas.page.scss'],
})

export class MapacoordenadasPage implements OnInit {
  mapbox = (mapboxgl as typeof mapboxgl);
  @Input() position={
    lat:-3.324234,
    lng:45.347835
  }

  // @ts-ignore

  constructor(public modalController:ModalController) {

  }

  ngOnInit() {
  }

  async cargarmapa() {
    let position={
      lat:-3.324234,
      lng:40.347835
    }
    const modalAdd=await this.modalController.create(
      {
        component:GooglemapsComponent,
        mode:'ios',
        swipeToClose:true,
        componentProps:{position:position}
      }
    );
    await modalAdd.present();
    const {data}=await modalAdd.onWillDismiss();
    if(data){
      console.log('data=>',data)
    }
  }
}


