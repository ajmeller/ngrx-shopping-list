import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app-state.interface';
import { ShoppingItem } from './store/models/shopping-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<ShoppingItem[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select((store) => store.shopping);
  }
}
