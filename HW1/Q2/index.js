class Duck {
  constructor(name, color, age, weight, image) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.image = image;
  }

  show() {
    return `Name: ${this.name}, Color: ${this.color}, Age: ${this.age}, Weight: ${this.weight},Image: ${this.image}`;
  }

  quack() {
    let timesToPrint = (this.age * this.weight) / 2;
    let text = "";
    for (let i = 0; i < timesToPrint; i++) {
      text += `Quack `;
    }
    return text;
  }
}

function onSubmit(e) {
  e.preventDefault();
  const name = $("#name").val();
  const color = $("#color").val();
  const age = $("#age").val();
  const weight = $("#weight").val();
  const image = $("#image").val();
  duckObj = new Duck(name, color, age, weight, image);
  console.log(duckObj.show());
  document.querySelector(".new-btn").disabled = true;
  $(".btn").show();
}

function onShow(e) {
  e.preventDefault();
  let p = $("<p>");
  p.text(duckObj.show());
  $(".container").append(p);
}

function onQuack(e) {
  e.preventDefault();
  let p = $("<p>");
  p.text(duckObj.quack());
  $(".container").append(p);
//   let audio = new Audio("quack.mp3");
playAudio();

}


function playAudio() {
    let audio = new Audio('quack.mp3');
    let playCount = 3;
    audio.addEventListener('ended', function() {
        if (playCount > 1) {
            playCount--;
            audio.currentTime = 0; 
            audio.play();
        }
    });
    audio.play();
}


let duckObj;
