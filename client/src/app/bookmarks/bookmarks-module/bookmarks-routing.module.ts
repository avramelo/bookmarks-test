import { RouterModule, Routes } from '@angular/router';

import { BookmarksComponent } from './bookmarks.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: BookmarksComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarksRoutingModule {}
