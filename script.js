
const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerText = goal;

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);
  const listItem = document.createElement('li');
  const listValue = document.createTextNode(newEntry.toFixed(1));
  listItem.appendChild(listValue);
  entriesWrapper.appendChild(listItem);
}

//Calculating all the entries in array
function reducer(total, currentVal) {
  return total + currentVal;
}

function totalEntries() {
  const totalValue = entries.reduce(reducer).toFixed(1);

  document.querySelector('#total').textContent = totalValue;
  document.querySelector('#progressTotal').textContent = totalValue;
}

//Average value of the run distance
function averageValue() {
  const averageSum = (entries.reduce(reducer)/ entries.length).toFixed(1);
  document.querySelector('#average').textContent = averageSum;
}

//The longest distance
function largestValue() {
  const largest = Math.max.apply(null, entries);
  document.querySelector('#high').textContent = largest;
}

//Progress circle visualization
function goalValue() {
  const totalValue = entries.reduce(reducer).toFixed(1);
  const donePercents = totalValue / (goal/100);
  const circle = document.querySelector('#progressCircle');
  if(donePercents > 100) donePercents === 100;
  circle.style.background = `conic-gradient( #3CB371 ${donePercents}%, #2d3740 ${donePercents}% 100%)`;
  }

function handleSubmit(e) {
  e.preventDefault();
  const entry = +document.querySelector('#entry').value;
  if(!entry) return;
  document.querySelector('form').reset();
  entries.push(entry)
  addNewEntry(entry);

  totalEntries();
  averageValue();
  largestValue();
  goalValue();
}


const form = document.querySelector('form').addEventListener('submit', handleSubmit);

const addButton = document.querySelector('.submit').addEventListener('click', handleSubmit);
