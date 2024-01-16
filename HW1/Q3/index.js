class Clock {
  constructor(country, hours, minutes, seconds) {
    this.country = country;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  convertToSeconds() {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  }

  show() {
    return `${
      this.hours.toString().length == 1 ? `0${this.hours}` : this.hours
    }:${
      this.minutes.toString().length == 1 ? `0${this.minutes}` : this.minutes
    }:${
      this.seconds.toString().length == 1 ? `0${this.seconds}` : this.seconds
    }`;
  }
}

$(document).ready(function () {
  function populateOptions(selectElement, start, end) {
    for (let i = start; i <= end; i++) {
      let optionValue = i < 10 ? "0" + i : i.toString();
      selectElement.append(
        $("<option>", { value: optionValue, text: optionValue })
      );
    }
  }

  populateOptions($("#hours"), 0, 11);
  populateOptions($("#minutes"), 0, 59);
  populateOptions($("#seconds"), 0, 59);
});

function onSubmit(e) {
  e.preventDefault();
  if(clockArr.length > 5){
    alert("please refresh page to start again");
    return;
  }
  if ($("#country").val() == "") {
    alert("please enter a country name");
    return;
  }
  let newClock = new Clock(
    $("#country").val(),
    Number($("#hours").val()),
    Number($("#minutes").val()),
    Number($("#seconds").val())
  );
  clockArr.push(newClock);
  console.log(clockArr);
  document.querySelector("form").reset();
  if (clockArr.length == 5) {
    renderClocks();
    return;
  }
}

function renderClocks() {
  for (let clock of clockArr) {
    document.querySelector(
      ".clocks-display"
    ).innerHTML += `          <div class="clock-item">
    <span class="country-name-clock">${clock.country}</span>
    <span class="time-clock">${clock.show()}</span>
    <span class="time-in-seconds-clock">Time In Seconds:${clock.convertToSeconds()}</span>
  </div>`;
  }
}

let clockArr = [];
