import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Post } from './post.model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() post: Post = {} as Post;

  constructor() {}
}
