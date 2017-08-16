import { Board } from './board.js'
import drawBoard from './drawBoard.js'
import $ from 'jQuery'

$(document).ready(() => {
  var board

  /*** EVENT BINDINGS ***/
  $('.settings button').click((e) => {
    start(board)
  })

  $('.board').click((e) => {
    clickSpot(e.target)
  })


  /*** UTILS & EVENT HANDLERS ***/
  function start(b) {
    var level = $('.settings select').val()
    $('.settings').addClass('hidden')
    $('.board').removeClass('hidden')
    b = newGameBoard(b, level)
    drawBoard.drawBoard(b)
  }

  /**
   * Create new gameboard based on level specified in dropdown
   */
  function newGameBoard(b, level) {
    if (level === 'medium') b = new Board(15, 15, 30)
    else if (level === 'hard') b = new Board(20, 20, 75)
    else b = new Board(10, 10, 15)

    return b
  }

  /**
   * Click designated spot on board
   */
  function clickSpot(s) {
    if (s.data.mine) board.lost = true
    else {
      let neighbors = board.neightbors(s.index)
      neighbors.foraEach((n) => {
        clearSpot(n)
      })
    }

    return
  }

  /**
   * Recursively clears & labels neighboring spots
   */
  function clearSpot(s) {
    if (!s.data.mine) {
      s.data.cleared = true
      s.data.mineCount = board.mineCount(s.data.index)
      drawBoard.clearSpot(s)

      let neighbors = board.neightbors(s.index)
      neighbors.forEach((n) => {
        clearSpot(n)
      })
    }

    return
  }
})
