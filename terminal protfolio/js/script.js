const input = document.getElementById('input');
const history = document.getElementById('history');
const files = {"readme.txt":"test readme file...", "about.txt":"My name is Travis Pooley, I'm a software engineer from Adelaide, Australia."};

// add codepen
const directories = {"FlindersFinder":"https://travispooley.com/VEED2201/", "LinkedIn":"https://www.linkedin.com/in/travispooley/", "Twitter":"https://twitter.com/TravisPooley"};

let commandHistory = [];
let historyNumber = -1;

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


input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        handleCommand(input.value);
        input.value = '';
        historyNumber = -1;
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