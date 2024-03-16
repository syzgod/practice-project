import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FetchService } from './fetch.service';
import { InputTextModule } from 'primeng/inputtext';
import { Post } from './post/post.model';
import { PostComponent } from './post/post.component';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts: Post[] = [];

  constructor(
    private primengConfig: PrimeNGConfig,
    private fetch: FetchService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  fetchPosts() {
    this.fetch.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
