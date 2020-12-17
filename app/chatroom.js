// because of the CDN we have in index.html the io Object is glabally available in the Browser
const socket = io('ws://localhost:8080')

// listen to events emited by the server
socket.on('message', message => {
  // add a list item to the ul
  const listItem = document.createElement('LI')
  listItem.innerHTML = message

  const list = document.querySelector('.list')
  list.appendChild(listItem)
})

// logic for sending a message
const button = document.querySelector('button')
button.addEventListener('click', () => {
  // grab the value in the text
  const text = document.querySelector('input').value

  // check that the input value is not empty, before sending messahe
  if (text.trim()) {
    socket.emit('message', text)

    // clear the input text
    document.querySelector('input').value = ''
  } else {
    console.log('cannot send empty message')
  }
})
