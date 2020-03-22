import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicalComponent } from './mathematical.component';

describe('MathematicalComponent', () => {
  let component: MathematicalComponent;
  let fixture: ComponentFixture<MathematicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
