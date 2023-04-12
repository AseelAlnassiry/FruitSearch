const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple',
  'Apricot',
  'Avocado 🥑',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Currant',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

function search(str) {
  let results = [];
  if (str) {
    const unsortedData = fruit.filter((item) => item.toLowerCase().includes(str));
    results = unsortedData.slice(0, 10);
  }
  return results;
}

function searchHandler(e) {
  const inputVal = input.value.toLowerCase();
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  // Remove all the previous suggestions
  while (suggestions.firstChild) suggestions.removeChild(suggestions.firstChild);
  results.forEach((result) => {
    const newLi = document.createElement('li');
    const pre = result.toLowerCase().indexOf(inputVal);
    const post = pre + inputVal.length;
    const preSpan = document.createElement('span');
    const postSpan = document.createElement('span');
    const boldSpan = document.createElement('span');
    preSpan.innerText = result.slice(0, pre);
    boldSpan.innerText = result.slice(pre, post);
    boldSpan.classList.add('bold');
    postSpan.innerText = result.slice(post, result.length);
    newLi.result = result;
    newLi.append(preSpan, boldSpan, postSpan);
    suggestions.appendChild(newLi);
  });
}

function useSuggestion(e) {
  // TODO
  if (e.target.tagName === 'SPAN') {
    input.value = e.target.parentNode.result;
  } else {
    input.value = e.target.result;
  }
	while (suggestions.firstChild) suggestions.removeChild(suggestions.firstChild);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
