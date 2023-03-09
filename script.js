// function togglemobilenav(){
//     const menu = document.getElementById('menu');

//     menu.classList.toggle('open');}
// wr
//nav menu function

function opennav(){
  menu = document.getElementById("menu");
  menu.addEventListener('click',openmenu());
  function openmenu(){
  ul = document.getElementById("mobile-menu");
  if (ul.classList.contains("none")){
    ul.classList.remove("none");
  } else {
    ul.classList.add("none");
  }
}}

// skill section
function counter(n, t, id) {
  //   let x=document.getElementById(id)
  let counter = 0;
  setInterval(() => {
    if (counter == n) {
      clearInterval();
    } else {
      counter += 1;
      id.innerHTML = counter + "%";
      console.log(counter);
    }
  }, t);
}
window.addEventListener("onload", counter(90, 15, number1));
window.addEventListener("onload", counter(80, 16, number2));
window.addEventListener("onload", counter(50, 30, number3));
window.addEventListener("onload", counter(50, 30, number4));

Email.send({
  Host: "smtp.elasticemail.com",
  Username: "harisrana569@gmail.com",
  Password: "34F8DFD0BD4C735DF114B18D1B9A1AA038F9",
  To: "harisrana569@gmail.com",
  From: "you@isp.com",
  Subject: "This is the subject",
  Body: "And this is the body",
}).then((message = "thanks for contacting we will reach you soon"), (message) =>
  alert(message)
);
