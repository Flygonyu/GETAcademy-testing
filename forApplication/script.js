var contentDiv = document.getElementById('app');

    //model


    //view
    show();
    function show() {
        contentDiv.innerHTML = `
        
        
        `


    }

    function showExercises() {
        contentDiv.innerHTML = `
        Div exercises from module 1!
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

    showExercises()
    }

    function team() {
        showTeam();
    }

    function about(){
        showAbout();
    }