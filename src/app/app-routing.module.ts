import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTarefaComponent } from './listar-tarefa';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefasComponent } from './editar-tarefas/editar-tarefas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tarefas/listar', pathMatch: 'full' },
  { path: 'tarefas', redirectTo: 'tarefas/listar' },
  { path: 'tarefas/listar', component: ListarTarefaComponent },
  { path: 'tarefas/cadastrar', component: CadastrarTarefaComponent },
  { path: 'tarefas/editar/:id', component: EditarTarefasComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
