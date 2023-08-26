const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-task')

let minhalistadeitens = []

function adicionanovatarefa() {
    minhalistadeitens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrartarefas()
}

function mostrartarefas() {
    let novali = ''

    minhalistadeitens.forEach((item, posicao) => {
        novali = novali + `<li class="task ${item.concluida && "done"}">
        <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirtarefa(${posicao})" >

        <p>${item.tarefa}</p>

        <img src="img/trash.png" alt="deletar-a-tarefa" onclick="deletaritem(${posicao})">
    </li>`

    })

    listacompleta.innerHTML = novali

}

function concluirtarefa(posicao) {
    minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida

    mostrartarefas()
}

function deletaritem(posicao) {
    minhalistadeitens.splice(posicao, 1)
    mostrartarefas()
}

button.addEventListener('click', adicionanovatarefa)