import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectAddonsComponent } from './object-addons.component';

describe('ObjectAddonsComponent', () => {
  let component: ObjectAddonsComponent;
  let fixture: ComponentFixture<ObjectAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectAddonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
