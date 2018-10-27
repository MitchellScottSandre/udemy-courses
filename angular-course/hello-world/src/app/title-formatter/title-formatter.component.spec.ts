import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFormatterComponent } from './title-formatter.component';

describe('TitleFormatterComponent', () => {
  let component: TitleFormatterComponent;
  let fixture: ComponentFixture<TitleFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
