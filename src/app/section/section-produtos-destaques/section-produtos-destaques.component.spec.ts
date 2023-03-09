/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionProdutosDestaquesComponent } from './section-produtos-destaques.component';

describe('SectionProdutosDestaquesComponent', () => {
  let component: SectionProdutosDestaquesComponent;
  let fixture: ComponentFixture<SectionProdutosDestaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionProdutosDestaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProdutosDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
