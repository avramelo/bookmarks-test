import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BookmarksListComponent } from './bookmarks-list.component';
import { By } from '@angular/platform-browser';
import { MatList } from '@angular/material/list';

describe('BookmarksListComponent', () => {
  let component: BookmarksListComponent;
  let fixture: ComponentFixture<BookmarksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarksListComponent, MatList],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have mat-list rendered in case array empty', () => {
    component.bookmarks = [];

    const matList = fixture.debugElement.queryAll(By.css('.mat-list'));

    fixture.detectChanges();

    expect(matList.length).toBe(0);
  });

  it('should have mat-list rendered in case array has items', () => {
    component.bookmarks = [
      {
        id: '1',
        name: 'test',
        URL: '',
        groupBookmarkId: '2',
      },
    ];
    fixture.detectChanges();

    const matList = fixture.debugElement.queryAll(By.css('.mat-list'));

    expect(matList.length).toBe(1);
  });
});
