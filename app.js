//===== geting the elements =====//
const revealButton = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');
const message = document.getElementById('message')
//====== function =====//
function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn');
        }else{
        hiddenContent.classList.add('reveal-btn')
    };
}

revealButton.addEventListener('click', revealContent);

// function to scroll to the message
function scrollToMessage(){
    message.scrollIntoView({ behavior: "smooth", block: "start"})
}

revealButton.addEventListener('click', scrollToMessage)