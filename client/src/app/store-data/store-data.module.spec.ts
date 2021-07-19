import { TestBed, async } from '@angular/core/testing';

import { StoreDataModule } from './store-data.module';

describe('CoreDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreDataModule).toBeDefined();
  });
});
