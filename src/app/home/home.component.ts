import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { RoomInterface } from '../room-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mode:string=''
  public roomId:number=0
  constructor (private service:RoomServiceService,public router:ActivatedRoute){}
  public room_details:RoomInterface[]=[]
  ngOnInit(): void {
    
    this.room_details=this.service.getDetails()
    console.log(this.room_details)
    let roomId = this.router.snapshot.params['id'];
    this.updateValue(roomId)
  }
  updateValue(num:string){

  for(let i of this.room_details){
    if(i.id===parseInt(num)){
      i['mode']='unavailable'
    }
    else if(i.mode!== 'unavailable')
    i['mode']='available'
    
  }
}
}
