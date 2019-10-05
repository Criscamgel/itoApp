import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaclienteComponent } from './creacliente.component';

describe('CreaclienteComponent', () => {
  let component: CreaclienteComponent;
  let fixture: ComponentFixture<CreaclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
