import { BookmarksEffects } from "./bookmarks/bookmarks.effects";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { GroupBookmarksEffects } from "./groupBookmarks/groupBookmarks.effects";
import { NgModule } from "@angular/core";
import { NxModule } from "@nrwl/nx";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { reducers } from ".";

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([
      GroupBookmarksEffects,
      BookmarksEffects
    ]),
  ],
  declarations: []
})
export class StateModule { }
