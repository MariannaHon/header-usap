import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const search = document.querySelector('#search-btn');
const input = document.querySelector('.input');
const searchResults = document.querySelector('#searchResults');

const data = [
  { id: 1, content: "This is the first item" },
  { id: 2, content: "This is the second item" },
  { id: 3, content: "This is another item" },
  { id: 1, content: "cat" },
  { id: 2, content: "dog" },
  { id: 3, content: "mouse" }
];


search.addEventListener("click", () => {
  const searchTerm = input.value.toLowerCase();
  console.log(searchTerm);
  searchResults.innerHTML = "";
  if (searchTerm.trim() !== "") {
    const filteredResults = data.filter(item =>
      item.content.toLowerCase().includes(searchTerm)
    );

    filteredResults.forEach(item => {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = item.content;
      searchResults.appendChild(resultDiv);
    });
    localStorage.setItem('searchTerm', searchTerm);
  }
  input.value = "";
});


// ========================================

const modalResearch = document.querySelector('.modal-research');

function toggleResearch() {
  modalResearch.classList.toggle('is-open');
}

const open = document.querySelector('#btn-research');

open.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleResearch();
})

document.addEventListener("click", (event) => {
  if (modalResearch.classList.contains('is-open')) {
    modalResearch.classList.remove('is-open');
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modalResearch.classList.contains('is-open')) {
      modalResearch.classList.remove('is-open');
    }
  }
});

// =====================

const modalConsult = document.querySelector('.modal-consult');

function toggleConsult() {
  modalConsult.classList.toggle('is-open');
}

const openConsult = document.querySelector('#btn-consult');

openConsult.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleConsult();
})

document.addEventListener("click", (event) => {
  if (modalConsult.classList.contains('is-open')) {
    modalConsult.classList.remove('is-open');
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modalConsult.classList.contains('is-open')) {
      modalConsult.classList.remove('is-open');
    }
  }
});

// ==========================================

const modalDark = document.querySelector('.modal');

function toggleDark() {
  modalDark.classList.toggle('is-open');
}

const openDark = document.querySelector('#btn-menu');
const closeDark = document.querySelector('#btn-close');

openDark.addEventListener("click", (event) => {
  toggleDark();
})

closeDark.addEventListener("click", (event) => {
  toggleDark();
})

// ====================================

const darkResearch = document.querySelector('.dark-modal-research');
const openDarkResearch = document.querySelector('#modal-btn-research');

function toggleDarkResearch() {
  darkResearch.classList.toggle('is-open');
}

openDarkResearch.addEventListener("click", (event) => {
  toggleDarkResearch();
})

// ====================================

const darkConsult = document.querySelector('.dark-modal-consult');
const openDarkConsult = document.querySelector('#modal-btn-consult');

function toggleDarkConsult() {
  darkConsult.classList.toggle('is-open');
}

openDarkConsult.addEventListener("click", (event) => {
  toggleDarkConsult();
})