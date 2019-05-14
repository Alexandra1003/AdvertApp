import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenSymbolValidator(symbolRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = symbolRe.test(control.value);
    return forbidden ? {forbiddenSymbol: {value: control.value}} : null;
  };
}
