let header = document.querySelectorAll('#header-container')[0];
header.style.background = '#00B069';

let urgente = document.querySelectorAll('.emergency-tasks')[0];
urgente.style.background = '#FF9F84';

let nUrgente = document.querySelectorAll('.no-emergency-tasks')[0];
nUrgente.style.background = '#F9DB5E'

let footer = document.querySelector('#footer-container');
footer.style.background = '#003533'

let urgenteBorda = urgente.querySelectorAll('h3');
for (let i = 0; i < urgenteBorda.length; i +=1 ) {
    urgenteBorda[i].style.background = '#A500F3';
}

let nUrgenteBorda = nUrgente.querySelectorAll('h3');
for (let i = 0; i < nUrgenteBorda.length; i += 1){
    nUrgenteBorda[i].style.background = '#232525'
}