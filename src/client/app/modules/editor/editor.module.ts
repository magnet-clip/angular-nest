import { NgModule } from '@angular/core';
import { EditorRouterModule } from './editor-router.module';
import { RouterModule } from '@angular/router';
import { EditorLayoutContainerComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [EditorRouterModule, RouterModule],
  exports: [],
  declarations: [EditorLayoutContainerComponent],
  providers: [],
})
export class EditorModule {}
