import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaordenComponent } from './creaorden.component';

describe('CreaordenComponent', () => {
  let component: CreaordenComponent;
  let fixture: ComponentFixture<CreaordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
