import { TestBed, async } from '@angular/core/testing';

import { CoreDataModule } from './store-data.module';

describe('CoreDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreDataModule).toBeDefined();
  });
});
