let allbtn = document.querySelectorAll(".btns");
let value= document.querySelector("#value")
let count = 0;


allbtn.forEach(function (name) {
    
    name.addEventListener("click", function (e)
    {
        let style = e.currentTarget.classList;
        if (style.contains("decrease"))
        {
            count--;
            if (count < 0)
            {
                value.style.color = "red";
            }
        }
        else if (style.contains("increase"))
        {
            count++;
            if (count > 0) {
                value.style.color = "green";
            }
        }
            else
            {
                count = 0;
               
                    value.style.color = "black";
                
            }
            value.textContent = count;
        }
        )


});


