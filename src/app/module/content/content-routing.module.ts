import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentViewModelComponent } from './view/content.view-model.component';
import { LocalizeRouterModule } from 'localize-router';
import { ContentResolver } from './service/content-resolver.service';

const routes: Routes = [
  {
    path: '**',
    component: ContentViewModelComponent,
    resolve: {
      content: ContentResolver,
    },
    data: {
      noInitMetaData: true,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ],
  providers: [
    ContentResolver
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class ContentRoutingModule {}
