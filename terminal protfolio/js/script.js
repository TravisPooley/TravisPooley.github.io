const input = document.getElementById('input');
const history = document.getElementById('history');
// const blinky = document.getElementById("blinky")
const files = {"readme.txt":`
    
                                                         
<p> _ _ _ _____ __    _____ _____ _____ _____    _____ _____                                    </p>
<p>| | | |   __|  |  |     |     |     |   __|  |_   _|     |                                  </p> 
<p>| | | |   __|  |__|   --|  |  | | | |   __|    | | |  |  |                                  </p> 
<p>|_____|_____|_____|_____|_____|_|_|_|_____|    |_| |_____|                                  </p> 
<p>                                                                                            </p>
<p>                                                                                            </p>
<p> _____ _____ _____ _____ _____ _____ _____ _____ _____ __    _____ __ __   _____ _____ _____ </p>
<p>|_   _| __  |  _  |  |  |     |   __|  _  |     |     |  |  |   __|  |  | |     |     |     |</p>
<p> | |  |    -|     |  |  |-   -|__   |   __|  |  |  |  |  |__|   __|_   _|_|   --|  |  | | | |</p>
<p> |_|  |__|__|__|__|\\___/|_____|_____|__|  |_____|_____|_____|_____| |_| |_|_____|_____|_|_|_|</p>
<p>                                                                                            </p>
<p>readme.txt test...</p>

 `, "about.txt":"My name is Travis Pooley, I'm a software engineer from Adelaide, Australia."};

// add codepen
const directories = {"FlindersFinder":"https://travispooley.com/VEED2201/", "LinkedIn":"https://www.linkedin.com/in/travispooley/", "Twitter":"https://twitter.com/TravisPooley"};

let commandHistory = [];
let historyNumber = -1;

const STARTUP_COMMANDS = ["cat readme.txt", "ls", ""];
const STARTUP_INPUT = STARTUP_COMMANDS.join(String.fromCharCode(13))

let currentChar = 0;
const interval = setInterval(function() {
    if (STARTUP_INPUT[currentChar] == "\r") Enter();
    else input.value = input.value + STARTUP_INPUT[currentChar];
    currentChar++;
    if (currentChar == STARTUP_INPUT.length) clearInterval(interval);
}, 100);



// auto focus on input
function focus() {
    document.getElementById("input").focus()
}

function handleCommand(command) {
    const line = document.createElement('p');
    console.log(command)
    // sanitise input
    const commandText = document.createElement('span');
    commandText.innerText = command;
    line.innerHTML = '<span style="color: #7fff7f;">Guest@TravisPooley.com</span>:<span style="color: #3391ff;">~</span>$';
    line.appendChild(commandText);
    history.appendChild(line);

    // if command is not blank add to the history of commands
    if (command != "") {
        commandHistory.push(command);
    }

    if (command == "clear") {
        history.innerHTML = "";
    }
    else if (command == "ls") {
        let ls = document.createElement('p');
        for (directory in directories) {
            let directoryName = document.createElement('span');
            directoryName.setAttribute('class', "lsDisplay")
            directoryName.innerText = directory;
            ls.appendChild(directoryName);
        }
        for (file in files) {
            let fileName = document.createElement('span');
            fileName.setAttribute('class', "lsDisplay")
            fileName.style.color = "white";
            fileName.innerText = file;
            ls.appendChild(fileName);
        }
        history.appendChild(ls);
    }
    // man command

    else if (command == "reboot") {
        location.reload();
    }
    // reboot
    else if (command.split(" ")[0] == "cd") {
        if (Object.keys(directories).includes(command.split(" ")[1])) {
            window.open(directories[command.split(" ")[1]], '_blank').focus();
            let redirect = document.createElement('p');
            redirect.innerHTML = "attempting to open: <a href='"+(directories[command.split(" ")[1]])+"'>"+(directories[command.split(" ")[1]])+"<a>";
            history.appendChild(redirect);
        }
    }
    else if (command.split(" ")[0] == "cat") {
        if (Object.keys(files).includes(command.split(" ")[1])) {
            let cat = document.createElement('p');
            cat.innerHTML = files[command.split(" ")[1]];
            history.appendChild(cat);
        }
        else {
            let unknownFile = document.createElement('p');
            unknownFile.innerText = command.split(" ")[0]+": "+command.split(" ")[1]+": No such file or directory";
            history.appendChild(unknownFile);
        }
    }
    else if (command != "") {
        const unknownCommand = document.createElement('p');
        unknownCommand.innerText = command+": command not found";
        history.appendChild(unknownCommand);
    }
    console.log(command.split(" ")[0])
}

function Enter() {
    handleCommand(input.value);
    input.value = '';
    historyNumber = -1;
}
input.addEventListener("keyup", function(event) {
    console.log(event.target.selectionStart)
    // blinky.style.left = event.target.selectionStart;

    if (event.key === "Enter") {
        Enter();
    }
    else if (event.key === "ArrowUp") {
        // console.log(event.key)
        if (historyNumber < commandHistory.length) historyNumber++;
        input.value = commandHistory[(commandHistory.length-1) - historyNumber] !== undefined ? commandHistory[(commandHistory.length-1) - historyNumber] : "";
    }
    else if (event.key === "ArrowDown") {
        // console.log(event.key)
        if (historyNumber > -1) historyNumber--;
        input.value = commandHistory[(commandHistory.length-1) - historyNumber] !== undefined ? commandHistory[(commandHistory.length-1) - historyNumber] : "";
    }
    else if (event.key) {
        // console.log(event.key)
    }
});