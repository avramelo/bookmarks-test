import { GroupBookmark } from './groupBookmark.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupBookmarksService {
  model = 'groupBookmarks'

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id: any) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<GroupBookmark[]>(this.getUrl());
  }

  load(id: any) {
    return this.http.get<GroupBookmark>(this.getUrlForId(id));
  }

  create(groupBookmark: GroupBookmark) {
    return this.http.post(this.getUrl(), groupBookmark);
  }

  update(groupBookmark: GroupBookmark) {
    return this.http.patch(this.getUrl(), groupBookmark);
  }

  delete(groupBookmark: GroupBookmark) {
    return this.http.delete(this.getUrlForId(groupBookmark.id));
  }
}
