import { NgModule } from '@angular/core';
import { SummernoteEditorComponent } from './components/editor/editor.component';
import { SummernoteRouterModule } from './summernote-router.module';

@NgModule({
  imports: [SummernoteRouterModule],
  exports: [],
  declarations: [SummernoteEditorComponent],
  providers: [],
})
export class SummernoteModule {}
