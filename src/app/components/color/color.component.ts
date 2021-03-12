import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

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
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  // private _snackBar: any;


  constructor(private _snackBar: MatSnackBar) { }
 

  openSnackBar(message: string) {
    let lilSnackMessage = message + " copied to clipboard"
    this._snackBar.open(lilSnackMessage, "", {
      duration: 2000,
      verticalPosition: this.verticalPosition
    });
  }
 
  ngOnInit(): void {
  }
  
}
