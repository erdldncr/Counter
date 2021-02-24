let reset= document.querySelector('.reset')
let increase= document.querySelector('.increase')
let decrease= document.querySelector('.decrease')
let value= document.querySelector('.counter')
value.innerHTML= localStorage.getItem('value')
increase.addEventListener('click',function(){
    value.innerHTML=Number(value.innerHTML)
    value.innerHTML++;
    countercolor()
    localStorage.setItem('value',value.innerHTML)
})
decrease.addEventListener('click',function(){
    value.innerHTML=Number(value.innerHTML)
    value.innerHTML--;
    countercolor()
    localStorage.setItem('value',value.innerHTML)
})
reset.addEventListener('click',function(){
    value.innerHTML=Number(value.innerHTML)
    value.innerHTML=0
    countercolor()
    localStorage.setItem('value',value.innerHTML)
})
function countercolor(){
    if(value.innerHTML<0){
        value.style.color='gray'
    }else if(value.innerHTML>0){
        value.style.color='red'
    }else{
        value.style.color='#000'
    }
}