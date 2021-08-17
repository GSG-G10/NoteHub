const addNoteBtn = document.querySelector('.add-note-btn');
const cancelBtn = document.querySelector('.cancel-btn');

const searchBtn = document.querySelector('.search-btn');

const addNote = document.querySelector('.add-note');
const searchSection = document.querySelector('.search-section');
const bgOverlay = document.querySelector('.bg-overlay');

addNoteBtn.addEventListener('click', () => {
  addNote.toggleAttribute('hidden');
  bgOverlay.toggleAttribute('hidden');
  document.body.style.overflow = 'hidden';
});
cancelBtn.addEventListener('click', () => {
  addNote.toggleAttribute('hidden');
  bgOverlay.toggleAttribute('hidden');
  document.body.style.overflow = 'auto';
});
