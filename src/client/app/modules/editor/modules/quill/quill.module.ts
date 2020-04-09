import { NgModule } from '@angular/core';
import { QuillRouterModule } from './quill-router.module';
import { QuillEditorComponent } from './components/editor/editor.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [QuillRouterModule, QuillModule.forRoot()],
  exports: [],
  declarations: [QuillEditorComponent],
  providers: [],
})
export class QuillEditorModule {}
