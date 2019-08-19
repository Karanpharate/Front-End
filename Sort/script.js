const ascButton = document.getElementById('ascButton'),
  descButton = document.getElementById('descButton'),
  numArray = [2, 4, 1, 3],
  firstBlock = document.getElementById('firstBlock'),
  secondBlock = document.getElementById('secondBlock'),
  thirdBlock = document.getElementById('thirdBlock'),
  fourthBlock = document.getElementById('fourthBlock');

firstBlock.innerHTML = numArray[0];
secondBlock.innerHTML = numArray[1];
thirdBlock.innerHTML = numArray[2];
fourthBlock.innerHTML = numArray[3];

ascButton.addEventListener('click', sortAsc = () => {
  numArray.sort((a, b) => a - b);
  firstBlock.innerHTML = numArray[0];
  secondBlock.innerHTML = numArray[1];
  thirdBlock.innerHTML = numArray[2];
  fourthBlock.innerHTML = numArray[3];
  ascButton.classList.add('hide');
  descButton.classList.remove('hide');
});

descButton.addEventListener('click', sortDesc = () => {
  numArray.sort((a, b) => b - a);
  firstBlock.innerHTML = numArray[0];
  secondBlock.innerHTML = numArray[1];
  thirdBlock.innerHTML = numArray[2];
  fourthBlock.innerHTML = numArray[3];
  descButton.classList.add('hide');
  ascButton.classList.remove('hide');
});
