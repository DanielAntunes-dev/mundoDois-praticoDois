// Função para trocar os valores de duas posições de um vetor
const swap = (vetor, pos1, pos2) => {
  const temp = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (vetor, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const randomIndex1 = Math.floor(Math.random() * vetor.length);
    const randomIndex2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, randomIndex1, randomIndex2);
  }
};

// Função para ordenar um vetor com o algoritmo Bubble Sort
const bubble_sort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
      }
    }
  }
};

// Função para ordenar um vetor com o algoritmo Selection Sort
const selection_sort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }
    swap(vetor, i, minIndex);
  }
};

// Função para ordenar um vetor com o algoritmo Quick Sort
const quick_sort = (vetor, menor, maior) => {
  if (menor < maior) {
    const pi = partition(vetor, menor, maior);
    quick_sort(vetor, menor, pi - 1);
    quick_sort(vetor, pi + 1, maior);
  }
};

// Função de apoio para particionamento no Quick Sort
const partition = (vetor, menor, maior) => {
  const pivot = vetor[maior];
  let i = menor - 1;
  for (let j = menor; j < maior; j++) {
    if (vetor[j] < pivot) {
      i++;
      swap(vetor, i, j);
    }
  }
  swap(vetor, i + 1, maior);
  return i + 1;
};

function add() {
    // Capturar o campo de entrada
    const valorInput = document.getElementById("valor");

    // Capturar a lista de valores
    const valoresLista = document.getElementById("valores");

    // Criar um elemento li
    const node = document.createElement("li");

    // Definir um nó de texto com o valor do campo de entrada
    const textNode = document.createTextNode(valorInput.value);

    // Adicionar o nó de texto como filho do elemento li
    node.appendChild(textNode);

    // Adicionar o elemento li à lista de valores
    valoresLista.appendChild(node);

    // Limpar o campo de entrada
    valorInput.value = "";
}

function ordenar() {
    const valoresLista = document.getElementById("valores");
    const algoritmoSelecionado = document.getElementById("algoritmo").value;

    // Obter os nós da lista de valores e converter para um vetor de números
    const valores = Array.from(valoresLista.children).map((item) =>
      parseInt(item.innerHTML)
  );

    // Escolher o algoritmo de ordenação com base na seleção
    if (algoritmoSelecionado === "bubble") {
      bubble_sort(valores);
    } else if (algoritmoSelecionado === "selection") {
      selection_sort(valores);
    } else if (algoritmoSelecionado === "quick") {
      quick_sort(valores, 0, valores.length - 1);
  }

   // Atualizar a lista de valores com os valores ordenados
    valoresLista.innerHTML = valores.map((val) => `<li>${val}</li>`).join("");}

function misturar() {
    // Capturar a lista de valores
    const valoresLista = document.getElementById("valores");

    // Obter os nós da lista de valores e converter para um vetor de números
    const valores = Array.from(valoresLista.children).map((item) =>
      parseInt(item.innerHTML)
    );

    // Aplicar a função shuffle ao vetor
    shuffle(valores, 10); // Neste exemplo, estamos fazendo 10 trocas

    // Atualizar a lista de valores com os valores misturados
    valoresLista.innerHTML = valores.map((val) => `<li>${val}</li>`).join("");
}



