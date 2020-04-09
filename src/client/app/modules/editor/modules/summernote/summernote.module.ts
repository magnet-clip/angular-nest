import { NgModule } from '@angular/core';
import { SummernoteEditorComponent } from './components/editor/editor.component';
import { SummernoteRouterModule } from './summernote-router.module';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SummernoteRouterModule,
    NgxSummernoteModule.forRoot(),
    HttpClientModule,
  ],
  exports: [],
  declarations: [SummernoteEditorComponent],
  providers: [],
})
export class SummernoteModule {}
