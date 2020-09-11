import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  keyID$: Observable<string>;
  constructor(private readonly route: ActivatedRoute) {
    this.keyID$ = this.route.queryParams.pipe(
      map((params) => params['key_id']),
    );
  }

  ngOnInit(): void {}
}
