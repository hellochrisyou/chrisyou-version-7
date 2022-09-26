import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { RenderTableComponent } from './pages/render-shopping/render-table.component';
import { SearchBarComponent } from './pages/search-bar/search-bar/search-bar.component';

@NgModule({
  declarations: [
    RenderTableComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RenderTableComponent,
    SearchBarComponent
  ],
  entryComponents: []
})
export class SharedModule { }
