import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const identityRevealedValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password !== confirmPassword) {
    control.get('confirmPassword').setErrors({ ConfirmPassword: true });
  } else {
    return null;
  }
};
