import { Component, Input, Output } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { Editor } from '../../../models/editor';
import { Observable, Subject } from 'rxjs';

@Component({
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  selector: 'app-navigation',
})
export class NavigationComponent {
  @Input() editors: Editor[];
  @Output() navigate = new Subject<Editor>();
  constructor() {}
}
