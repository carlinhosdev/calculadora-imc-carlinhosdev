const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  let calculoImc = peso.value / (altura.value * altura.value);
  calculoImc = Number(calculoImc.toFixed(1));

  if (!altura.value || !peso.value) {
    calculandoImc(
      `<p class="span-vermelho"> Digite um peso e uma altura</p>`
    );
  } else if (isNaN(peso.value) || isNaN(altura.value)) {
    calculandoImc(
      `<p class="span-vermelho">Preencha os campos corretamente</p>`
    );
  } else {
    if (calculoImc < 18.5) {
      calculandoImc(
        `<p class="span-verde">Seu IMC é ${calculoImc} (Magreza)</p>`
      );
    } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
      calculandoImc(
        `<p class="span-verde">Seu IMC é ${calculoImc} (Normal)</p>`
      );
    } else if (calculoImc >= 25 && calculoImc <= 29.9) {
      calculandoImc(
        `<p class="span-verde">Seu IMC é ${calculoImc} (Sobrepeso)</p>`
      );
    } else if (calculoImc >= 30 && calculoImc <= 34.9) {
      calculandoImc(
        `<p class="span-verde">Seu IMC é ${calculoImc} (Obesidade I)</p>`
      );
    } else if (calculoImc >= 35 && calculoImc <= 39.9) {
      calculandoImc(
        `<p class="span-verde">Seu IMC é ${calculoImc} (Obesidade II)</p>`
      );
    } else if (calculoImc > 40) {
      calculandoImc(
        `<p class="span-verde">Seu IMC é ${calculoImc} (Obesidade III)</p>`
      );
    }
  }
});

function calculandoImc(mensagem) {
  const resultado = document.querySelector(".resultado");

  resultado.innerHTML = mensagem;
}
