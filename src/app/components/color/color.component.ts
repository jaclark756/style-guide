import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss',]
})
export class ColorComponent implements OnInit {

  $black = "$black";
  $jet = "$jet";
  $onyx = "$onyx";
  $metal = "$metal";
  $teal = "$teal";
  $watermelon = "$watermelon";
  $mint = "$mint";
  $powder = "$powder";
  private _snackBar: any;


  constructor() { }
 

  openSnackBar(message: string) {
    this._snackBar.open(message, {
      duration: 2000,
    });
  }
 
  ngOnInit(): void {
  }
  
}
