const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const btnCalculate = document.querySelector(".imc");
const result = document.querySelector(".result");
const info = document.querySelector(".info");

btnCalculate.addEventListener("click", function (e) {
  e.preventDefault();
  const meterNumHeight = Number(height.value) / 100;
  const numWeight = Number(weight.value);
  imc = (numWeight / Math.pow(meterNumHeight, 2)).toFixed(2);
  result.textContent = imc;
});
