import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarTarefasComponent } from '../editar-tarefas/editar-tarefas.component';
import { CadastrarTarefaComponent } from '../cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefaComponent } from '../listar-tarefa/listar-tarefa.component';
import { TarefaConcluidaDirective, TarefaService } from '../shared';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    EditarTarefasComponent,
    CadastrarTarefaComponent,
    ListarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,   
    TableModule
  ], 
  providers: [
    TarefaService
  ]
  
})
export class TarefasModule { }
