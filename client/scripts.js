const socket = io('http://localhost:3000');

socket.on("messageFromServer", (msg) => {
    createMessageBallon('you', msg)
});

function load(){
    document.getElementById('user-input').addEventListener('submit', function(e){
        e.preventDefault()
        createMessageBallon('me',e.target[0].value)
        sendMessage(e.target[0].value)
    })
}

function sendMessage(msg){
    socket.emit('newMessage', msg)
}

function createMessageBallon(who, message){
    let msgDiv = document.createElement('div')
    let divClass = ''

    switch (who){
        case 'me':
            divClass = 'my-message ballon';
            break;
        case 'you':
            divClass = 'your-message ballon';
            break;
    }

    msgDiv.setAttribute('class', divClass)
    msgDiv.innerText = message

    document.querySelector('#chat-container > div.messages').appendChild(msgDiv)
}
