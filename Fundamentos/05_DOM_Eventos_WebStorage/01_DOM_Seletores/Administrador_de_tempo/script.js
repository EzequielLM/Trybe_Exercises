//! Troca a cor de fundo das tasks urgentes e não urgentes

document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';

//! Troca a cor de fundo dos H3

let taskUrgent = document.querySelectorAll('.emergency-tasks h3');

for(let i = 0; i < taskUrgent.length; i += 1){
    taskUrgent[i].style.backgroundColor = 'purple'; 
}

let taskNoUrgent = document.querySelectorAll('.no-emergency-tasks h3');

for(let i = 0; i < taskNoUrgent.length; i += 1){
    taskNoUrgent[i].style.backgroundColor = 'black'; 
}

//! Troca a cor de fundo do titulo 

document.getElementById('header-container').style.backgroundColor = 'MediumSeaGreen';

//! Troca a cor de fundo do footer

document.getElementById('footer-container').style.backgroundColor = 'DarkSlateGray';