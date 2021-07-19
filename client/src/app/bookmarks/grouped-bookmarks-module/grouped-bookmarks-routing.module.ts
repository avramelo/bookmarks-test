import { RouterModule, Routes } from '@angular/router';

import { GroupedBookmarksComponent } from './grouped-bookmarks.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: GroupedBookmarksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupedBookmarksRoutingModule {}
