import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FaucetRequest } from '@model-ce/faucets/faucet.model';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-view-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
})
export class FaucetComponent implements OnInit {
  @Input() hasFaucet?: boolean;
  @Input() denoms?: string[];
  @Input() creditAmount?: number;
  @Input() maxCredit?: number;
  @Input() address?: string;
  //@Input() form?: FormGroup;
  @Output() postFaucetRequested: EventEmitter<FaucetRequest> = new EventEmitter<FaucetRequest>();

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._buildForm();
  }

  ngOnInit(): void { }

  onPostFaucetRequested(faucetRequest: FaucetRequest): void {
    this.postFaucetRequested.emit(faucetRequest);
  }

  get addressForm() {
    return <FormControl>this.form.get('addressForm');
  }
  get ubtcForm() {
    return <FormControl>this.form.get('ubtcForm');
  }
  get ujsmnForm() {
    return <FormControl>this.form.get('ujsmnForm');
  }
  get jpyxForm() {
    return <FormControl>this.form.get('jpyxForm');
  }

  submit(form: FormGroup) {
    console.log('submittttttt');
    console.log(form);
    console.log(form.value);

    const add = form.controls.addressForm.value;
    const a = form.controls.ubtcForm.value;
    const b = form.controls.ujsmnForm.value;
    const c = form.controls.jpyxForm.value;

    //let rq : FaucetRequest = {
    //  address: "jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt",
    //  coins: { amount: 1, denom: "ubtc" } }

    console.log(add, a, b, c);
    //curl -X POST -d '{"address": "jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt", "coins": ["10ubtc"]}'　http://a.test.jpyx.lcnem.net:8000
  }

  private _buildForm(): FormGroup {
    return this._fb.group({
      addressForm: ['', [Validators.required]],
      ubtcForm: ['', [Validators.required, rangeValidator, numberValidator]],
      ujsmnForm: ['', [Validators.required, rangeValidator, numberValidator]],
      jpyxForm: ['', [Validators.required, rangeValidator, numberValidator]],
    });
  }
}

function rangeValidator(formControl: AbstractControl) {
  const val = formControl.value;
  return Number(val) > 10 || Number(val) < 0 ? { rangeValidator: true } : null;
}

function numberValidator(formControl: AbstractControl) {
  const val = formControl.value;
  return isNaN(Number(val)) ? { numberValidator: true } : null;
}
