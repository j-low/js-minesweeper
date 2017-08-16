export default {
    drawBoard,
    clearSpot,
    showMine
}

function drawBoard(b) {
  var row = $('<tr>').addClass('row-0')
  var rowCount = 1

  $('.board table').append(row)

  b.spots.forEach((s, i) => {
    if ((i) % b.width === 0) {
      row = $('<tr>').addClass('row-' + rowCount)

      $('.board table').append(row)

      rowCount++
    }

    let td = $('<td>')
      .addClass('spot-' + i)
      .data({
        'index': s.index,
        'cleared': s.cleared,
        'mine': s.mine,
        'mineCount': s.mineCount
      })

    $('.row-' + (rowCount - 1)).append(td)
  })
}

function clearSpot(s) {}

function showMine(s) {}
