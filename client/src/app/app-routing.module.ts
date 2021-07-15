import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'bookmarks', pathMatch: 'full'},
  {path: 'bookmarks', loadChildren: () => import('./bookmarks/bookmarks-module/bookmarks.module').then(m => m.BookmarksModule)},
  {path: 'grouped-bookmarks', loadChildren: () => import('./bookmarks/grouped-bookmarks-module/grouped-bookmarks.module').then(m => m.GroupedBookmarksModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
