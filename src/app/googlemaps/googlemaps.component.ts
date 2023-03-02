import {
  Component,
  OnInit,
} from '@angular/core';
import {Plugins} from "@capacitor/core";
import { GoogleMap } from '@capacitor/google-maps';
import {Coordenadas} from "../../utilidades/coordenadas";
import {Geolocation} from "@capacitor/geolocation";

@Component({
  selector: 'google-maps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss']
})
export class GooglemapsComponent implements OnInit {
  mapRef:any
  marker:any;
  marcadores:any[]=[]
  coordena:any
  markers:any;
  Constructor(){
    this.coordena=Coordenadas
  }
  ngOnInit() {
    this.iniciarMapa()
  }
  async  iniciarMapa(){
    console.log("hola")
    const apiKey = 'AIzaSyAkmwrVF4j3mxlTo0v08zoCz4IYpU6iRlE';

    this.mapRef = document.getElementById('map') ;

    const coordinates = await Geolocation.getCurrentPosition();
    this.marcadores.push(this.setcoordenada(coordinates.coords.latitude,coordinates.coords.longitude))
    console.log('Current position:', coordinates.coords);

    const defaul=this.marcadores[0].coordinate
    const newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: this.mapRef, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: defaul,
        zoom: 15, // The initial zoom level to be rendered by the map
        disableDefaultUI:true,
        clickableIcons:false
      },

    });

    this.markers=await newMap.addMarkers(this.marcadores);
    await newMap.setCamera(this.marcadores[0]);
    await newMap.enableClustering(1);
    //await  newMap.enableAccessibilityElements(true)
    //this.markers=await newMap.removeMarker(this.marcadores[0]);
    await newMap.setOnCameraIdleListener((event)=>{
      console.log('oyente icantivo de camara zoom')
    })
    await newMap.setOnMarkerClickListener((event) => {
      console.log('cuando hago clik en un marcador',event,this.markers)

    });
// Handle marker click

    await newMap.setOnClusterClickListener((event) => {
      console.log('establecer en el detector de clics del clúster')
      console.log(event)
    });
    await newMap.setOnMapClickListener((event) => {
      this.marcadores.push(this.setcoordenada(event.latitude,event.longitude))
      this.markers=newMap.addMarkers(this.marcadores);

    });
    // await newMap.setOnMapClickListener((event) => {
    //   this.marcadores.push(this.setcoordenada(event.latitude,event.longitude))
    //   this.markers=newMap.addMarkers(this.marcadores);
    //
    // });

// Clean up map reference
    //await newMap.destroy();
  }

  clickHandleEvent() {

  }
  setcoordenada(latitud: number,longitud :number) {
    return {
      coordinate: {
        lat: latitud,
        lng: longitud
      }
    }
  }


  agregar() {

  }

  myubicacion() {

  }
}
