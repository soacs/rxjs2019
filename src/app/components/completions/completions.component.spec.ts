import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionsComponent } from './completions.component';

describe('CompletionsComponent', () => {
  let component: CompletionsComponent;
  let fixture: ComponentFixture<CompletionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
