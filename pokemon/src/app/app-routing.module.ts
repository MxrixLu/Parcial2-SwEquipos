import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Trainer } from './trainer/Trainer';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';


const routes: Routes = [
  { path: 'trainers', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) },
  { path: '/trainers', component: TrainerListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
