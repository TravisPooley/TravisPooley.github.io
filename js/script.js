// nothing to see here :))































// type based on url param

// lower case for cd

// make help command
// sudo rm -rf /


// echo

// sumfetch is a summary
// add email


// make function for each command so that it can be done with a switch

// make aliases work
// repo -> cd github
// help -> cat help.txt


// add some form of privilage escalation


// make proper directory system

// projects directory


// about banner cd date donate echo emacs
// email github gui help linkedin ls nvim
// projects quote readme resume sudo sumfetch theme
// vi vim whoami 

// [tab]: trigger completion.
// [ctrl+l]/clear: clear terminal.

// Type 'sumfetch' to display summary.



// finish tab to autocomplete


const input = document.getElementById('input');
const history = document.getElementById('history');
// const blinky = document.getElementById("blinky")
const socials = {
    "LinkedIn": "https://www.linkedin.com/in/travispooley/",
    "Twitter": "https://twitter.com/TravisPooley",
    "GitHub": "https://github.com/TravisPooley/",
    "CodePen": "https://codepen.io/TravisPooley/",
    "StackOverflow": "https://stackoverflow.com/users/9627710/travispooley",
}
const files = {"readme.txt":`
    

  __________  ___ _    ___________ ____  ____  ____  __    ________  __
 /_  __/ __ \\/   | |  / /  _/ ___// __ \\/ __ \\/ __ \\/ /   / ____/\\ \\/ /
  / / / /_/ / /| | | / // / \\__ \\/ /_/ / / / / / / / /   / __/    \\  / 
 / / / _, _/ ___ | |/ // / ___/ / ____/ /_/ / /_/ / /___/ /___    / /  
/_/ /_/ |_/_/  |_|___/___//____/_/    \\____/\\____/_____/_____/   /_/   
                                                                      


Travis Pooley portfolio v2.0.0 🚧 Work In Progress 🚧

    Type '<a href='javascript:;' onclick='handleCommand("cat help.txt")'>cat help</a>' for a list of commands.

    --

    This website is open-source, type '<a href='javascript:;' onclick='handleCommand("cd repo")'>cd repo</a>' to checkout the repository.

    --

 `, 

 "travispooley.txt": `Here is some social links:`+Object.keys(socials).map((social) => {
    return `<p><span class="special">${social}</span>: <a href="${socials[social]}">${socials[social]}</a></p>`
}).join(""),
 "about.txt":"My name is Travis Pooley, I'm a software engineer from Adelaide, Australia.",
"help.txt":`
Welcome! Here are all the available commands:

I'm still working on that
`
};

 let commandHistory = [];
 let historyNumber = -1;

const COMMANDS = {
    "help": "",
    "clear": "",
    "ls": "",
    "cd": "",
    "reboot": "",
    "repo": "",
    "email": "",
    "sumfetch": "",
    "echo": "",
    "cat": "",
}

// add codepen
const DIRECTORIES = {"repo": "https://github.com/TravisPooley/TravisPooley.github.io", "FlindersFinder":"https://travispooley.com/VEED2201/", "LinkedIn":"https://www.linkedin.com/in/travispooley/", "Twitter":"https://twitter.com/TravisPooley", "GitHub":"https://github.com/TravisPooley/"};


const ALIASES = {"repo:":"cd repo", "help":"cat help.txt", }



const STARTUP_COMMANDS = ["cat readme.txt", "cat travispooley.txt", "ls",  ""];
const STARTUP_INPUT = STARTUP_COMMANDS.join(String.fromCharCode(13))

type(STARTUP_INPUT, 100);

function type(text, speed) {
    
    let currentChar = 0;
    const interval = setInterval(function() {
        if (text[currentChar] == "\r") Enter();
        else input.value = input.value + text[currentChar];
        currentChar++;
        if (currentChar == text.length) {
            input.disabled = false;
            focus();
            clearInterval(interval);
        }
    }, speed);
}

// auto focus on input
function focus() {
    document.getElementById("input").focus()
}

function handleCommand(command) {
    // transform command to lowercase for case insensitivity
    command = command.toLowerCase();

    const line = document.createElement('p');
    // console.log(command)

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
        for (directory in DIRECTORIES) {
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

    // reboot
    else if (command == "reboot") {
        location.reload();
    }
    else if (command.split(" ")[0] == "cd") {
        if (Object.keys(DIRECTORIES).includes(command.split(" ")[1])) {
            window.open(DIRECTORIES[command.split(" ")[1]], '_blank').focus();
            let redirect = document.createElement('p');
            redirect.innerHTML = "attempting to open: <a href='"+(DIRECTORIES[command.split(" ")[1]])+"'>"+(DIRECTORIES[command.split(" ")[1]])+"<a>";
            history.appendChild(redirect);
        }
    }
    else if (command.split(" ")[0] == "echo") {
        let echo = document.createElement('p');
        echo.innerText = command.split(" ").slice(1).join(" ");
        history.appendChild(echo);
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
    // else if (command == "sumfetch") {
    // }
    // else if (command == "email") {
    // }
    else if (command == "sudo rm -rf /") {
        let sudo = document.createElement('p');
        sudo.innerHTML = "Sorry, I can't let you do that.";
        history.appendChild(sudo);
    }
    else if (Object.keys(ALIASES).includes(command)) {
        handleCommand(ALIASES[command]);
        console.log(ALIASES[command])
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
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();
        // attempt to autocomplete compare current input against COMMANDS
        let currentInput = input.value;
        let possibleCommands = [];
        for (command in COMMANDS) {
            if (command.startsWith(currentInput)) possibleCommands.push(command);
        }
        if (possibleCommands.length == 1) {
            input.value = possibleCommands[0];
        }
        
    }
});
