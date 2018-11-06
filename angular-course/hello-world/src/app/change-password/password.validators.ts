import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static isOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const ORIG_PASSWORD = '1234';
                if (control.value === ORIG_PASSWORD) {
                    resolve({ isOldPassword: true });
                } else {
                    resolve(null);
                }
            }, 3000);
        });
    }
}
