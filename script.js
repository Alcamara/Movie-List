
$(document).ready(readyNow)


let numMovie = 0;

function readyNow(){
    $('#submit-button').on('click',onSubmit)
    $('#movie-table').on('click','.flag-btn',turnRowRed)
    $('#movie-table').on('click','.delete-btn', deleteRow)
}

function onSubmit(){
   let movieName = $('#movie-name').val()
   let movieGenre = $('#movie-genre').val()
   let movieRelease = $('#year-release').val()

   console.log(movieName,movieGenre,movieRelease);

   $('#movie-table').append(`
   <tr>
                <td>${movieName}</td>
                <td>${movieGenre}</td>
                <td>${movieRelease}</td>
                <td class="flag-btn">🚩</td>
                <td class="delete-btn">❌ </td>
            </tr>
   `)

   numMovie++

   $('#movie-count').text(numMovie)

   $('#movie-name').val('')
   $('#year-release').val('')
}

function turnRowRed(){
    $(this).parent().css({
        'background-color':'red'
    })
}

function deleteRow() {
   let row =  $(this).parent()
   console.log(row);

   let titleCell = $(this).prev().prev().prev().prev().text()

   console.log(titleCell);
   
   alert(`You just remove ${titleCell} from Movie list`)
   row.remove()

   numMovie--

   $('#movie-count').text(numMovie)

    
}