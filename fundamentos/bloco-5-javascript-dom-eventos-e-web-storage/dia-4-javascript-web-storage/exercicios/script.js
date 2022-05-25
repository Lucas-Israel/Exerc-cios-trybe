window.onload = function(){
    let select = document.querySelector('select');
    select.addEventListener('change', function(){
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;

        localStorage.setItem('5.4-background-color', selected.value);
    });

    let inputFontSize = document.querySelector('input[name="font-size"]');
    inputFontSize.addEventListener('change', function(){
        let p = document.querySelector('p');
        p.style.fontSize = `${inputFontSize.value}px`;

        localStorage.setItem('5.4-fontsize', `${inputFontSize.value}px`)
    });

    let textColor = document.querySelector('#text-color');
    textColor.addEventListener('change', function(){
        let txtc = textColor.selectedOptions[0];
        let paragrafos = document.getElementById('conteudo');
        paragrafos.style.color = txtc.value;

        localStorage.setItem('5.4-font-color', txtc.value);
    });

    let fonteB1 = document.querySelector('#b1');
    let fonteB2 = document.querySelector('#b2');
    fonteB1.addEventListener('click', function(){
        let paragrafos = document.getElementById('conteudo');
        paragrafos.style.fontFamily = fonteB1.value;

        localStorage.setItem('5.4-font-family', fonteB1.value);
    });
    fonteB2.addEventListener('click', function(){
        let paragrafos = document.getElementById('conteudo');
        paragrafos.style.fontFamily = fonteB2.value;

        localStorage.setItem('5.4-font-family', fonteB2.value);
    });

    let espaLin = document.querySelector('input[name="esp-lin"]');
    espaLin.addEventListener('change', function(){
        let p = document.querySelector('p');
        p.style.lineHeight = `${espaLin.value}px`;

        localStorage.setItem('5.4-espaLin', `${espaLin.value}px`)
    });



    
    let savedBackGround = localStorage.getItem('5.4-background-color');
    document.body.style.backgroundColor = savedBackGround;

    let savedFontSize = localStorage.getItem('5.4-fontsize');
    let fontSave = document.querySelector('#conteudo');
    fontSave.style.fontSize = savedFontSize;

    let savedTxt = localStorage.getItem('5.4-font-color');
    document.body.style.color = savedTxt;

    let fonteF = localStorage.getItem('5.4-font-family');
    document.body.p.style.fontFamily = fonteF;
}