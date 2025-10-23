import { TestBed } from '@angular/core/testing';

import { meuble } from '../model/meuble.model';

describe('meuble', () => {
  let service: meuble;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(meuble);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
