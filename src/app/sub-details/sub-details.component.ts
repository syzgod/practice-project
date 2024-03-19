import { Component, Input } from '@angular/core';

import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Subscribers } from '../subscribers/subscribers.model';

@Component({
  selector: 'app-sub-details',
  standalone: true,
  imports: [
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    DialogModule,
    CommonModule,
  ],
  templateUrl: './sub-details.component.html',
  styleUrl: './sub-details.component.css',
})
export class SubDetailsComponent {
  @Input() visible: boolean = false;
  @Input() subscriber: Subscribers = {} as Subscribers;

  onToggleDialog() {
    this.visible = !this.visible;
  }
}
