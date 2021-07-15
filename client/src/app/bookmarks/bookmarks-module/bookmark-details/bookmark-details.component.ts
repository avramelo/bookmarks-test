import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Bookmark } from 'src/app/store-data/bookmarks/bookmark.model';
import { GroupBookmark } from 'src/app/store-data/groupBookmarks/groupBookmark.model';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss'],
})
export class BookmarkDetailsComponent {
  originalName!: string;
  selectedBookmark!: Bookmark;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() groupBookmarks!: GroupBookmark[];
  @Input() set bookmark(value: Bookmark) {
    if (value) {
      this.originalName = value.name;
    }
    this.selectedBookmark = Object.assign({}, value);
  }
}
