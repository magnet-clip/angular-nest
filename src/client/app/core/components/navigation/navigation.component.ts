import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NavPage } from '../../../models/nav-page';

@Component({
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  selector: 'app-navigation',
})
export class NavigationComponent {
  @Input() pages: NavPage[];
  @Output() navigate = new Subject<NavPage>();
  constructor() {}
}
