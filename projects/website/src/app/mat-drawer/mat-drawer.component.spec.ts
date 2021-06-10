import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDrawerComponent } from './mat-drawer.component';

describe('MatDrawerComponent', () => {
  let component: MatDrawerComponent;
  let fixture: ComponentFixture<MatDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
