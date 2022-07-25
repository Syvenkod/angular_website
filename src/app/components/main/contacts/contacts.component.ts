import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


  constructor(private contactForm: FormBuilder){}
  form: FormGroup

  ngOnInit() {
    this.form = this.contactForm.group({
      name: [null,[Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      msg: ["", Validators.required]
    })
  }

  onSubmit(form) {
    console.log(form.value);
    this.form.reset();
  }

}
