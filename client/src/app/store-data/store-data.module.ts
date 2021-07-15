import { BookmarksService } from './bookmarks/bookmarks.service';
import { CommonModule } from '@angular/common';
import { GroupBookmarksService } from './groupBookmarks/groupBookmarks.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StateModule } from './state/state.module';

@NgModule({
  providers: [
    GroupBookmarksService,
    BookmarksService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StateModule
  ],
})
export class CoreDataModule {}
