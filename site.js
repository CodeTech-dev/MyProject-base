let toggleIcon = document.getElementById("icon");
let Theme = document.querySelector("body");

function toggleTheme(){
    Theme.classList.toggle("dark-theme")
    if(Theme.classList.contains("dark-theme")){
        toggleIcon.src = "sun.png"  
        localStorage.setItem("theme", "dark")
    }else{
        toggleIcon.src = "moon.png"
        localStorage.setItem("theme", "light")
    }
}

function saveUserTheme(){
    const userTheme = localStorage.getItem("theme")
    if(userTheme === "dark"){
        Theme.classList.add("dark-theme");
        toggleIcon.src = "sun.png";
    }else{
        Theme.classList.remove("dark-theme");
        toggleIcon.src = "moon.png";
    }
}
saveUserTheme()


toggleIcon.addEventListener("click", function(){
    toggleTheme()
})

