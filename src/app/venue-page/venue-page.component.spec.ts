import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { VenuePageComponent } from './venue-page.component';

describe('VenuePageComponent', () => {
  let component: VenuePageComponent;
  let fixture: ComponentFixture<VenuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuePageComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
