import { NgModule } from '@angular/core';
import { TinyMceRouterModule } from './tinymce-router.module';
import { EditorModule as TinyMceEditorModule } from '@tinymce/tinymce-angular';
import { TinyMceEditorComponent } from './containers/editor/editor.component';

@NgModule({
  imports: [TinyMceRouterModule, TinyMceEditorModule],
  exports: [],
  declarations: [TinyMceEditorComponent],
  providers: [],
})
export class TinyMceModule {}
