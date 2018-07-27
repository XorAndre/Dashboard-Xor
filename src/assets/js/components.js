function toggle_action() {
    const element = document.getElementById("Toggle");
    if (element.classList) { 
        element.classList.toggle("reveal");
    } else {
        const classes = element.className.split(" ");
        const i = classes.indexOf("reveal");

        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("reveal");
            element.className = classes.join(" "); 
    }
}