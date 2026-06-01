function adicionarTarefa(array, text) {
    if(!text || text.trim() == "") {
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
    return "Status concluído"
}

module.exports = {adicionarTarefa, concluirTarefa}