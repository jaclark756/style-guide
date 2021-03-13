import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { ColorComponent } from './components/color/color.component';
import { TypographyComponent } from './components/typography/typography.component';
import { WireframesComponent } from './components/wireframes/wireframes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'components/button', component: ButtonComponent},
  {path: 'components/card', component: CardComponent},
  {path: 'components/input', component: InputComponent},
  {path: 'components/color', component: ColorComponent},
  {path: 'components/typography', component: TypographyComponent},
  {path: 'components/wireframes', component: WireframesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
