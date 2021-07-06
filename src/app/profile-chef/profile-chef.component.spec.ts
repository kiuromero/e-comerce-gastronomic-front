import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChefComponent } from './profile-chef.component';

describe('ProfileChefComponent', () => {
  let component: ProfileChefComponent;
  let fixture: ComponentFixture<ProfileChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
