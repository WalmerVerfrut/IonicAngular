import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaserviceService {
  apiKey="";
  mapsLoaded=false;
  constructor() { }
  init(renderer:any,document:any):Promise<any>{
    return new Promise((resolve)=>{
      if(this.mapsLoaded){
        console.log("la libreria a sido cargada");
        resolve(true);
        return
      }
      const script=renderer.createElement('script')
      script.id='googleMaps'
      window['mapInit']=()=> {
        this.mapsLoaded = true
        if (google) {
          console.log("la libreria ya esta cargada")
        } else {
          console.log(" la libreria aun no esta cargada")
        }
        resolve(true);
        return
      }
      if(this.apiKey){
        script.src='https://maps.googleapis.com/maps/api/js?key='+this.apiKey+'&callback=initMap'
      }else{
        script.src='https://maps.googleapis.com/maps/api/js?&callback=mapInit';
      }
      renderer.appendChild(document.body,script)
    })
  }
}
