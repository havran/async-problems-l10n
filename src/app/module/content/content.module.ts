import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentViewModelComponent } from './view/content.view-model.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ContentRoutingModule
  ],
  declarations: [ContentViewModelComponent],
})
export class ContentModule {
}
