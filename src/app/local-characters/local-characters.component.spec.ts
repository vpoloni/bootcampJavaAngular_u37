import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCharactersComponent } from './local-characters.component';

describe('LocalCharactersComponent', () => {
  let component: LocalCharactersComponent;
  let fixture: ComponentFixture<LocalCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
