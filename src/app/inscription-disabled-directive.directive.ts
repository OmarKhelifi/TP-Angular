import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabledDirective]',
  standalone: true
})
export class InscriptionDisabledDirectiveDirective {

  constructor() { }
  @HostBinding('class.link-is-disabled') status!: boolean;
  @Input()
  set appInscriptionDisabled(value: boolean) {
    this.status = value;
  }
}
