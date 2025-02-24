const cds = []

const table = document.querySelector("table");

function updateTableVisibility() {
    if (cds.length === 0) {
        table.classList.add("remove")
    } else {
        table.classList.remove("remove")
    }
}


document.getElementById('cd-form').addEventListener("submit", (e) =>{
    e.preventDefault();

    const author = document.getElementById("auth").value;
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;

    if (author && title && year){

        cds.push({author, title, year});

        console.log(cds);

        const fragment = document.createDocumentFragment();

        const row = document.getElementById('cd-row').content.cloneNode(true);

        row.querySelector('.author').innerText = author;
        row.querySelector('.title').innerText = title;
        row.querySelector('.year').innerText = year;

        const deleteButton = row.querySelector(".delete-btn");

        deleteButton.addEventListener("click", function() {
                    
        const index = cds.findIndex(b => b.author === author && b.title === title && b.year === year);
        cds.splice(index, 1); 
                    
                    
        this.closest("tr").remove();
        console.log("Deleted cd: ",`${author}, ${title}, ${year}`)
        console.log("Updated cd array:", cds)
        });


        fragment. appendChild(row);

        document.getElementById('cd-table').appendChild(fragment);

        updateTableVisibility();

        // document.getElementById('cd-form').reset();
    }

})

updateTableVisibility();