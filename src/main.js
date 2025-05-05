import './style.css'
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate:true })

function sortByYear() {
  const container = document.getElementById("container");
  const cards = Array.from(container.getElementsByClassName("card"));
  
  cards.sort((a, b) => a.dataset.year - b.dataset.year);
  
  cards.forEach(card => container.appendChild(card));
}

function filterByTag(tag) {
  const cards = document.getElementsByClassName("card");
  for (let card of cards) {
    const tags = card.dataset.tags.split(',');
    card.style.display = tags.includes(tag) ? 'block' : 'none';
  }
}

function showAll() {
  const cards = document.getElementsByClassName("card");
  for (let card of cards) {
    card.style.display = 'block';
  }
}

window.sortByYear = sortByYear
window.filterByTag = filterByTag
window.showAll = showAll
