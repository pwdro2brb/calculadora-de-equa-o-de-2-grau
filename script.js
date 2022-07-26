const $form = document.querySelector("form");
const $a = document.querySelector("#a");
const $b = document.querySelector("#b");
const $c = document.querySelector("#c");
const $x1 = document.querySelector("#x1");
const $x2 = document.querySelector("#x2");
const $delta = document.querySelector("#delta");

function bhaskara() {
  const a = $a.value;
  const b = $b.value;
  const c = $c.value;

  const delta = b * b - 4 * a * c;

  if (0!=a && isNaN(a)) {
    createAlert("Insira algum valor do tipo número para 'A' ");
  }else if (isNaN(b)) {
    createAlert("Insira algum valor do tipo número para 'B' ");
  }else if (isNaN(c)) {
    createAlert("Insira algum valor do tipo número para 'C' ");
  } else if (a == 0) {
    createAlert("O valor de <strong>A</strong> , deve ser diferente de 0");
  } else if (delta < 0) {
    createAlert("Sem raízes reais");
        $delta.value = delta;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    $x1.value = x1;
    $x2.value = x2;
    $delta.value = delta;
  }
}

function createAlert(msg) {
  document
    .querySelector("body")
    .insertAdjacentHTML("beforebegin", `<center><span class='alert'>${msg}</div></center>`);

  
  setTimeout(function () {
    deleteAlert();
  }, 1000);
}

function deleteAlert() {
  const list = document.querySelectorAll(".alert");
  for (const item of list) {
    item.remove();
  }
}

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  bhaskara();
});