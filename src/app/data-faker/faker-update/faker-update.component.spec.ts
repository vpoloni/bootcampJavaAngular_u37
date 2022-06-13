import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerUpdateComponent } from './faker-update.component';

describe('FakerUpdateComponent', () => {
  let component: FakerUpdateComponent;
  let fixture: ComponentFixture<FakerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
