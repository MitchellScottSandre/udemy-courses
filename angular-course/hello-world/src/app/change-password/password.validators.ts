import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const ORIG_PASSWORD = '1234';
                if (control.value !== ORIG_PASSWORD) {
                    resolve({ invalidOldPassword: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    // control will be the form: FormGroup
    static passwordsShouldMatch(control: AbstractControl) {
        // need to get a reference to newPassword and confirmPassword fields
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordsShouldMatch: true };
        }

        return null;
    }
}
