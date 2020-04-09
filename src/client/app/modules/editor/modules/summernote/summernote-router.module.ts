import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummernoteEditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: SummernoteEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SummernoteRouterModule {}
