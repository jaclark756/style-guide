import { Component, OnInit } from '@angular/core';
import { COMPONENTS } from '../../data/data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  components: any;

  constructor() { this.components = COMPONENTS }

  ngOnInit(): void {
  }

}
