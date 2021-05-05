let verdictDiv = document.querySelector('.verdict-div');
let sentencingDiv = document.querySelector('.sentencing-div');
let juryDiv = document.querySelector('.jury-div');
let defaultDiv = document.querySelector('.default-div')
let navigation = document.querySelectorAll('.navigation-tab');

let mediaDiv = document.querySelector('.media-div');


verdictDiv.style.display='none';
sentencingDiv.style.display='none';
juryDiv.style.display= 'none';
mediaDiv.style.display='none';










navigation.forEach(button=>{
  button.addEventListener('click', function(e){
    if(e.target.textContent ==='Verdict'){
      verdictDiv.style.display='flex';
     
      verdictDiv.style.animation = 'fadein 4s';
      sentencingDiv.style.display='none';
      juryDiv.style.display= 'none';
      mediaDiv.style.display='none';
defaultDiv.style.display='none';
    } else if(e.target.textContent ==='Sentencing Guidelines'){
      verdictDiv.style.display='none';
      sentencingDiv.style.display='block';
      sentencingDiv.style.animation = 'fadein 4s';
      juryDiv.style.display= 'none';
      mediaDiv.style.display='none';
defaultDiv.style.display='none';
    } else if (e.target.textContent ==='Jury'){
      verdictDiv.style.display='none';
      sentencingDiv.style.display='none';
      juryDiv.style.display= 'block';
      juryDiv.style.animation = 'fadein 4s';
      defaultDiv.style.display='none';
      mediaDiv.style.display='none';
    } else if(e.target.textContent ==='Video'){
      verdictDiv.style.display='none';
      sentencingDiv.style.display='none';
      juryDiv.style.display= 'none';
      defaultDiv.style.display='none';
      mediaDiv.style.display='block';
      mediaDiv.style.animation = 'fadein 4s';
    } else if(e.target.textContent ==='Home'){
      verdictDiv.style.display='none';
sentencingDiv.style.display='none';

juryDiv.style.display= 'none';
mediaDiv.style.display='none';
defaultDiv.style.display='flex';
    }
  
  })
})

