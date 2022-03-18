import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempexp',
  templateUrl: './tempexp.component.html',
  styleUrls: ['./tempexp.component.css']
})
export class TempexpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printHelloWorld() {
    console.log("Hello World")
  }

}
