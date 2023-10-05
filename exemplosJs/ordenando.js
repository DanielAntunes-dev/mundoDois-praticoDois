// Função para trocar os valores de duas posições de um vetor
const swap = (arr, pos1, pos2) => {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (arr, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const randomIndex1 = Math.floor(Math.random() * arr.length);
    const randomIndex2 = Math.floor(Math.random() * arr.length);
    swap(arr, randomIndex1, randomIndex2);
  }
};

// Função para ordenar um vetor com o algoritmo Bubble Sort
const bubble_sort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// Função para ordenar um vetor com o algoritmo Selection Sort
const selection_sort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
};

// Função para ordenar um vetor com o algoritmo Quick Sort
const quick_sort = (arr, menor, maior) => {
  if (menor < maior) {
    const pi = partition(arr, menor, maior);
    quick_sort(arr, menor, pi - 1);
    quick_sort(arr, pi + 1, maior);
  }
};

// Função de apoio para particionamento no Quick Sort
const partition = (arr, menor, maior) => {
  const pivot = arr[maior];
  let i = menor - 1;
  for (let j = menor; j < maior; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, maior);
  return i + 1;
};

// Exemplos de uso
const arr = [5, 3, 8, 1, 4];
console.log("Array antes da ordenação:", arr);

shuffle(arr, 3);
console.log("Array após embaralhamento:", arr);

bubble_sort(arr);
console.log("Array após Bubble Sort:", arr);

selection_sort(arr);
console.log("Array após Selection Sort:", arr);

quick_sort(arr, 0, arr.length - 1);
console.log("Array após Quick Sort:", arr);
