import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxWigEditorComponent } from './containers/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: NgxWigEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class NgxWigRouterModule {}
