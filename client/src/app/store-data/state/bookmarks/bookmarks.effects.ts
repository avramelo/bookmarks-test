// @ts-nocheck
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AddBookmark,
  BookmarkAdded,
  BookmarkDeleted,
  BookmarkUpdated,
  BookmarksActionTypes,
  BookmarksLoaded,
  DeleteBookmark,
  LoadBookmarks,
  UpdateBookmark,
} from './bookmarks.actions';

import { Bookmark } from '../../bookmarks/bookmark.model';
import { BookmarksService } from '../../bookmarks/bookmarks.service';
import { BookmarksState } from './bookmarks.reducer';
import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BookmarksEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(BookmarksActionTypes.BookmarksAction));

  @Effect()
  loadBookmarks$ = this.dataPersistence.fetch(BookmarksActionTypes.LoadBookmarks, {
    run: (action: LoadBookmarks, state: BookmarksState) => {
      return this.bookmarksService.all().pipe(map((res: Bookmark[]) => new BookmarksLoaded(res)))
    },

    onError: (action: LoadBookmarks, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addBookmark$ = this.dataPersistence.pessimisticUpdate(BookmarksActionTypes.AddBookmark, {
    run: (action: AddBookmark, state: BookmarksState) => {
      return this.bookmarksService.create(action.payload).pipe(map((res: Bookmark) => new BookmarkAdded(res)))
    },

    onError: (action: AddBookmark, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateBookmark$ = this.dataPersistence.pessimisticUpdate(BookmarksActionTypes.UpdateBookmark, {
    run: (action: UpdateBookmark, state: BookmarksState) => {
      return this.bookmarksService.update(action.payload).pipe(map((res: Bookmark) => new BookmarkUpdated(res)))
    },

    onError: (action: UpdateBookmark, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteBookmark$ = this.dataPersistence.pessimisticUpdate(BookmarksActionTypes.DeleteBookmark, {
    run: (action: DeleteBookmark, state: BookmarksState) => {
      return this.bookmarksService.delete(action.payload).pipe(map(_ => new BookmarkDeleted(action.payload)))
    },

    onError: (action: DeleteBookmark, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BookmarksState>,
    private bookmarksService: BookmarksService
  ) {}
}
