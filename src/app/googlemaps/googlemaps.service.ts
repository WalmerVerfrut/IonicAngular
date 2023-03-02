import { Injectable } from '@angular/core';
declare var google:any;
@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {


  apiKey="AIzaSyAkmwrVF4j3mxlTo0v08zoCz4IYpU6iRlE";
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
      // @ts-ignore
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
        //script.src='https://maps.googleapis.com/maps/api/js?key='+this.apiKey+'&callback=initMap&v=weekly'
        script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAkmwrVF4j3mxlTo0v08zoCz4IYpU6iRlE&callback=initMap&v=weekly'
      }else{
        script.src='https://maps.googleapis.com/maps/api/js?&callback=mapInit&v=weekly';
      }
      renderer.appendChild(document.body,script)
    })
  }
}

