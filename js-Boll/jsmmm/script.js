let ball = document.querySelector('#sphere');
let bar = document.querySelector('#pavement');
let general = document.querySelector("#general");

let ballX = 0;
let ballY = 0;
let x = 5;
let y = 5;
let barX = 0;

document.addEventListener('keydown', barMove);
let set =  setInterval(ballMove, 40);

function barMove(e){

    if(e.keyCode == 39){
        if(barX<500){
            barX+=25;
        };
    }

    if(e.keyCode == 37){
        if(barX>0){
            barX-=25;
        }
    }

    bar.style.left = barX+'px';

}

function ballMove(){
    if(ballX<0 || ballX>560){
        x*= - 1;
    }
    if(ballY<0){
        y*= -1;
    }else if(ballY>460 && ballX>=barX-20 && ballX <= barX+100){
        y++;
        y*= -1;
    }

    else if(ballY>460){
        general.innerHTML = 'Uduzdun';
       clearInterval(set);
    }

    ballX += x;

    ballY += y;

    ball.style.left = ballX + 'px';

    ball.style.top = ballY + 'px';

};


