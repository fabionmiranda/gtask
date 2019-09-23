
import { Tarefa, TarefaService } from '../shared';
import { Router } from '@angular/router';
import { OnInit, Component} from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  colunas: any[];
  totalResultados: number;
  conclusao: boolean;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit() {
    this.colunas = [
      // campos das colunas devem ser os mesmos do model TAREFAS
        { field: 'dataCriacao', header: 'Data da Criação' },
        { field: 'nome', header: 'Tarefa' },
        { field: 'prioridade', header: 'Prioridade (1 a 5)' },
        { field: 'concluida', header: 'Concluida' },

      ];

    this.tarefas = this.listarTodos();
    this.totalResultados = this.tarefas.length;

  }

  verificarConclusao($event: any, tarefa: Tarefa) {
    if ($event === true) {
      alert ('Evento concluido?');
    }

  }
  routeEditarTarefa(id: number): void {
    this.router.navigate(['/tarefas/editar', id]);
  }

  listarTodos(): Tarefa[] {

    return this.tarefaService.listarTodos();
    
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
