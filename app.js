const clock = document.querySelector(".clock");

const tick = () => {
  const time = new Date();

  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();
  
  clock.innerHTML = `
    <span>${hours}</span> : 
    <span>${mins}</span> : 
    <span>${secs}</span>
    `;
};
setInterval(tick, 1000);
