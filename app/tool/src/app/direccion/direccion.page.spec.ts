import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionPage } from './direccion.page';

describe('DireccionPage', () => {
  let component: DireccionPage;
  let fixture: ComponentFixture<DireccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
