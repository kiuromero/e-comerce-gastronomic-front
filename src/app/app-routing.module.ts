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
    path: 'detail-course/:id',
    loadChildren: () => import('./detail-videos/detail-videos.module')
      .then(m => m.DetailVideosModule),
  },
  {
    path: 'profile-chef/:id',
    loadChildren: () => import('./profile-chef/profile-chef.module')
      .then(m => m.ProfileChefModule),
  },
  {
    path: 'school',
    loadChildren: () => import('./school/school.module')
      .then(m => m.SchoolModule),
  },
  {
    path: 'courses-client/:id',
    loadChildren: () => import('./mycourses/mycourses.module')
      .then(m => m.MyCoursesModule),
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module')
      .then(m => m.MessageModule),
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
