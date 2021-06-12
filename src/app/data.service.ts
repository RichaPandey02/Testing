import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { observable } from 'rxjs';
@Injectable()
export class DataService{
  private email:string
  getEmail()
  {
    return this.email
  }
  setEmail(email:string)
  {
    this.email=email
  }
  getPromise()
  {
    return new Promise((res,rej)=>{
      res("richa pandey")
    })
  }
  getObservable(){
    return new Observable(observer=>{
      observer.next("apple")
    })
  }
}
