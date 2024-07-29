import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducListNavbarComponent } from './produc-list-navbar.component';

describe('ProducListNavbarComponent', () => {
  let component: ProducListNavbarComponent;
  let fixture: ComponentFixture<ProducListNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProducListNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducListNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
