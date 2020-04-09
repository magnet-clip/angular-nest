import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './containers/main/main.component';
import { PageNotFoundContainerComponent } from './containers/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../modules/editor/editor.module').then(m => m.EditorModule),
      },
    ],
  },
  // { path: '**', component: PageNotFoundContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class CoreRouterModule {}
