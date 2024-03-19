import { Component, Input } from '@angular/core';

import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { SubDetailsComponent } from '../sub-details/sub-details.component';
import { Subscribers } from './subscribers.model';

@Component({
  selector: 'app-subscribers',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    AvatarModule,
    AvatarGroupModule,
    SubDetailsComponent,
  ],
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.css',
})
export class SubscribersComponent {
  @Input() subscriber: Subscribers = {} as Subscribers;
  visible = false;
  constructor() {}

  toggleDialog() {
    this.visible = !this.visible;
  }
}
