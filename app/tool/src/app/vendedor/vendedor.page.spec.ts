import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorPage } from './vendedor.page';

describe('VendedorPage', () => {
  let component: VendedorPage;
  let fixture: ComponentFixture<VendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
