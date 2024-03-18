import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Subscribers } from './post.model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() subscriber: Subscribers = {} as Subscribers;
  visible = false;
  constructor() {}

  showDialog() {
    this.visible = true;
  }
}
