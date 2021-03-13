import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  htmlSnippet: string;
  scssSnippet: string;
  tsSnippet: string;

  constructor() {
    this.htmlSnippet = `
    <!-- Example card -->
    <mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
  <button color="primary" mat-raised-button isRoundButton="true">LIKE</button>
  <button color="primary" mat-raised-button isRoundButton="true">SHARE</button>
  </mat-card-actions>
</mat-card>`;
    this.scssSnippet = `
    img {
      width: 50%;
      display: block;
      margin: auto;
      padding-bottom: 10px;
  }
  
    .card-container {
        padding: 25px;
    }`;

  
   }

  ngOnInit(): void {
  }

}
