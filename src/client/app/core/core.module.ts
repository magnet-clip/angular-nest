import { NgModule } from '@angular/core';
import { CoreRouterModule } from './core-router.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContainerComponent } from './containers/main/main.component';
import { PageNotFoundContainerComponent } from './containers/not-found/not-found.component';

@NgModule({
  imports: [CoreRouterModule],
  exports: [],
  providers: [],
  declarations: [
    MainContainerComponent,
    NavigationComponent,
    PageNotFoundContainerComponent,
  ],
  entryComponents: [],
})
export class CoreModule {}
