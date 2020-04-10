import { NgModule } from '@angular/core';
import { NgxWigRouterModule } from './ngx-wig-router.module';
import { NgxWigEditorComponent } from './containers/editor/editor.component';
import { NgxWigModule } from 'ngx-wig';

@NgModule({
  imports: [NgxWigRouterModule, NgxWigModule],
  exports: [],
  declarations: [NgxWigEditorComponent],
  providers: [],
})
export class NgxWigEditorModule {}
