import { Component } from '@angular/core';
import { DatosService } from './datos.service';
import {  OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'Catalogo';




constructor(private datosservice:DatosService ) {}

ngOnInit():void{
this.onGetUsers();
this.onGetUser();
}


onGetUsers(): void{
this.datosservice.getDatas().subscribe(
(response) => {
console.log(response);


},
(error: any) => console.log(error),
( ) => console.log("completed!!!!!!!!!!!!!!!!!")
);}


onGetUser(): void{
  this.datosservice.getData().subscribe(
  (response) => console.log(response),
  (error: any) => console.log(error),
  ( ) => console.log("completed!!!!!!!!!!!!!!!!!")
  );}


}





