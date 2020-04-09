import { NgModule } from '@angular/core';
import { JodditEditorComponent } from './containers/editor/editor.component';
import { JodditRouterModule } from './joddit-router.module';
import { JoditAngularModule } from 'jodit-angular';

@NgModule({
  imports: [JodditRouterModule, JoditAngularModule],
  exports: [],
  declarations: [JodditEditorComponent],
  providers: [],
})
export class JodditModule {}
