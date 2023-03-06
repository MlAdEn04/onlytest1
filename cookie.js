// čitanje vrednosti brojača iz kolačića
let count = getCookie("count");
if (count === "") {
  count = 0;
} else {
  // ako je brojač već učitan, samo prikažemo postojeću vrednost
  document.getElementById("counter").innerText = count + " ljudi";
}

// ažuriranje brojača samo ako brojač nije već učitan
if (count === 0) {
  count++;
  // postavljanje nove vrednosti u kolačić
  setCookie("count", count, 365);
  // prikazivanje brojača na stranici
  document.getElementById("counter").innerText = count + "ljudi";
}

// funkcija za čitanje kolačića
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return "";
}

// funkcija za postavljanje kolačića
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
