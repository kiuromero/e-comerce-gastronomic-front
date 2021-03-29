import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVideosComponent } from './detail-videos.component';

describe('DetailVideosComponent', () => {
  let component: DetailVideosComponent;
  let fixture: ComponentFixture<DetailVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
