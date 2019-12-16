let button = document.getElementById('button');
let input = document.getElementById('input');
let ul = document.querySelector('ul');

const Events = () => {
  let li = document.createElement('li');
  let div = document.createElement('div');
  let deleteBtn = document.createElement('button');
  li.appendChild(document.createTextNode(input.value));
  deleteBtn.textContent = 'delete';
  ul.appendChild(div);
  div.appendChild(li);
  div.appendChild(deleteBtn);
  input.value = '';
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });
  deleteBtn.addEventListener('click', () => {
    div.parentNode.removeChild(div);
  });
};

const inputValue = () => {
  return input.value;
};

const buttonHandler = () => {
  if (inputValue() !== '') {
    Events();
  }
};

const keyHandler = value => {
  if (value.keyCode === 13 && inputValue() !== '') {
    Events();
  }
};

button.addEventListener('click', buttonHandler);
input.addEventListener('keypress', keyHandler);
