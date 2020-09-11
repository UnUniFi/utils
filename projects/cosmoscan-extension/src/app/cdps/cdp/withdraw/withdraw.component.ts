import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  keyID$: Observable<string>;
  constructor(private readonly route: ActivatedRoute) {
    this.keyID$ = this.route.queryParams.pipe(
      map((params) => params['key_id']),
    );
  }

  ngOnInit(): void {}
}
