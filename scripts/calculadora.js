document.getElementById('imcForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (weight > 0 && height > 0) {
      const imc = (weight / (height * height)).toFixed(2);
      let classification;

      if (imc < 18.5) {
          classification = "Abaixo do Peso";
      } else if (imc >= 18.5 && imc < 24.9) {
          classification = "Peso Normal";
      } else if (imc >= 25 && imc < 29.9) {
          classification = "Sobrepeso";
      } else {
          classification = "Obesidade";
      }

      document.getElementById('result').innerHTML = 
          `<h2>Seu IMC é: ${imc}</h2><p>Classificação: ${classification}</p>`;
  } else {
      document.getElementById('result').innerHTML = 
          `<h2>Por favor, insira valores válidos.</h2>`;
  }
});
