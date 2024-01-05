import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { RoomInterface } from '../room-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit{
  constructor(private service:RoomServiceService, public router:Router){}
  public mode:string=''
  public room_details:RoomInterface[]=[]
  ngOnInit(): void {
    this.room_details=this.service.getDetails()
  }
  
}

