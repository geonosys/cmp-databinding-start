import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-selement',
  templateUrl: './server-selement.component.html',
  styleUrls: ['./server-selement.component.css']
})
export class ServerSelementComponent implements OnInit {

  element :{type:string, name:string, content:string};

  constructor() { }

  ngOnInit() {
  }

}
