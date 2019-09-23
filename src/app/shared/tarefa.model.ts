export class Tarefa {

    constructor (
        public id?: number,     // id da tarefa
        public nome?: string, //    descrição da tarefa
        public concluida?: boolean, // se está concluida ou nao
        public dataCriacao?: Date, // data de criacao da tarefa
        public titulo?: string,
        public prioridade?: number) {}

}