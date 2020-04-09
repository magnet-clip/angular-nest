import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {
  constructor(public facade: NavigationService) {}
}
