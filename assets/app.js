const botoesEyes = document.querySelector(".bi-eye");
const botaoEntrar = document.querySelector(".entrada");
const password = document.querySelector("#senha");
const form = document.querySelector("form");

botoesEyes.addEventListener("click", () => {
  if (botoesEyes.classList.contains("bi-eye")) {
    botoesEyes.classList.remove("bi-eye");
    botoesEyes.classList.add("bi-eye-slash");
    password.setAttribute("type", "text");
  } else {
    botoesEyes.classList.add("bi-eye");
    botoesEyes.classList.remove("bi-eye-slash");
    password.setAttribute("type", "password");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // window.open("outro.html");
});

botaoEntrar.addEventListener("click", () => {
  const campoLogin = document.querySelector("#login");
  const campoSenha = document.querySelector("#senha");
  const login = campoLogin.value;
  const senha = campoSenha.value;

  if (login == "admin" && senha == "admin") {
    alert("Sucesso ao logar");
    const a = document.createElement("a");
    a.href = "outro.html";
    window.open("./outro.html", "self");
  } else {
    alert("Usuário ou senha incorretos");
  }
});
