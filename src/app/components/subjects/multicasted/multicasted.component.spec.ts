import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastedComponent } from './multicasted.component';

describe('MulticastedComponent', () => {
  let component: MulticastedComponent;
  let fixture: ComponentFixture<MulticastedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticastedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticastedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
