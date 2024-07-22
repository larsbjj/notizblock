function getNoteTemplate(index) {
    return `<div class="note"><span><p>${allNotes.notesTitles[index]}</p><p>${allNotes.notes[index]}</p></span>
        <span class="row"><button onclick="moveNote(${index}, 'notes', 'trashNotes')">X</button></p><button onclick="moveNote(${index}, 'notes', 'archivedNotes')">A</button></span></div>`;
}


function getTrashNoteTemplate(index) {
    return `<div class="note"><span><p>${allNotes.trashNotesTitles[index]}</p><p>${allNotes.trashNotes[index]}</p></span>
    <span class="row"><button onclick="deleteNote(${index})">X</button><button onclick="moveNote(${index}, 'trashNotes', 'notes')">N</button></span></div>`;
}


function getArchivedNoteTemplate(index) {
    return `<div class="note"><span><p>${allNotes.archivedNotesTitles[index]}</p><p>${allNotes.archivedNotes[index]}</p></span>
    <span class="row"><button onclick="moveNote(${index}, 'archivedNotes', 'trashNotes')">X</button><button onclick="moveNote(${index}, 'archivedNotes', 'notes')">N</button></span></div>`;
}