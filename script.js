const pic1 = '<img src="pic1.JPG" width="150" height="200">';
const pic2 = '<img src="pic2.JPG" width="150" height="200">';
const pic3 = '<img src="pic3.JPG" width="150" height="200">';
const pic4 = '<img src="pic4.JPG" width="200" height="200">';

const arr = [
  "I FUCK WITH YOU SO HARD",
  "YOU BRINING TY TONIGHT?",
  "WHERES TY?",
  "I LOVE THE FENCE IN YOUR BACKYARD",
  "MORGAN RIELLY",
  "ILL SUCK YOUR PIECE",
  "YOU NEED YOUR PIECE SUCKED?",
  "KING",
  "BE YOU TONIGHT",
  "TELL TY ILL SUCK HIS PIECE",
  "I LOVE TY",
  "BEST DJ EVER",
  "SPADES UP!",
  "DEFENSIVE ANCHOR",
  "ALL HEART EVERY WEEK",
  "DO DO DO DO DO",
  "CIROC EHHHHH?",
  "YAAAAAAAAAA? I RATE IT",
  "GOD, I RATE YOU",
  "I RATE YOU",
  "LEADER",
  pic1,
  "♠♠♠♠♠♠♠",
  "CAN I SAY THAT INFRONT OF YOU?",
  "DONT GET OFFENDED PLEASE",
  "ACCOUNTABILITY",
  "COURAGE",
  "YOUR HOUSE IS SO NICE",
  pic2,
  pic3,
  pic4,
  "BEST D IN THE LEAUGE",
];

const btnFunc = function () {
  const btn1 = document.querySelector(".btn1");
  btn1.addEventListener("click", function () {
    const arrPrint = function () {
      setInterval(function () {
        Array.prototype.sample = function () {
          return this[Math.floor(Math.random() * this.length)];
        };
        const arrInfo = document.querySelector(".arrayinfo");
        const html = `<h2 class="random__arr">${arr.sample()}`;
        arrInfo.insertAdjacentHTML("beforeend", html);
      }, 1000);
    };
    arrPrint();
  });
};

btnFunc();

const scrollFunc = function () {
  setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight);
  }, 1000);
};

scrollFunc();
