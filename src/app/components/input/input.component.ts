import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  htmlSnippet: string;

  constructor() { 
    this.htmlSnippet = `
    <div class="form-example"> 
      <mat-form-field class="input-example" appearance="fill">
          <mat-label>Input</mat-label>
          <input matInput>
      </mat-form-field>
      <mat-form-field class="input-example" appearance="fill">
          <mat-label>Select</mat-label>
          <mat-select>
              <mat-option value="one">First option</mat-option>
              <mat-option value="two">Second option</mat-option>
          </mat-select>
      </mat-form-field>
      <mat-form-field class="input-example" appearance="fill">
          <mat-label>Textarea</mat-label>
          <textarea matInput></textarea>
      </mat-form-field>
    </div>
  `;
  }

  ngOnInit(): void {
  }

}
