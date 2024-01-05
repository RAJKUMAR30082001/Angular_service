import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookRoomComponent } from './book-room/book-room.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'room_book',component:BookRoomComponent},
  {path:'home/:id',component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
