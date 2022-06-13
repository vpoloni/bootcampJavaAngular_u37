import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerCreateComponent } from './faker-create.component';

describe('FakerCreateComponent', () => {
  let component: FakerCreateComponent;
  let fixture: ComponentFixture<FakerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
