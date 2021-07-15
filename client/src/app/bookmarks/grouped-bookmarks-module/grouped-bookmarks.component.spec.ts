import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedBookmarksComponent } from './grouped-bookmarks.component';

describe('GroupedBookmarksComponent', () => {
  let component: GroupedBookmarksComponent;
  let fixture: ComponentFixture<GroupedBookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedBookmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
