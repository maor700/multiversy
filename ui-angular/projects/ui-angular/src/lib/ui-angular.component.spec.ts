import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibraryComponent } from './ui-angular.component';

describe('ComponentLibraryComponent', () => {
  let component: ComponentLibraryComponent;
  let fixture: ComponentFixture<ComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
