import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitariosComponent } from './sanitarios.component';

describe('SanitariosComponent', () => {
  let component: SanitariosComponent;
  let fixture: ComponentFixture<SanitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
