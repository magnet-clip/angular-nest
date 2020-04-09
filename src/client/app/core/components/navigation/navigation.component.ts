import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  selector: 'app-navigation',
})
export class NavigationComponent {
  constructor(public facade: NavigationService) {}
}
