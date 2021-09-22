var navBar = document.getElementById('nav');
var contentDiv = document.getElementById('app');

    //model
    let clicked = '';



    //view
        
    show();
    // showExercises();
    function show() {
        navBar.innerHTML = `<text id="welcome">Welcome!</text>
        <button class="${clicked}" onclick="exercises()">Exercises</button>
        <button class="${clicked}" onclick="team()">Team Projects</button>
        <button class="${clicked}" onclick="about()">About Me</button> 
        `
        
        contentDiv.innerHTML = `
        
        
        `
    }

    function showExercises() {
        contentDiv.innerHTML = `
        Here are some exercises I've done in module 1:
        <br><a href="https://flygonyu.github.io/GETAcademy-testing/onclickTest.html" target="_blank">My first onclick test!</a>
        <br> <a href="https://flygonyu.github.io/Oblig_modul1/Oblig_modul1_VanjaSC.html" target="_blank">Obligatory Exercise</a>
        <br> <a href="" target="_blank">Placeholder</a>
        <br> <a href="" target="_blank">Placeholder</a>
        <br> <a href="" target="_blank">Placeholder</a>
        <br> <a href="" target="_blank">Placeholder</a>
        <br> <a href="" target="_blank">Placeholder</a>
        `
        
    }

    function showTeam() {
        contentDiv.innerHTML = `
        Our team's projects from module 1
        `
    }

    function showAbout() {
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
        showTeam();
    }

    function about(){
        showAbout();
    }