import { catchError, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import { Bookmark } from './bookmark.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  model = 'bookmarks';

  constructor(private http: HttpClient) {}

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id: any) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Bookmark[]>(this.getUrl());
  }

  load(id: any) {
    return this.http.get<Bookmark>(this.getUrlForId(id));
  }

  loadByGroupBookmark(groupBookmarkId: string) {
    return this.http
      .get<Bookmark[]>(this.getUrl(), { params: { groupBookmarkId } })
      .pipe(
        switchMap((bookmarks) => {
          if (bookmarks.length) {
            return of(bookmarks);
          } else {
            return throwError(
              `No bookmarks exist for groupBookmark with ID ${groupBookmarkId}`
            );
          }
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  create(bookmark: Bookmark) {
    return this.http.post(this.getUrl(), bookmark);
  }

  update(bookmark: Bookmark) {
    return this.http.patch(this.getUrlForId(bookmark.id), bookmark);
  }

  delete(bookmark: Bookmark) {
    return this.http.delete(this.getUrlForId(bookmark.id));
  }
}
