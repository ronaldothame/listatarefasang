import { Component } from '@angular/core';
import { TarefasComponent } from './tarefas/tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarefasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';
}
