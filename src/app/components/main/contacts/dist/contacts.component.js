"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactForm) {
        this.contactForm = contactForm;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.form = this.contactForm.group({
            name: [null, [forms_1.Validators.required]],
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            msg: ["", forms_1.Validators.required]
        });
    };
    ContactsComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
        this.form.reset();
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.scss']
        })
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
