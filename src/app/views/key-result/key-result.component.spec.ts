import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyResultComponent } from './key-result.component';

describe('KeyResultComponent', () => {
  let component: KeyResultComponent;
  let fixture: ComponentFixture<KeyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
