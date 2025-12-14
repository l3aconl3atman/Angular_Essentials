import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string | undefined>();
  isAddingTask = false;

  get selectedUserTasks() {
    return;
  }

  onCompleteTask(id: string) {}

  onAddTask() {
    this.isAddingTask = true;
  }

  exitAddTask() {
    this.isAddingTask = false;
  }

  onSubmitTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
