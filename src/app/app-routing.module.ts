import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'detail-category/:id/:name',
    loadChildren: () => import('./detail-category/detail-category.module')
      .then(m => m.DetailCategoryModule),
  },
  {
    path: 'detail-videos/:id',
    loadChildren: () => import('./detail-videos/detail-videos.module')
      .then(m => m.DetailVideosModule),
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
