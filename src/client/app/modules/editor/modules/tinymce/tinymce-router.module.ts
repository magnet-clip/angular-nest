import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TinyMceEditorComponent } from './containers/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: TinyMceEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TinyMceRouterModule {}
