import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-product-details',
  template: `

 <h3> selected id = {{deparmentId}}</h3>


  `,
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


public deparmentId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let id: Number = parseInt(this.route.snapshot.params['id']);
    this.deparmentId = id;
  }

}
