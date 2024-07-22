let allNotes = {
    'notesTitles':['Frucht', 'Frucht', 'Frucht'],
    'notes':['Apfel', 'Banane', 'Kirsche'],
    'trashNotesTitles':[],
    'trashNotes':[],
    'archivedNotesTitles':[],
    'archivedNotes':[],
}

function init(){
    getFromLocalStorage();
    renderAllNotes();
}


function renderAllNotes() {
    renderNotes('content', allNotes.notes, getNoteTemplate);
    renderNotes('trash_content', allNotes.trashNotes, getTrashNoteTemplate);
    renderNotes('archived_content', allNotes.archivedNotes, getArchivedNoteTemplate);
}


function renderNotes(id, array, template) {
    let contentRef = document.getElementById(id);
    contentRef.innerHTML = '';

    for (let index = 0; index < array.length; index++) {
        contentRef.innerHTML += template(index);
    }
}


function addNote() {
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteTitleInput = document.getElementById('note_title_input').value;
    let noteInputRef = document.getElementById('note_input');
    let noteInput = document.getElementById('note_input').value;
    
    if (noteTitleInput == '' || noteInput == '') {
        return;
    }

    allNotes.notesTitles.push(noteTitleInput);
    allNotes.notes.push(noteInput);

    saveToLocalStorage();
    renderAllNotes();
    noteInputRef.value = '';
    noteTitleInputRef.value = '';
}


function moveNote(index, startKey, endKey) {
    let noteTitle = allNotes[startKey + "Titles"].splice(index, 1);
    let note = allNotes[startKey].splice(index, 1);
    allNotes[endKey + "Titles"].push(noteTitle[0]);
    allNotes[endKey].push(note[0]);
  
    saveToLocalStorage();
    renderAllNotes();
}


function deleteNote(index) {
    allNotes.trashNotesTitles.splice(index, 1);
    allNotes.trashNotes.splice(index, 1);

    saveToLocalStorage();
    renderAllNotes();
}


function saveToLocalStorage(){
    localStorage.setItem('notesTitles', JSON.stringify(allNotes.notesTitles));
    localStorage.setItem('notes', JSON.stringify(allNotes.notes));
    localStorage.setItem('trashNotesTitles', JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem('trashNotes', JSON.stringify(allNotes.trashNotes));
    localStorage.setItem('archivedNotesTitles', JSON.stringify(allNotes.archivedNotesTitles));
    localStorage.setItem('archivedNotes', JSON.stringify(allNotes.archivedNotes));
}


function getFromLocalStorage() {
    let retrievedNotesTitlesArray = JSON.parse(localStorage.getItem('notesTitles'));
    let retrievedNotesArray = JSON.parse(localStorage.getItem('notes'));
    let retrievedTrashNotesTitlesArray = JSON.parse(localStorage.getItem('trashNotesTitles'));
    let retrievedTrashNotesArray = JSON.parse(localStorage.getItem('trashNotes'));
    let retrievedArchivedNotesTitlesArray = JSON.parse(localStorage.getItem('archivedNotesTitles'));
    let retrievedArchivedNotesArray = JSON.parse(localStorage.getItem('archivedNotes'));
    
    if (retrievedNotesArray === null || retrievedNotesTitlesArray === null) {
        return;
    }
    
    allNotes.notesTitles = retrievedNotesTitlesArray;
    allNotes.notes = retrievedNotesArray;
    allNotes.trashNotesTitles = retrievedTrashNotesTitlesArray;
    allNotes.trashNotes = retrievedTrashNotesArray;
    allNotes.archivedNotesTitles = retrievedArchivedNotesTitlesArray;
    allNotes.archivedNotes = retrievedArchivedNotesArray;
}