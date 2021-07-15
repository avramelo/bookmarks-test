import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { GroupedBookmarksComponent } from './grouped-bookmarks.component';
import { GroupedBookmarksListComponent } from './grouped-bookmarks-list/grouped-bookmarks-list.component';
import { GroupedBookmarksRoutingModule } from './grouped-bookmarks-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    GroupedBookmarksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [GroupedBookmarksComponent, GroupedBookmarksListComponent]
})
export class GroupedBookmarksModule { }
