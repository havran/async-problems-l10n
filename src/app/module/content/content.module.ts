import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentViewModelComponent } from './view/content.view-model.component';

@NgModule({
  imports: [CommonModule, ContentRoutingModule],
  declarations: [ContentViewModelComponent],
})
export class ContentModule {}
