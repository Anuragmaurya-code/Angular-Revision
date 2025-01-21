import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class MyServiceService {
  a='this is from service'
  constructor() { }
  getA(){return this.a}
  setA(newA:string){this.a=newA}

}
