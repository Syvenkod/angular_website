import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private getDataService: GetDataService,
              public router: Router,
              private subscribeForm: FormBuilder) {}

  form: FormGroup;
  categories:any|undefined;
  facebook = faFacebook;
  itstagram = faInstagram;
  pinterest = faPinterest;
  date = new Date().getFullYear();

  ngOnInit(): void {
    this.getDataService.getCategoriesData().subscribe(ct => {
    this.categories = ct;});
    this.form = this.subscribeForm.group({
      email: [null, [Validators.required, Validators.email]]
    })
  }
  showCategory(){
    this.router.navigateByUrl('catalog');
  }

  onSubmit(form) {
    console.log(form.value);
    this.form.reset();
  }
}
