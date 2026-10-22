import dataSource from './data-source';
import { Tarefa } from './tarefas/entities/tarefa.entity';
import { Projeto } from './projetos/entities/projeto.entity';

async function seed() {
  await dataSource.initialize();
  const repo = dataSource.getRepository(Tarefa);
  const projetoRepo = dataSource.getRepository(Projeto);

  await repo.clear();
  await repo.save([
    { titulo: 'Estudar ORM', descricao: 'TypeORM + PostgreSQL', concluida: false },
    { titulo: 'Preparar a aula de hoje', concluida: true },
  ]);

  await projetoRepo.clear();
  await projetoRepo.save([
    { nome: 'TCC', descricao: 'Pesquisa e escrita do trabalho de conclusão', cor: 'roxo' },
    { nome: 'Academia', cor: 'vermelho' },
  ]);

  console.log('Seed concluído!');
  await dataSource.destroy();
}
seed();
