import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  user = input.required<User>();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
