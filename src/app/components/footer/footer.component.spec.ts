import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { GetDataService } from '../service/get-data.service';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let getDataServiceSpy: jasmine.SpyObj<GetDataService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const getDataService = jasmine.createSpyObj('GetDataService', ['getCategoriesData']);
    const router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FooterComponent],
      providers: [
        { provide: GetDataService, useValue: getDataService },
        { provide: Router, useValue: router },
        FormBuilder,
      ],
    }).compileComponents();

    getDataServiceSpy = TestBed.inject(GetDataService) as jasmine.SpyObj<GetDataService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve categories data on init', () => {
    const categories = ['Category 1', 'Category 2'];
    getDataServiceSpy.getCategoriesData.and.returnValue(of(categories));

    fixture.detectChanges();

    expect(getDataServiceSpy.getCategoriesData).toHaveBeenCalled();
    expect(component.categories).toEqual(categories);
  });

  it('should navigate to catalog on showCategory', () => {
    component.showCategory();

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('catalog');
  });

  it('should reset form on submit', () => {
    const email = 'test@example.com';
    component.form.setValue({ email });

    component.onSubmit(component.form);

    expect(component.form.value).toEqual({ email: null });
  });

  it('should have required email form control', () => {
    const emailControl = component.form.controls.email;

    emailControl.setValue('');
    expect(emailControl.valid).toBeFalsy();

    emailControl.setValue('test');
    expect(emailControl.valid).toBeFalsy();

    emailControl.setValue('test@example.com');
    expect(emailControl.valid).toBeTruthy();
  });
});
