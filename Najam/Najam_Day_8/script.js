function autoFocus () {
  let a = document.getElementById('input-field')
  a.focus()
}

function typeA () {
  document.getElementById('input-field').value += 'A'
  autoFocus()
}

function typeB () {
  document.getElementById('input-field').value += 'B'
  autoFocus()
}

function typeC () {
  document.getElementById('input-field').value += 'C'
  autoFocus()
}

function typeD () {
  document.getElementById('input-field').value += 'D'
  autoFocus()
}

function typeE () {
  document.getElementById('input-field').value += 'E'
  autoFocus()
}

function typeF () {
  document.getElementById('input-field').value += 'F'
  autoFocus()
}

function typeG () {
  document.getElementById('input-field').value += 'G'
  autoFocus()
}

function typeH () {
  document.getElementById('input-field').value += 'H'
  autoFocus()
}

function typeI () {
  document.getElementById('input-field').value += 'I'
  autoFocus()
}

function typeJ () {
  document.getElementById('input-field').value += 'J'
  autoFocus()
}

function typeK () {
  document.getElementById('input-field').value += 'K'
  autoFocus()
}

function typeL () {
  document.getElementById('input-field').value += 'L'
  autoFocus()
}

function typeM () {
  document.getElementById('input-field').value += 'M'
  autoFocus()
}

function typeN () {
  document.getElementById('input-field').value += 'N'
  autoFocus()
}

function typeO () {
  document.getElementById('input-field').value += 'O'
  autoFocus()
}

function typeP () {
  document.getElementById('input-field').value += 'P'
  autoFocus()
}

function typeQ () {
  document.getElementById('input-field').value += 'Q'
  autoFocus()
}

function typeR () {
  document.getElementById('input-field').value += 'R'
  autoFocus()
}

function typeS () {
  document.getElementById('input-field').value += 'S'
  autoFocus()
}

function typeT () {
  document.getElementById('input-field').value += 'T'
  autoFocus()
}

function typeU () {
  document.getElementById('input-field').value += 'U'
  autoFocus()
}

function typeV () {
  document.getElementById('input-field').value += 'V'
  autoFocus()
}

function typeW () {
  document.getElementById('input-field').value += 'W'
  autoFocus()
}

function typeX () {
  document.getElementById('input-field').value += 'X'
  autoFocus()
}

function typeY () {
  document.getElementById('input-field').value += 'Y'
  autoFocus()
}

function typeZ () {
  document.getElementById('input-field').value += 'Z'
  autoFocus()
}

function space () {
  document.getElementById('space').value += ' '
  autoFocus()
}

function enter () {
  if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    var msg = new SpeechSynthesisUtterance()
    msg.text = document.getElementById('input-field').value
    window.speechSynthesis.speak(msg)
    autoFocus()
  } else {
    // Speech Synthesis Not Supported 😣
    window.alert("Sorry, your browser doesn't support text to speech!")
  }
}

function del () {
  let a = document.getElementById('input-field').value
  a = a.substr(0, a.length - 1)
  document.getElementById('input-field').value = a
  autoFocus()
}
