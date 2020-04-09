import { NgModule } from '@angular/core';
import { JodditEditorComponent } from './containers/editor/editor.component';
import { JodditRouterModule } from './joddit-router.module';

@NgModule({
  imports: [JodditRouterModule],
  exports: [],
  declarations: [JodditEditorComponent],
  providers: [],
})
export class JodditModule {}
