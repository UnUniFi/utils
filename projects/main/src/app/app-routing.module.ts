import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  {
    path: 'apply-validator',
    loadChildren: () =>
      import('./apply-validator/apply-validator.module').then((m) => m.AppApplyValidatorModule),
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then((m) => m.AppTermsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
