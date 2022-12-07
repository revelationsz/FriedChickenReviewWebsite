function outOfDarkMode(){ //into light
    console.log("into light")
    document.body.style.backgroundColor =  "rgb(255 255 255)";
    document.getElementById("header").style.backgroundColor = "rgba(224, 190, 36, 0.541)"
    document.getElementById("footer").style.backgroundColor = "rgba(224, 190, 36, 0.541)"
    if(document.getElementById("title") != null) 
        document.getElementById("title").style.backgroundImage = "url('fk2.jpg')"
    if(document.getElementById("introText") != null) 
        document.getElementById("introText").style.color = "rgb(0, 0, 0)"
    if(document.getElementById("home").classList[0] == "dark"){
        const darkMode = document.getElementsByClassName("dark")
        const len = darkMode.length
        for(var i = 0; i < len; i++){
            darkMode[0].classList.replace("dark", "light")
        }
    }
    if(document.getElementById("review") !== null){
        if(document.getElementById("review").classList[0] == "backgroundDark"){
            const darkModeListings = document.getElementsByClassName("backgroundDark")
            const len = darkModeListings.length
            for(var i = 0; i < len; i++){
                darkModeListings[0].classList.replace("backgroundDark", "backgroundLight")
            }
        }
    }
    if(document.getElementById("restrauntInfoFull") !== null){
        document.getElementById("restrauntInfoFull").classList.replace("fullInfoDark", "fullInfoLight")
        document.getElementById("popup").classList.replace("closePopUpDark","closePopUpLight")
    }

    const lightModeListings = document.getElementsByClassName("backgroundDark")
    const len = lightModeListings.length
    for(var i = 0; i < len; i++){
            lightModeListings[0].classList.replace("backgroundDark", "backgroundLight")
    }
    const lightModeSelections = document.getElementsByClassName("selectionDark")
    const lenn = lightModeSelections.length
    for(var i = 0; i < lenn; i++){
        lightModeSelections[0].classList.replace("selectionDark", "selectionLight")
    }

}

function intoDarkMode(){ //into dark
    console.log("into dark")
    document.body.style.backgroundColor =  "rgba(5,4,2,255)";
    document.getElementById("header").style.backgroundColor = "rgb(164 105 44)"
    document.getElementById("footer").style.backgroundColor = "rgb(164 105 44)"

    if(document.getElementById("title") != null) 
        document.getElementById("title").style.backgroundImage = "url('fkDARK2.jpg')"

    if(document.getElementById("introText") != null) 
        document.getElementById("introText").style.color = "rgb(255, 255, 255)"

    if(document.getElementById("home").classList[0] == "light"){
        const lightMode = document.getElementsByClassName("light")
        const len = lightMode.length
        for(var i = 0; i < len; i++){
            lightMode[0].classList.replace("light", "dark")
        }
    }

    console.log(document.getElementsByClassName("light"))
    const lightModeListings = document.getElementsByClassName("backgroundLight")
    const len = lightModeListings.length
    for(var i = 0; i < len; i++){
            lightModeListings[0].classList.replace("backgroundLight", "backgroundDark")
    }

    if(document.getElementById("restrauntInfoFull") !== null){
        document.getElementById("restrauntInfoFull").classList.replace("fullInfoLight", "fullInfoDark")
        document.getElementById("popup").classList.replace("closePopUpLight","closePopUpDark")
    }
    const darktModeSelections = document.getElementsByClassName("selectionLight")
    const lenn = darktModeSelections.length
    for(var i = 0; i < lenn; i++){
        darktModeSelections[0].classList.replace("selectionLight", "selectionDark")
    }

}