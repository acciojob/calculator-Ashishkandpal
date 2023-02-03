//your code here
let values = document.querySelectorAll(".digit");
let string= "";

//event listeners
Array.from(values).forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "c") {
            string = "";
            document.querySelector("input").value = string;
        }
        else if((string.charAt(string.length) == "+" || string.charAt(string.length) == "-" || string.charAt(string.length) == "*" || string.charAt(string.length) == "/") && 
                (e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "+" || e.target.innerHTML == "*" || e.target.innerHTML == "/")){
                    string = string.substring(0, string.length - 2);
                    console.log(string + " else if block");
                    string = string + e.target.innerHTML;
                    console.log(string);
                    document.querySelector("input").value = string;
                }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
        
    })
})