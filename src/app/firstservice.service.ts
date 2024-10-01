import { Injectable } from '@angular/core';

@Injectable()
export class FirstserviceService {
  freinds:string[]=["ahmed","wael","gomaa"]
  welcome():void{
    window.alert("welcomee")
  }

}
