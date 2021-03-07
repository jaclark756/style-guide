import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  htmlSnippet: any;

  constructor() {
    this.htmlSnippet = 
    `<button mat-raised-button color="primary" isRoundButton="true">Button Example</button>`
  }

  ngOnInit(): void {
  }

}
