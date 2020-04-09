import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuillEditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: QuillEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class QuillRouterModule {}
