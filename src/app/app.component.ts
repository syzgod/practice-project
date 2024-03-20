import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FetchService } from './fetch.service';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { Subscribers } from './subscribers/subscribers.model';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ThemeService } from './theme.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    StyleClassModule,
    SubscribersComponent,
    CommonModule,
    FormsModule,
    PaginatorModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  subscribers: Subscribers[] = []; // All subscribers
  paginatedSubscribers: Subscribers[] = []; // Paginated subscribers
  filteredSubscribers: Subscribers[] = []; // Filtered by search
  searchField: string = '';
  first: number = 0;
  rows: number = 10;
  theme: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
    private fetch: FetchService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    first: event.first;
    rows: event.rows;
    this.paginatedSubscribers = this.subscribers.slice(
      event.first,
      event.first + event.rows
    );
  }
  onSubmit() {
    if (this.searchField === '') {
      this.fetchSubscribers();
    } else {
      this.filteredSubscribers = this.subscribers.filter((subs) =>
        subs.name
          .trim()
          .toLowerCase()
          .includes(this.searchField.trim().toLowerCase())
      );
      this.paginatedSubscribers = this.filteredSubscribers;
    }
    console.log(this.paginatedSubscribers);
    console.log(this.subscribers);
    console.log(this.filteredSubscribers);
  }

  fetchSubscribers() {
    this.fetch.getSubscribers().subscribe((data) => {
      this.subscribers = data;
      this.paginatedSubscribers = this.subscribers.slice(
        this.first,
        this.first + this.rows
      );
      console.log(this.subscribers);
    });
  }

  onThemeChange(theme: string) {
    this.theme = theme;
    this.themeService.switchTheme(theme);
  }

  onSubscriberChange(event: any) {
    console.log(event);
  }
}
