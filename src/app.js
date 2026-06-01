const tarefas = [];

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("tarefaInput");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");

    const total = document.getElementById("total");
    const pendentes = document.getElementById("pendentes");
    const concluidas = document.getElementById("concluidas");

    function atualizarContadores() {

        const totalTarefas = tarefas.length;

        const concluidasQtd = tarefas.filter(
            tarefa => tarefa.concluida
        ).length;

        const pendentesQtd = totalTarefas - concluidasQtd;

        total.textContent = totalTarefas;
        pendentes.textContent = pendentesQtd;
        concluidas.textContent = concluidasQtd;
    }

    function renderizarTarefas() {

        lista.innerHTML = "";

        tarefas.forEach((tarefa, indice) => {

            const li = document.createElement("li");

            li.innerHTML = `
        <div class="tarefa-info">
          <input
            type="checkbox"
            ${tarefa.concluida ? "checked" : ""}
            class="checkbox-tarefa"
          >

          <span class="${tarefa.concluida ? "texto-concluido" : ""
                }">
            ${tarefa.descricao}
          </span>
        </div>

        <div class="acoes">
          <span class="${tarefa.concluida
                    ? "badge-concluida"
                    : "badge-pendente"
                }">
            ${tarefa.concluida
                    ? "Concluída"
                    : "Pendente"
                }
          </span>

          <button class="btn-excluir">
            🗑
          </button>
        </div>
      `;

            const checkbox =
                li.querySelector(".checkbox-tarefa");

            checkbox.addEventListener("change", () => {

                tarefa.concluida = checkbox.checked;

                renderizarTarefas();
            });

            const btnExcluir =
                li.querySelector(".btn-excluir");

            btnExcluir.addEventListener("click", () => {

                tarefas.splice(indice, 1);

                renderizarTarefas();
            });

            lista.appendChild(li);
        });

        atualizarContadores();
    }

    btnAdicionar.addEventListener("click", () => {

        const descricao = input.value.trim();

        if (descricao === "") {
            alert("Digite uma tarefa.");
            return;
        }

        tarefas.push({
            descricao,
            concluida: false
        });

        input.value = "";

        renderizarTarefas();
    });

});