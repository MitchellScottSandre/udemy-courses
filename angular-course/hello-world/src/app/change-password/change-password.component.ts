import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    'old-password': new FormControl('', [], PasswordValidators.isOldPassword)
  });

  constructor(fb: FormBuilder) {
    // this.form = fb.group({
    //   'oldPassword': fb.control('', [], PasswordValidators.isOldPassword)
    // });
  }

}
