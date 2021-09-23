var navBar = document.getElementById('nav');
var contentDiv = document.getElementById('app');

    //model
    let clicked = '';



    //view
        
    show();
    // showExercises();
    function show() {
        navBar.innerHTML = `<text id="welcome">Welcome!</text>
        <button class="" onclick="exercises()">Exercises</button>
        <button class="" onclick="team()">Team Projects</button>
        <button class="" onclick="about()">About Me</button> 
        `
        
        contentDiv.innerHTML = `
        
        
        `
    }

    function showExercises() {
        navBar.innerHTML = `<text id="welcome">Welcome!</text>
        <button class="clicked" onclick="exercises()">Exercises</button>
        <button class="" onclick="team()">Team Projects</button>
        <button class="" onclick="about()">About Me</button> 
        `
        contentDiv.innerHTML = `
        Here are some exercises I've done in module 1:
        <br><a href="https://flygonyu.github.io/GETAcademy-testing/onclickTest.html" target="_blank">My first onclick test!</a>
        <br> <a href="https://flygonyu.github.io/Oblig_modul1/Oblig_modul1_VanjaSC.html" target="_blank">Obligatory Exercise</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/dynamiskHTMLferdighet6.html" target="_blank">Dynamic HTML</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/variabelRegnestykke_ferdighet7.html" target="_blank">Math-y Variables</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/kodel%C3%A5s.html" target="_blank">Pin Code (wip)</a>
        <br> <a href="https://flygonyu.github.io/GETAcademy-testing/ludo.html" target="_blank">SVG Ludo</a>
        <br> <a href="" target="_blank">Placeholder</a>
        <br> <a href="" target="_blank">Placeholder</a>
        <br> <a href="" target="_blank">Placeholder</a>
        <br> <a href="" target="_blank">Placeholder</a>
        `
        
    }

    function showTeam() {
        navBar.innerHTML = `<text id="welcome">Welcome!</text>
        <button class="" onclick="exercises()">Exercises</button>
        <button class="clicked" onclick="team()">Team Projects</button>
        <button class="" onclick="about()">About Me</button> 
        `
        contentDiv.innerHTML = `
        Our team's projects from module 1:
        <br> <a href="https://flygonyu.github.io/team2/Tic-tac-bigtoe.html" target="_blank">Tic-Tac-Toe</a>
        <br> <a href="https://flygonyu.github.io/Teamoppgave_uke3_team2/puslespill/index.html" target="_blank">Jigsaw Puzzle</a>
        <br> <a href="https://flygonyu.github.io/historie-team2/index.html" target="_blank">Wordchooser Story</a>
        <br> <a href="https://flygonyu.github.io/SteinSaksPapir_team2/index.html" target="_blank">Rock-Paper-Scissors</a>
        <br> <a href="https://flygonyu.github.io/morsecode/index.html" target="_blank">Morse Code Translator</a>
        `
    }

    function showAbout() {
        navBar.innerHTML = `<text id="welcome">Welcome!</text>
        <button class="" onclick="exercises()">Exercises</button>
        <button class="" onclick="team()">Team Projects</button>
        <button class="clicked" onclick="about()">About Me</button> 
        `
        contentDiv.innerHTML = `
        Hi! I'm Vanja. 25 yrs old from Sandefjord, NO.
        `
    }

    //controller
    function exercises(){
    clicked = 'clicked';
    show();
    showExercises()
    }

    function team() {
        clicked = 'clicked';
        show();
        showTeam();
    }

    function about(){
        clicked = 'clicked';
        show();
        showAbout();
    }