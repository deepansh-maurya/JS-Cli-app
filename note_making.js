"use strict";
const prompt = require("prompt-sync")();

// Basic functions of this note making app -> add, delete, list, read, edit, search.

//empty array for storing information
let takeNote = [];

//Function to add a new note
function addNewNote() {
  console.log("\n");
  console.log("~~~~~~~ ENTER TITLE AND CONTENT OF NOTE ~~~~~~~");
  var note = {
    category: prompt("Category: ").toString(),
    title: prompt("Title : ").toString(),
    content: prompt("Start Writting : ").toString(),
  };
  takeNote.push(note);
}

//Function to categories the notes
function toCategories(takeNote, category) {
  console.log("\n");
  let array = takeNote.filter((obj) => obj.category === category);

  if (array.length == 0 || array == undefined) {
    console.log("No such category is present, Use CREATE command to create");
    return;
  }
  console.log(`Providing you the notes of ${category} category `);
  console.log("\n");
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}. ${array[i].title} `);
    console.log(`   ${array[i].content}`);
  }
}

// Function to remove a note by title
function removeNote(takeNote, title) {
  console.log("\n");

  let array = takeNote.filter((obj) => obj.title === title);

  if (array.length == 0) {
    console.log(`You never created a note with [${title}] title`);
    return;
  }
  takeNote = takeNote.filter((obj) => obj.title !== title);
  console.log(`Note removed succesfully `);
  toListNotes(takeNote);
  return takeNote;
}
function obseleteNote(takeNote, title) {
  let array = takeNote.filter((obj) => obj.title === title);

  if (array.length == 0) {
    console.log(`You never created a note with [${title}] title`);
    return;
  }
  takeNote = takeNote.filter((obj) => obj.title !== title);
  return takeNote;
}

//Function to list all the Notes
function toListNotes(takeNote) {
  console.log("\n");

  console.log(`------------ Listing Your Notes -------------`);
  let number = 1;
  if (takeNote.length == 0 || typeof takeNote == undefined) {
    console.log(`No notes available. Use CREATE command to create note`);
    return;
  }
  for (let i = 0; i < takeNote.length; i++) {
    console.log(` ${number++} ${takeNote[i].title}`);
  }
  return;
}

//Function to read any specific note
function toReadNote(takeNote, title) {
  console.log("\n");

  let arrayToRead = takeNote.filter((obj) => obj.title === title);
  if (arrayToRead.length == 0) {
    console.log("\n");
    console.log(
      `Nothing is present to read. Use CREATE command to create new note`
    );
    return;
  }
  if (arrayToRead.length >= 0) {
    console.log(
      `---------- Providing the [${arrayToRead[0].title}] note to read ----------`
    );
    console.log(`${arrayToRead[0].content}`);
  } else {
    console.log(
      `Nothing is present to read. Use CREATE command to create new note: ${title}`
    );
  }
  return;
}

//Function that enable user to edit the note -> content
function toEditNoteContent(takeNote, title) {
  console.log("\n");

  // copying array object in another array
  let arrayToEdit = takeNote.filter((obj) => obj.title === title);
  if (arrayToEdit.length == 0 || arrayToEdit == undefined) {
    console.log(
      `You never created a note with [${title} title, Use CREATE command to create note]`
    );
    return;
  }
  takeNote = obseleteNote(takeNote, title);

  // copying the object key to update the note
  let edit = arrayToEdit[0].content.toString();
  edit = edit.split(".");

  //calculating the total no. lines in note
  let linesContain = edit.length;

  // getting the line no. to update that specific line
  let num = prompt(
    `Your note containes ${linesContain} lines, enter the line you wan to edit : `
  );

  // taking input from user to update the line
  edit[num - 1] = prompt(
    "Enter the updated line and don't forget to end the line the fullstop : "
  );
  console.log(`------------ Line Updated Succesfully ----------------`);

  arrayToEdit[0].content = edit.toString();

  return arrayToEdit;
}

//Function that enable user toedit note -> title exit

function toEditNoteTitle(takeNote, title) {
  console.log("\n");

  let arrayToEdit = takeNote.filter((obj) => obj.title === title);
  if (arrayToEdit.length == 0) {
    console.log(
      `You never created a note with [${title}] title, Use CREATE command to create note]`
    );
    return;
  }
  takeNote = obseleteNote(takeNote, title);

  // copying the object key to update the note
  let edit = arrayToEdit[0].title.toString();

  // taking input from user to update the line
  edit = prompt("Enter the updated title : ");
  console.log(`------------ Title Updated Succesfully ----------------`);

  arrayToEdit[0].title = edit.toString();
  // takeNote.push(arrayToEdit)

  return arrayToEdit;
}

function displayingTaksUserCanPerform() {
  console.log("\n");

  console.log(`------------- Functions Of This Note Making App -------------
    1. Create a new note [use create]
    2. Remove Note [use remove]
    3. List Note [use list]
    4. Read Note [use read]
    5. Search By Category [use category]
    6. Edit Note - content [use edit_content]
    7. Edit Note - Title [use edit_title]`);
  console.log("\n");
  let giveInput = prompt("Enter the task you want to perform :  ").toString();
  handleInput(giveInput);
}
displayingTaksUserCanPerform();

function handleInput(input) {
  switch (input) {
    case "create":
      addNewNote();
      displayingTaksUserCanPerform();
      break;

    case "remove": {
      let title = prompt("Enter the title of note you want to delete : ");
      removeNote(takeNote, title);
      displayingTaksUserCanPerform();
      break;
    }
    case "list":
      toListNotes(takeNote);
      displayingTaksUserCanPerform();
      break;
    case "read": {
      let title = prompt("Enter the title of note you want to Read : ");
      toReadNote(takeNote, title);
      displayingTaksUserCanPerform();
      break;
    }

    case "edit_content": {
      let note_title = prompt(
        "Enter the title of note you want to Edit : "
      ).toString();
      takeNote.push(toEditNoteContent(takeNote, note_title));
      displayingTaksUserCanPerform();
      break;
    }

    case "edit_title": {
      let note_title = prompt(
        "Enter the title of note you want to Edit : "
      ).toString();
      takeNote.push(toEditNoteTitle(takeNote, note_title));
      displayingTaksUserCanPerform();
      break;
    }

    case "category": {
      let category = prompt("Enter the name of category : ").toString();
      toCategories(takeNote, category);
      displayingTaksUserCanPerform();
      break;
    }

    case "exit":
      console.log(
        `____________________________GOOD BYE_____________________________`
      );
      break;

    default:
      console.log(`Please enter valid commnand`);
      displayingTaksUserCanPerform();
  }
}
