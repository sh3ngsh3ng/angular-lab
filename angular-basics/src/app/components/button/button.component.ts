import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text = "Button"

  printButton() {
    console.log("I am a button!")
  }
  
  showAlert() {
    alert("This is an alert")
  }


}
