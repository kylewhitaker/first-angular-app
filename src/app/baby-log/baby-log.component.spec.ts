import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyLogComponent } from './baby-log.component';

describe('BabyLogComponent', () => {
  let component: BabyLogComponent;
  let fixture: ComponentFixture<BabyLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
