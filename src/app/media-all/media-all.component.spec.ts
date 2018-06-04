import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAllComponent } from './media-all.component';

describe('MediaAllComponent', () => {
  let component: MediaAllComponent;
  let fixture: ComponentFixture<MediaAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
