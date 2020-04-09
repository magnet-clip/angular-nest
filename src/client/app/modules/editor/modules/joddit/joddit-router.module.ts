import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JodditEditorComponent } from './containers/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: JodditEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class JodditRouterModule {}
