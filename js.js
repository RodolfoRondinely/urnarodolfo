const teclado =  document.querySelector('.teclado')
const screen =  document.querySelector('.screen')
const showDigitedNumber = document.querySelector('.showDigitedNumber')

const behaviorTelacdo =  document.querySelector('.behaviorTelacdo')
const showCandidatos = document.querySelector('.showCandidatos')
const showNumbersDigited  =document.querySelector('.showNumbersDigited')

const white = document.querySelector('.white')
const eraser = document.querySelector('.eraser')
const confirm = document.querySelector('.confirm')

const audioNumber = document.querySelector('#a')
const audioConfirm = document.querySelector('#b')
const audioCorrige = document.querySelector('#d')

let numberCandidato =[]
let voteCandidatoOne  = 0
let voteCandidatoTwo  = 0
let voteAnulate = 0


const blockTeclado = ()=>{
    if( showDigitedNumber.children.length %2 ===0  ){
        behaviorTelacdo.style.display='block'
    }
}

const addNumberDigitedInScreen =()=>{

    showDigitedNumber.innerHTML+=`
    <div class="digitedNumber">
    ${event.target.textContent}
    </div>
    `
    audioNumber.play()


}

const addNumberToArray = ()=>{
    numberCandidato.push(Number(event.target.textContent))
}

function countVotes(numberCandidato) {
  let voteCandidateOne = 0;
  let voteCandidateTwo = 0;

  for (let i = 0; i < numberCandidato.length; i++) {
    if (numberCandidato[i] === 1) {
      voteCandidateOne++;
    } else if (numberCandidato[i] === 2) {
      voteCandidateTwo++;
    }
  }

  return { candidateOne: voteCandidateOne, candidateTwo: voteCandidateTwo };
}

const votesLog = ()=>{
    console.log(numberCandidato);
    console.log(`
    CONTAGEM DE VOTOS :
    RODOLFO : TOTAL DE VOTOS = ${voteCandidatoOne}
    BONIEKY : TOTAL DE VOTOS = ${voteCandidatoTwo}
    BRANCOS OU NULOS : TOTAL DE VOTOS = ${voteAnulate}
    `);
    
}

const voteApuration = ()=>{
    const CandidateOne =  numberCandidato[0] === 3 && numberCandidato[1] === 8 
    const CandidateTwo =  numberCandidato[0] === 2 && numberCandidato[1] === 7
    const votesAnulate =   numberCandidato[0] !=3  && numberCandidato[1] != 8 || numberCandidato[0] !=2  && numberCandidato[1] != 7


    if(CandidateOne){
        voteCandidatoOne++
        return voteCandidatoOne
    }
    if(CandidateTwo){
        voteCandidatoTwo++
        return voteCandidatoTwo
    }
    if(votesAnulate){
        voteAnulate++
        return voteAnulate
    }

}

const showDataCandidato =()=>{
   screen.innerHTML=`
    <div class="showCandidatos">
    <h1> Presidente da República </h1>
            <div class="showNumbersDigited">
            <div class="showDigitedNumber">
                    <div class="digitedNumber">3</div>
                    </div>
                    <div class="showDigitedNumber ">
                    <div class="digitedNumber">8</div>
                    </div>
                    </div> 
    </div>
    <div class="fotoCandidato">
    <img src="https://media.licdn.com/dms/image/C4D03AQG_DWKK0oIuDw/profile-displayphoto-shrink_100_100/0/1625058261194?e=1681344000&v=beta&t=xCwPx-eI0ifuUMJTYExf88K7tmWX3hPS9coEuZCRLiM" alt="Rodolfo"></img> 
    <h2>Rodolfo Rondinely</h2>
    <p>Sócio Happynet  </p>
        </div>
    `
}


const showDataCandidato2 =() =>{
    screen.innerHTML=`
    <div class="showCandidatos">
    <h1> Presidente da República </h1>
    <div class="showNumbersDigited">
    <div class="showDigitedNumber">
    <div class="digitedNumber">2</div>
                </div>
                <div class="showDigitedNumber ">
                    <div class="digitedNumber">7</div>
                </div>
                </div> 
    </div>
    <div class="fotoCandidato">
            <img src="data:image/jpeg;base64,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" alt="Bonieky"></img> 
            <h2>Boniky Lacerda</h2>
            <p>Curso B7Web </p>
            </div>
            `
}

const escolheCandidato =()=>{
    const CandidateOne =  numberCandidato[0] === 3 && numberCandidato[1] === 8 
    const CandidateTwo =  numberCandidato[0] === 2 && numberCandidato[1] === 7 
      
    if(CandidateOne){
        showDataCandidato()
   }
    if(CandidateTwo){
        showDataCandidato2()
}


}




    teclado.addEventListener('click', event =>{
        /* ADICIONA NUMERO DIGITADO A TELA */
    if(event.target.dataset.value === 'numbersTeclado'){
        addNumberDigitedInScreen()
        blockTeclado()
        addNumberToArray()
        escolheCandidato()

    }
})


const interval =()=>{ setTimeout(()=>{ screen.innerHTML= `<h1>FIM</h1> ` }, 1000 )}

white.addEventListener('click', event =>{
    showCandidatos.innerHTML= `<h1>VOTO EM BRANCO</h1> `
    voteAnulate++
    audioCorrige.play()

})
const cleanScreen =()=>{
    setTimeout (()=>{
    screen.innerHTML=`
        <div class="showCandidatos">
            <h1> Presidente da República </h1>
                <div class="showNumbersDigited">
                    <div class="showDigitedNumber">
                        <div class="digitedNumber"></div>
                    </div>
                    <div class="showDigitedNumber ">
                        <div class="digitedNumber"></div>
                        </div>
               </div>
        </div>
         <div class="fotoCandidato">
         </div>
        `
    behaviorTelacdo.style.display='none'
},2300)
}
eraser.addEventListener('click', event =>{
    cleanScreen()
    audioCorrige.play()
    numberCandidato= []
})


confirm.addEventListener('click', event =>{
    countVotes(numberCandidato)
    interval()
    voteApuration()
    cleanScreen()
    votesLog()
    audioConfirm.play()
})


