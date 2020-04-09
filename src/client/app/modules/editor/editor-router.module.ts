import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorLayoutContainerComponent } from './containers/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: EditorLayoutContainerComponent,
    children: [
      {
        path: 'summernote',
        loadChildren: () =>
          import('../editor/modules/summernote/summernote.module').then(
            m => m.SummernoteModule,
          ),
      },
      {
        path: 'joddit',
        loadChildren: () =>
          import('../editor/modules/joddit/joddit.module').then(
            m => m.JodditModule,
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class EditorRouterModule {}
