const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

const height = document.querySelector("#taille");
const weight = document.querySelector("#poids");
const btnCalculate = document.querySelector(".imc");
const result = document.querySelector(".result");
const info = document.querySelector(".info");

btnCalculate.addEventListener("click", function (e) {
  e.preventDefault();
  calculateBMI(height, weight);
});

function calculateBMI(height, weight) {
  const meterNumHeight = Number(height.value) / 100;
  const numWeight = Number(weight.value);

  if (!meterNumHeight || !numWeight || meterNumHeight <= 0 || numWeight <= 0) {
    handleError();
    return;
  }
  const BMI = (numWeight / Math.pow(meterNumHeight, 2)).toFixed(1);
  showResult(BMI);
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) {
      info.textContent = data.name;
      return data;
    } else if (typeof data.range === "number" && BMI >= data.range) {
      info.textContent = data.name;
      return data;
    }
  });
  result.textContent = BMI;
  result.style.color = `${rank.color}`;
}

function handleError() {
  result.textContent = "WHOOOPS";
  info.textContent = "Veuillez entrer votre taille et votre poids !";
}
