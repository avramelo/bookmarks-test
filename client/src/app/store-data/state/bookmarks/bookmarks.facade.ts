import * as BookmarksActions from './bookmarks.actions';

import { ActionsSubject, Store, select } from '@ngrx/store';
import { selectAllBookmarks, selectCurrentBookmark } from '..';

import { Bookmark } from '../../bookmarks/bookmark.model';
import { BookmarksActionTypes } from './bookmarks.actions';
import { BookmarksState } from './bookmarks.reducer';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookmarksFacade {
  allBookmarks$ = this.store.pipe(select(selectAllBookmarks));
  currentBookmark$ = this.store.pipe(select(selectCurrentBookmark));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === BookmarksActionTypes.AddBookmark
        || action.type === BookmarksActionTypes.UpdateBookmark
        || action.type === BookmarksActionTypes.DeleteBookmark
      )
    );

  constructor(private store: Store<BookmarksState>, private actions$: ActionsSubject) {}

  selectBookmark(itemId: any) {
    this.store.dispatch(new BookmarksActions.BookmarkSelected(itemId));
  }

  loadBookmarks() {
    this.store.dispatch(new BookmarksActions.LoadBookmarks());
  }

  addBookmark(item: Bookmark) {
    this.store.dispatch(new BookmarksActions.AddBookmark(item));
  }

  updateBookmark(item: Bookmark) {
    this.store.dispatch(new BookmarksActions.UpdateBookmark(item));
  }

  deleteBookmark(item: Bookmark) {
    this.store.dispatch(new BookmarksActions.DeleteBookmark(item));
  }
}
