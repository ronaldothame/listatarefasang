import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'TarefasComponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas: Tarefa[] = [
    { descricao: 'Finalizar o projeto de Angular para a AC2', concluida: true },
    { descricao: 'Implementar o Front-end de Fábrica de Projetos', concluida: false },
    { descricao: 'Entregar os diagramas referentes a matéria de Qualidade e testes de Software', concluida: true },
    { descricao: 'Estudar para a prova de AC2 de Modelagem de Processos de Negócio', concluida: true },
    { descricao: 'Finalizar a trilha do Skill Builder da AWS', concluida: false }
  ];

  concluirTarefa(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
