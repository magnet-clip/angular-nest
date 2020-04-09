import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CoreRouterModule } from './core-router.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContainerComponent } from './containers/main/main.component';
import { PageNotFoundContainerComponent } from './containers/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { mainAppReducer } from '../store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../store/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CoreRouterModule,
    StoreModule.forRoot({ app: mainAppReducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production,
    }),
  ],
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
