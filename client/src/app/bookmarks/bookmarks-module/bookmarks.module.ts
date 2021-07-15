import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BookmarkDetailsComponent } from "./bookmark-details/bookmark-details.component";
import { BookmarksComponent } from "./bookmarks.component";
import { BookmarksListComponent } from "./bookmarks-list/bookmarks-list.component";
import { BookmarksRoutingModule } from "./bookmarks-routing.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material/material.module";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    BookmarksComponent,
    BookmarksListComponent,
    BookmarkDetailsComponent,
  ]
})
export class BookmarksModule { }
