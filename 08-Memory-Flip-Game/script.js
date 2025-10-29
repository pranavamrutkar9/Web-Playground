    const board = document.getElementById("game-board")
    const status = document.getElementById("status")
    const restart = document.getElementById("restart")

    const symbols = ['👽','🐱','🐯','🦁','🐮','🐶','🦄','🐴','👽','🐱','🐯','🦁','🐮','🐶','🦄','🐴']

        let firstCard = null;
        let secondCard = null;
        let lockBoard = false;
        let matches = 0;

    function startGame(){
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        matches = 0;
        board.innerHTML = '';  // Clear the board
        status.textContent = 'Find all matches';
        restart.style.visibility = 'hidden';
        shuffleSymbols = symbols.sort(()=> Math.random()-0.5)


        shuffleSymbols.forEach(symbol => {
            let card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front"></div>
                    <div class="card-back">${symbol}</div>
                </div>
            `

            card.addEventListener('click', ()=> flipcard(card))
            board.appendChild(card)
        });
    }

    function flipcard(card){
        if(lockBoard || card==firstCard){
            return
        }
        card.classList.add('flip')

        if(!firstCard){
            firstCard = card
        }
        else{
            secondCard = card
            checkMatch()
        }
    }


    function checkMatch(){
        const isMatch = firstCard.querySelector('.card-back').textContent === secondCard.querySelector('.card-back').textContent

        if (isMatch) {
            disableCards()
            matches++;

            let maxScore = parseInt(symbols.length/2)
            if(matches==maxScore){
                status.textContent='Woah!! You Found all pairs🥳'
                restart.style.visibility='visible'
                return
            }
        }
        else{
            unflipCards()
        }
    }

    function disableCards(){
        firstCard.removeEventListener('click', ()=> flipcard(card))
        secondCard.removeEventListener('click', ()=> flipcard(card))
        resetBoard()
    }
    function unflipCards(){
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            resetBoard()
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false]
    }

    restart.addEventListener('click', startGame)

    startGame()