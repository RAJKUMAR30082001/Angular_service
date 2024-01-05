import { Injectable } from '@angular/core';
import { RoomInterface } from './room-interface';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  public roomDetails:RoomInterface[]=[
    {id:1,roomType:'classic',bedNo:2,description:'it is a room with two window good ventilation',price:2000},
    {id:2,roomType:'classic',bedNo:1,description:'best fit for single person contain all essential need like wifi',price:2000},
    {id:3,roomType:'royal',bedNo:4,description:'it is a celebrity room with AC, Tv and Free lunch for a day',price:10000}
  ]
  constructor() { }

  getDetails():RoomInterface[]{
    return this.roomDetails
  }
}
