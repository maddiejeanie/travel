import { suburbdata } from './data.js';

const inputBox = document.getElementById("inputBox");
const resultsContainer = document.getElementById("results");

inputBox.addEventListener("input", function() {
    
  const inputValue = this.value.toUpperCase();
  const matchingSuburbs = suburbdata.filter(function(suburb) {
    return suburb.suburb.toUpperCase().startsWith(inputValue);
  });

  resultsContainer.innerHTML = "";
  for (let i = 0; i < matchingSuburbs.length; i++) {
    const result = document.createElement('div');
    result.classList.add('results');
    result.innerHTML = `<div id="suburbname">${matchingSuburbs[i].suburb}</div><div id="fee">$${matchingSuburbs[i].fee}</div>`;
    resultsContainer.appendChild(result);
  }
});
