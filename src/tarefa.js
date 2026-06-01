function adicionarTarefa(array, text) {
    if(!text || texto.trim() == "") {
        return "Não adicionar"
    }

    array.push({
        descricao: text,
        concluida: false
    })

    return "Tarefa adicionada"
}

function concluirTarefa(array, index) {
    array[index].concluida = true
    return lista
}