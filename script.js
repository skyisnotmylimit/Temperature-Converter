let ev = document.querySelector(".btn")
ev.addEventListener("click",()=>{
    let inTemp = document.getElementById("inText").value
    let ans = 0
    let radio = document.getElementsByName("flexRadioDefault")
    if(radio[0].checked)
    {
        ans = (inTemp - 32) * 0.5556
        document.getElementById("outText").value = ans + "°C"
    }
    else
    {
        ans = (inTemp * 1.8) + 32
        document.getElementById("outText").value = ans + "°F"
    }
})