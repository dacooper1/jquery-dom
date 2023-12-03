
let uniqueId = 0

$('form').on('submit', function(e){
    e.preventDefault();
    let movie = $('#title').val()
    let rating = $('#rating').val()
    
    const movieData = {movie, rating, uniqueId
    };

    uniqueId ++;

    const dataToAppend = dataForTable(movieData)

    $('tbody').append(dataToAppend)
    $('form').trigger('reset')

    })

$('tbody').on('click', '.delete', function(e){

$(e.target).closest('tr').remove()

})


function dataForTable(movieData){
    return `
    <tr>
      <td>${movieData.movie}</td>
      <td>${movieData.rating}</td>
      <td>
        <button class="delete" id=${movieData.uniqueId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}