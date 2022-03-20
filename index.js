

document.getElementById('btn1').addEventListener('click',abc);
function abc(){
    
    console.log( Math.floor ( Math.random()*10 ));
}
document.getElementById('btn').addEventListener('click',xyz);
function xyz(){
    console.log('xyz');
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);

    console.log({r,g,b});

    document.body.style.backgroundColor='rgb('+r+','+g+','+b+ ')'; 
}
