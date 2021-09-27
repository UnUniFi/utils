import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.AppHomeModule) },
  {
    path: 'docs',
    loadChildren: () => import('./pages/docs/docs.module').then((m) => m.AppDocsModule),
  },
  {
    path: 'apply-validator',
    loadChildren: () =>
      import('./pages/apply-validator/apply-validator.module').then(
        (m) => m.AppApplyValidatorModule,
      ),
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then((m) => m.AppTermsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
