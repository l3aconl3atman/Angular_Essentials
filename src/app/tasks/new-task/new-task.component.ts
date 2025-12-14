import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  exitAddTask = output();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onExitAddTask() {
    this.exitAddTask.emit();
  }
}
