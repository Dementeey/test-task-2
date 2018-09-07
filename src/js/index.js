const arry = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];

const createItems = (index) => {
  const xItems = document.querySelector('.x ul');
  const newItem = document.createElement('li');

  newItem.textContent = index + 1;

  return xItems.appendChild(newItem);
};
const createBlock = (color, index, value) => {
  const xItems = document.querySelectorAll('.x ul li');
  const newBlock = document.createElement('div');

  newBlock.className = 'block';
  newBlock.style.backgroundColor = color;
  newBlock.style.height = `${value * 26}px`;

  return xItems[index + 1].appendChild(newBlock);
};
const arryToGraph = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let color = '';
    const value = arr[i];

    if (arr[i] <= 5) {
      color = 'green';
    } else if (arr[i] > 5 && arr[i] <= 10) {
      color = 'yellow';
    } else if (arr[i] >= 10) {
      color = 'red';
    }

    createItems(i);
    createBlock(color, i, value);
  }
};

arryToGraph(arry);

