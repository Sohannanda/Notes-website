// console.log("hello");
shownotes();

//  if someone add a note, then add it to the local storage.
let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    noteobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addtxt.value = "";
    // console.log(noteobj);
    shownotes();
})


// function to show elements from local storage.
function shownotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    let html = "";
    noteobj.forEach(function (element, index) {

        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text"> ${element} </p>
                <button id=${index} onclick = "deletenote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>

        `
    });

    let notesElm = document.getElementById('notes');
    if (noteobj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show, use add notes section to add notes.`
    }
}


// function to delete note.
function deletenote(index){
    // console.log(" I am deleting");

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    noteobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    shownotes();
}



let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){
    
    let inputval = search.value.toLowerCase();
    // console.log('input event fired', inputval);

    let notecards = document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(function(element){
        let cardtxt =  element.getElementsByTagName("p")[0].innerText;
         if(cardtxt.includes(inputval)){
             element.style.display = "block";
         }
         else{
            element.style.display = "none";
         }
        
        
        
        // console.log(cardtxt);

    })
})