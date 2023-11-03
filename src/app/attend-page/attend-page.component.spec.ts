import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxCardModule } from '@infragistics/igniteui-angular';
import { AttendPageComponent } from './attend-page.component';

describe('AttendPageComponent', () => {
  let component: AttendPageComponent;
  let fixture: ComponentFixture<AttendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendPageComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
