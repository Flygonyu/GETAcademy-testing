var navBar = document.getElementById('nav');
var contentDiv = document.getElementById('app');

    //model



    //view
    show();

    function show() {
        navBar.innerHTML = `<text id="name">Vanja S. C.</text>
        <button class="" onclick="exercises()">Exercises</button>
        <button class="" onclick="team()">Team Projects</button>
        <button class="" onclick="about()">About Me</button> 
        <a href="https://github.com/Flygonyu" target="_blank"><img id="gitLogo" src="Octicons-mark-github.svg"></a>
        `
        
        contentDiv.innerHTML = `
        <h1 id="welcome">Welcome!</h1>
        
        `
    }

    function showExercises() {
        navBar.innerHTML = `<text id="name">Vanja S. C.</text>
        <button class="clicked" onclick="exercises()">Exercises</button>
        <button class="" onclick="team()">Team Projects</button>
        <button class="" onclick="about()">About Me</button> 
        <a href="https://github.com/Flygonyu" target="_blank"><img id="gitLogo" src="Octicons-mark-github.svg"></a>
        `
        contentDiv.innerHTML = `
        <h2>Here are some exercises I've done in module 1:</h2>
        <div id="exer">
        <br><a href="https://flygonyu.github.io/GETAcademy-testing/onclickTest.html" target="_blank">My first onclick test!</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/dynamiskHTMLferdighet6.html" target="_blank">Dynamic HTML</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/variabelRegnestykke_ferdighet7.html" target="_blank">Math-y Variables</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/kodel%C3%A5s.html" target="_blank">Pin Code (WIP)</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/ludo.html" target="_blank">SVG Ludo board</a>
        <br> <a href="https://flygonyu.github.io/Oblig_modul1/Oblig_modul1_VanjaSC.html" target="_blank">Obligatory Exercise</a>
        
        </div>
        `
        //<br> <a href="" target="_blank">Placeholder</a>
    }

    function showTeam() {
        navBar.innerHTML = `<text id="name">Vanja S. C.</text>
        <button class="" onclick="exercises()">Exercises</button>
        <button class="clicked" onclick="team()">Team Projects</button>
        <button class="" onclick="about()">About Me</button> 
        <a href="https://github.com/Flygonyu" target="_blank"><img id="gitLogo" src="Octicons-mark-github.svg"></a>
        `
        contentDiv.innerHTML = `
        <h2>Our team's projects from module 1:</h2>
        <div id="team">
        <br> <a href="https://flygonyu.github.io/team2/Tic-tac-bigtoe.html" target="_blank">Tic-Tac-Toe</a>
        <br> <a href="https://flygonyu.github.io/Teamoppgave_uke3_team2/puslespill/index.html" target="_blank">Jigsaw Puzzle</a>
        <br> <a href="https://flygonyu.github.io/historie-team2/index.html" target="_blank">Wordchooser Story</a>
        <br> <a href="https://flygonyu.github.io/SteinSaksPapir_team2/index.html" target="_blank">Rock-Paper-Scissors</a>
        <br> <a href="https://flygonyu.github.io/morsecode/index.html" target="_blank">Morse Code Translator</a>
        <br> <a href="https://flygonyu.github.io/FightingGame/index.html" target="_blank">Fighting Game (WIP)</a>
        </div>
        `
    }

    function showAbout() {
        navBar.innerHTML = `<text id="name">Vanja S. C.</text>
        <button class="" onclick="exercises()">Exercises</button>
        <button class="" onclick="team()">Team Projects</button>
        <button class="clicked" onclick="about()">About Me</button> 
        <a href="https://github.com/Flygonyu" target="_blank"><img id="gitLogo" src="Octicons-mark-github.svg"></a>
        `
        contentDiv.innerHTML = `
        <div id="aboutWrapper">
        <h2 class="header">Hello! I'm Vanja.</h2> 
        <div class="intro" id="bio">
        <p>I'm 25, and I live in Sandefjord, Norway.</p>
        <p>My hobbies include reading, gaming, board games and Dungeons & Dragons.</p>
        <p class="blurb">I've wanted to learn coding for a while, but the thought of "not being good enough" held me back. 
        <br>I'm so glad I decided to try 
        <br>anyway, because it's been 
        <br>amazing so far! The problem 
        <br>solving, the frustrations, the 
        <br>teamwork, the feeling of accomplishment when 
        <br>everything falls into place - 
        <br>it's been so much fun.</p>
        <p class="blurb">I can't wait to see what the 
        <br>future brings :)</p>
        </div>
        <div class="picture"><img id="me" src="profilepic.jpg"></div>
        <div class="game"><h3>Gaming</h3>
        <p>I mostly play indie games and RPGs. I love getting every achievement in games, and I'll spend hours making sure I've completed everything!
        I love lists, and I'll sometimes plan my playthroughs beforehand, trying to find a way I can complete everything faster.</p>
        <p>I play on PC, PlayStation and Nintendo devices.</p>
        <p>I would love to work in game development at some point!</div>
        </div>
        `
    }

    //controller
    function exercises(){
    
    show();
    showExercises()
    }

    function team() {
        
        show();
        showTeam();
    }

    function about(){
        
        show();
        showAbout();
    }