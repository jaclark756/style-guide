import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  htmlSnippet: string;
  scssSnippet: string;
  tsSnippet: string;

  constructor() { 
    this.htmlSnippet = `
    <!-- [YourFormFieldName] Form Field -->
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
    </div>`;
    this.scssSnippet = `
    .form-example {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
  
    .input-example {
        width: 100%;
    }
  
    .card-container {
        padding: 25px;
    }`;
    this.tsSnippet = `
    // necessary imports
    import {
      AbstractControl,
      FormBuilder,
      FormGroup,
      Validators,
      FormControl,
    } from '@angular/forms';

    // necessary variables (add any extra variables for your inputs)
    yourForm: FormGroup;

    //example formGroup code
    this.yourForm = this.fb.group({
      // set your variables equal to a new FormControl and add necessary validators
      photoURL: new FormControl(this.photoURL, [Validators.minLength(6)]),
      displayName: new FormControl(this.displayName, [Validators.required, Validators.minLength(3)]),
      bio: new FormControl(this.bio, [Validators.maxLength(150)])
    });

    // To save form to Database
    if (this.yourForm.valid) {
      let yourform = {
        // this sets the value to an empty string instead of NULL if it is equal to NULL
        "photoURL": this.yourForm.controls.photoURL.value ? this.yourForm.controls.photoURL.value : '', 
        "displayName": this.yourForm.controls.displayName.value ? this.yourForm.controls.displayName.value : '', 
        "bio": this.yourForm.controls.bio.value ? this.yourForm.controls.bio.value : ''
      }
      // use the following logic (not exact code) to save form through Java Api
      this.apiService.methodThatUpdatesFormToJavaApi(yourForm);
    }
    `;
  }

  ngOnInit(): void {
  }

}
