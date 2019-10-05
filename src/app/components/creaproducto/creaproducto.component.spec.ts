import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaproductoComponent } from './creaproducto.component';

describe('CreaproductoComponent', () => {
  let component: CreaproductoComponent;
  let fixture: ComponentFixture<CreaproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
