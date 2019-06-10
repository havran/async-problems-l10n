import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentViewModelComponent } from './view/content.view-model.component';

const routes: Routes = [
  {
    path: '**',
    component: ContentViewModelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
