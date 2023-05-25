let ting =new Audio("ting.mp3");
let over = new Audio("gameover.mp3");
let gameover = false;
let turn = "X";


//Changing turns 
const changeTurn = ()=>{
    return turn=== "X"? "O":"X" ; 
}

// Check if game is over

const win =()=>{
    let boxText= document.querySelectorAll('.boxText');
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    if((boxText[0].innerText!=='') && (boxText[1].innerText!=='') && (boxText[2].innerText!=='') && (boxText[3].innerText!=='') && (boxText[4].innerText!=='') && (boxText[5].innerText!=='')&&(boxText[6].innerText!=='')&&(boxText[7].innerText!=='')&&(boxText[8].innerText!=='')){
        document.getElementsByClassName('gameInfo')[0].querySelector('span').innerHTML= `<strong>It's a Tie</strong>`;
        gameover=true;

    }

    arr.forEach((e)=>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[1]].innerText===boxText[e[2]].innerText) && boxText[e[0]].innerText!==''){
            gameover=true;
            document.getElementsByClassName('gameInfo')[0].querySelector('span').innerHTML=`<strong> ${boxText[e[0]].innerText}  Won </strong>`;
            document.getElementsByClassName('gif')[0].querySelector('img').style.width="210px"
            over.play();
        }
        
    })
    

}

//Game logic
let box = document.querySelectorAll('.box');
Array.from(box).forEach(element=>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){            
            boxText.innerText=turn;
            turn=changeTurn();
            ting.play();
            win();
            if(!gameover){                
                document.getElementsByClassName('gameInfo')[0].querySelector('span').innerHTML= `<strong>Turn for ${turn}</strong>`
            }
        }
        
    })   
})

//Reset button setup

btn.addEventListener('click',()=>{
    let boxText= document.getElementsByClassName('boxText');
    for(let i=0;i<9;i++){
        boxText[i].innerText="";
    }
    turn = "X";
    gameover =false;
    document.getElementsByClassName('gif')[0].querySelector('img').style.width="0px"
    document.getElementsByClassName('gameInfo')[0].querySelector('span').innerHTML= `<strong>Turn for ${turn}</strong>`
})



