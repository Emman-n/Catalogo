import { Component, OnInit } from '@angular/core';
import {DatosService} from '../datos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-list',
  template: `

  <h2>Datos </h2>
  <ul (click)="onSelect(dato)" *ngFor="let dato of   datoss">
      <li>{{dato.id}}. {{dato.name}}  </li>
  </ul>

`,
  styleUrls: ['./datos-list.component.css']
})
export class DatosListComponent implements OnInit {


   datoss =[
    {"id": 1, "name":"dato1", "age":31},
    {"id": 2, "name":"dato2", "age":32},
    {"id": 3, "name":"dato3", "age":33}

  ];

  constructor(private rounter: Router) { }
  ngOnInit(){

  }


  onSelect(dato: any){
this.rounter.navigate(['/datos', dato.id]);

  }





}

//constructor(private _datoService: DatosService) { }

//ngOnInit(): void {
 // this._datoService.getEmployees()
  //.subscribe(data => this.datos = data);
//}
