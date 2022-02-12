import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVideoComponent } from './change-video.component';

describe('ChangeVideoComponent', () => {
  let component: ChangeVideoComponent;
  let fixture: ComponentFixture<ChangeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
