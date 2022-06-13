import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFakerComponent } from './data-faker.component';

describe('DataFakerComponent', () => {
  let component: DataFakerComponent;
  let fixture: ComponentFixture<DataFakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
