import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

type RouteWithLabel = Route & { label: string; free: boolean };

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  // TODO move this stuff to constants, pick via selector. Then I can store additional info like links and whatever
  public routes: RouteWithLabel[] = [
    { path: '/summernote', label: 'Summernote', free: true },
    { path: '/jodit', label: 'Jodit', free: true },
    { path: '/quill', label: 'Quill', free: true },
    { path: '/ngx-wig', label: 'Ngx-Wig', free: true },
    { path: '/froala', label: 'Froala', free: false },
    { path: '/ckeditor', label: 'CKEditor', free: false },
  ];
}
