import {ToastController} from "@ionic/angular";
import {add} from "ionicons/icons";

export class Coordenadas {
  setcoordenada(latitud: String,longitud :String) {
    return {
      coordinate: {
        lat: latitud,
        lng: longitud
      }
    }
  }
}
