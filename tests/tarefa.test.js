const { adicionarTarefa, concluirTarefa } = require('../src/tarefa')

describe('Sistema de Gerenciamento de Tarefas', () => {
  test('Adicionar tarefa válida', () => {
    const tarefas = []
    const result = adicionarTarefa(tarefas, 'Estudar JavaScript')

    expect(result).toBe("Tarefa adicionada")
  })

  test('Nega tarefa vazia', () => {
    const tarefas = []
    const result = adicionarTarefa(tarefas, '')

    expect(result).toBe("Não adicionar")

  })

  test('Concluir tarefa', () => {
    const tarefas = [
      {
        descricao: 'Estudar Git',
        concluida: false
      }
    ]
    const result = concluirTarefa(tarefas, 0)

    expect(result).toBe("Status Concluído")
  })
})