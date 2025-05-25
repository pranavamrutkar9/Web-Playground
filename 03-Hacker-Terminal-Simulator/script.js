let x = document.body.querySelector(".content")
let y = document.body.querySelector(".box")
let i = 0;
time = ((Math.ceil(Math.random() * 7)) * 1000)

obj = ["Initializing Hacking", "Reading your files", "Password Files Detected", "Retrieving", "Connecting To Server", "Sending", "Cleaning Up"]


// console.log(obj.length)
async function displayMsg(i) {
    return new Promise((resolve, reject) => {
        let msg = obj[i]
        // setTimeout(() => {     
        //     time = ((Math.ceil(Math.random()*7))*1000)       
        //     x.innerHTML = msg+"("+time+")";
        //     resolve(55);
        // }, time);


        setTimeout(() => {
            time = ((Math.ceil(Math.random() * 7)) * 1000)
            x.innerHTML = msg + "(" + time + ")";
            
            let dots = ['', '.', '..', '...', '....', '.....'];
            let index = 0;

            let dotInterval = setInterval(() => {
                x.innerHTML = msg + dots[index] + "(" + time + ")";
                index++
                if (index>=dots.length) {
                    clearInterval(dotInterval)
                    resolve()
                }
            }, 100);
        }, time);
    })
}

async function main(i) {
    while (i < obj.length) {
        await displayMsg(i)
        i = i + 1;
    }
    const done = document.createElement("p");
    done.textContent = "✔ Hacking Complete";
    done.style.color = "greenyellow";
    done.style.fontWeight = "bold";
    x.appendChild(done);
}

main(i)