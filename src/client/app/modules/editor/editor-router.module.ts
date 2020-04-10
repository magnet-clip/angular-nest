import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorLayoutContainerComponent } from './containers/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: EditorLayoutContainerComponent,
    children: [
      {
        path: 'quill',
        loadChildren: () =>
          import('../editor/modules/quill/quill.module').then(
            m => m.QuillEditorModule,
          ),
      },
      {
        path: 'summernote',
        loadChildren: () =>
          import('../editor/modules/summernote/summernote.module').then(
            m => m.SummernoteModule,
          ),
      },
      {
        path: 'jodit',
        loadChildren: () =>
          import('../editor/modules/joddit/joddit.module').then(
            m => m.JodditModule,
          ),
      },
      {
        path: 'ngx-wig',
        loadChildren: () =>
          import('../editor/modules/ngx-wig/ngx-wig.module').then(
            m => m.NgxWigEditorModule,
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
