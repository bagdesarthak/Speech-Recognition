let condition = false;

const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");


recognition.addEventListener("result", (e) => {
  if (condition) {
    texts.appendChild(p);

    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    p.innerText = text;


    console.log(e)

    if (e.results[0].isFinal) {
      // console.log(2)
      if (text.includes('hello')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Hi';
        texts.appendChild(p);
      } 
      if (text.includes('test')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'passed';
        texts.appendChild(p);
      } 

      //    if (text.includes('What is Your name')) {
      //   p = document.createElement('p');
      //   p.classList.add('replay');
      //   p.innerText = 'My Name is Tom Riddle.';
      //   texts.appendChild(p);
      // }
      p = document.createElement('p');
    }

  }
  
});

recognition.addEventListener("end", () => {
  //This function will run after the end of each statement
  btn.style.color = '#fcd600';
  condition = !condition;
});


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

  if (condition==false) {
    btn.style.color = 'red';
    recognition.start();//This function is called to start speech recognition feature

  }
  else btn.style.color = '#fcd600';

  condition = !condition;
});

