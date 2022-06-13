import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerInfoComponent } from './faker-info.component';

describe('FakerInfoComponent', () => {
  let component: FakerInfoComponent;
  let fixture: ComponentFixture<FakerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
