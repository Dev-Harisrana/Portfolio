function togglemobilenav(){
    const menu = document.getElementById('hamburger-icon');
    menu.classList.toggle('open');}
// skill section 
function counter(n,t,id){
    //   let x=document.getElementById(id)
        let counter = 0;
        setInterval(() => {
            if (counter==n) {
                clearInterval()
            }else{
                counter += 1;
              id.innerHTML= counter+"%"
            console.log(counter)
        }},t)}
        window.addEventListener('onload',counter(90,15,number1));
        window.addEventListener('onload',counter(80,16,number2));
        window.addEventListener('onload',counter(50,30,number3));
        window.addEventListener('onload',counter(50,30,number4));
  