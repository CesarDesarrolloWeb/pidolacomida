import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { AuthService } from "../shared/auth.service";

@Component({
    template: `
    <div class="well col-md-offset-3 col-md-6">
        <h3>Accesa para acceder al sistema</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
        </form>
    </div>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    onSignin() {
      this.authService.signinUser(this.myForm.value);
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
