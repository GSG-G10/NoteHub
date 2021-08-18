const addNoteBtn = document.querySelector('.add-note-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const addNoteForm = document.getElementById('add-note-form');
const addNote = document.querySelector('.add-note');
const bgOverlay = document.querySelector('.bg-overlay');

const noteTTitleInput = document.getElementById('note-title-input');
const noteContentArea = document.getElementById('note-content-area');
const noteSelectCategory = document.querySelector('.note-select-category');

const outputContainer = document.querySelector('.output-container');

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

const createElement = (tagName, className, parentNode, textContent) => {
  const elementName = document.createElement(tagName);
  elementName.classList.add(className);
  parentNode.appendChild(elementName);
  elementName.textContent = textContent;
  return elementName;
};
const notesContainer = createElement('div', 'notes', outputContainer);

fetch('/showNotes')
  .then((result) => result.json())
  .then((notes) => {
    notes.forEach((note) => {
      const noteCard = createElement('div', 'note', notesContainer);
      const noteTitle = createElement('h3', 'note-title', noteCard, note.title);
      const noteContent = createElement('p', 'note-content', noteCard, note.content);
      const noteCategory = createElement('span', 'note-category', noteCard, note.name);
      const noteDate = createElement('span', 'note-date', noteCard, note.date_created);
    });
  });

addNoteForm.addEventListener('submit', (e) => {
  if (noteTTitleInput.value === '' || noteContentArea.value === '') {
    e.preventDefault();

    console.log('error');
  } else {
    fetch('/addNote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // eslint-disable-next-line max-len
      body: JSON.stringify({ title: noteTTitleInput.value, content: noteContentArea.value, category_id: noteSelectCategory.value }),
    })
      // eslint-disable-next-line no-restricted-globals
      .then(() => location.reload());
  }
});
