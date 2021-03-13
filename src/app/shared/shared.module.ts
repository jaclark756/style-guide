import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';



@NgModule({
  declarations: [ButtonComponent, SnackbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
