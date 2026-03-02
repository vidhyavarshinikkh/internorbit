document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("tempInput");
  const unit = document.getElementById("unitSelect");
  const res1 = document.getElementById("result1");
  const res2 = document.getElementById("result2");
  const btn = document.getElementById("convertBtn");
  const form = document.getElementById("converter");

  function format(n) {
    return Number.isFinite(n) ? Math.round(n * 100) / 100 : "—";
  }

  function clearResults() {
    res1.textContent = "";
    res2.textContent = "";
  }

  function convertTemp() {
    const value = parseFloat(input.value);

    if (isNaN(value)) {
      res1.textContent = "Please enter a valid number.";
      res2.textContent = "";
      return;
    }

    let c, f, k;

    if (unit.value === "C") {
      c = value;
      f = c * 9 / 5 + 32;
      k = c + 273.15;
    } 
    else if (unit.value === "F") {
      f = value;
      c = (f - 32) * 5 / 9;
      k = c + 273.15;
    } 
    else {
      k = value;
      c = k - 273.15;
      f = c * 9 / 5 + 32;
    }

    res1.textContent = `Celsius: ${format(c)} °C`;
    res2.textContent = `Fahrenheit: ${format(f)} °F | Kelvin: ${format(k)} K`;
  }

  btn.addEventListener("click", convertTemp);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      convertTemp();
    }
  });

  form.addEventListener("reset", function () {
    clearResults();
    input.focus();
  });

});