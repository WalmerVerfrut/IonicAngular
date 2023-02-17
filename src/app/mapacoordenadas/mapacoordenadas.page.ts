import {Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import  * as mapboxgl  from 'mapbox-gl';
import {DOCUMENT} from "@angular/common";
import {MapaserviceService} from './mapaservice.service';
import {Plugins} from '@capacitor/core';
import {ModalController} from "@ionic/angular";
import {LngLat} from "mapbox-gl";

const {Goelocation}=Plugins;
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
  label={
    titulo:"Mi ubicacion",
    subtitulo:" mi ubicacion inicial"
  }
  map:any;
  marker:any;
  infowindow:any;
  positionSet:any;
  @ViewChild('map')
  divMap:any ;
  constructor(
    private renderer:Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapsService:MapaserviceService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.init();
  }
  async init(){
    this.googlemapsService.init(this.renderer,this.document).then(()=>{
      this.initMap();
    }).catch((err)=>{
      console.log(err)
    })
  }
  ionViewDidEnter() {
  }
  initMap() {
    const position=this.position
    let latLng=new google.maps.LatLng(position.lat,position.lng)
    let mapOptions={
      center:latLng,
      zoom:14,
      disableDefaultUI:true,
      clickableIcons:false
    }
    this.map=new google.maps.Map(this.divMap.nativeElement,mapOptions)
    this.marker=new google.maps.Marker({
      map:this.map,
      animation:google.maps.animation.DROP,
      draggable:true
    });
    this.clickHandleEvent();
    this.infowindow=new google.maps.infowindow();
    this.addMarker(position)
    this.setInfoWindow(this.marker,this.label.titulo,this.label.subtitulo)
  }
  clickHandleEvent() {
    this.map.addListener('click',(event:any)=>{
      const position={
        lat:event.latLng.lat,
        lng:event.latLng.lng
      }
      this.addMarker(position)
    })
  }
  addMarker(position:any){
    let latLng=new google.maps.LatLng(position.lat,position.lng)
    this.marker.setPosition(latLng)
    this.map.panTo(position)
    this.positionSet=position
  }


}
/*buildMap(){
   this.mapa=mapboxgl.Map;
   (mapboxgl as any).accessToken='pk.eyJ1IjoidmVyZnJ1dHBlcnUiLCJhIjoiY2wzNjRjdnlwMGMwejNrb3o4c2dzenB5ZyJ9.4bg-eMUfJTwhwJzLlfm7tw';
   this.mapa=new mapboxgl.Map({
     container:'map',
     style:'mapbox://styles/mapbox/satellite-streets-v11',
     center:[-80.5996031,-5.0672861],
     zoom:15
   });
   this.mapa.addControl(new mapboxgl.NavigationControl());

   const map = new mapboxgl.Map({
     container: 'map', // container ID
     style: 'mapbox://styles/mapbox/streets-v12', // style URL
     center: [-74.5, 40], // starting position [lng, lat]
     zoom: 9 // starting zoom
   });
 }*/

