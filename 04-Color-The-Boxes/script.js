document.querySelectorAll(".box").forEach(e=>{
    r = Math.floor((Math.random())*256);
    g = Math.floor((Math.random())*256);
    b = Math.floor((Math.random())*256);
    e.style.backgroundColor= `rgb(${r},${g},${b})`;
})