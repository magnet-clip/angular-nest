import { NgModule } from '@angular/core';
import { CoreRouterModule } from './core-router.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContainerComponent } from './containers/main/main.component';
import { PageNotFoundContainerComponent } from './containers/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CoreRouterModule, RouterModule, CommonModule],
  exports: [],
  providers: [],
  declarations: [
    MainContainerComponent,
    NavigationComponent,
    PageNotFoundContainerComponent,
    FooterComponent,
  ],
  entryComponents: [],
})
export class CoreModule {}
