import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FetchService } from './fetch.service';
import { InputTextModule } from 'primeng/inputtext';
import { PostComponent } from './post/post.component';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { Subscribers } from './post/post.model';

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
    PostComponent,
    CommonModule,
    FormsModule,
    PaginatorModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  subscribers: Subscribers[] = [];
  value: string = '';
  first: number = 0;
  rows: number = 10;

  constructor(
    private primengConfig: PrimeNGConfig,
    private fetch: FetchService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onPageChange(event: PageEvent) {
    first: event.first;
    rows: event.rows;
  }

  fetchPosts() {
    this.fetch.getPosts().subscribe((data) => {
      this.subscribers = data;
    });
  }
}
