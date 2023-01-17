const input = document.querySelector("#searchUser");
const btn = document.querySelector('[type="button"]');
const profile = document.querySelector(".profile");
const toast = document.querySelector("#toast");
const toastClose = document.querySelector("#close");
let x;

btn.addEventListener("click", () => {
  profile.innerHTML = "";
  input.value === "" ? showToast() : getCharacters(input.value);
  input.value = "";
});

toastClose.addEventListener("click", closeToast);

async function getCharacters(name) {
  try {
    const results = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
    );
    const data = await results.json();
    console.log(data.results);
    data.results.map((character) => {
      profile.innerHTML += `       
        <div class="card data" style="width: 18rem">
        <img class="card-img-top" src="${character.image}" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">${character.name}</h4>
          <h5 class="card-text">species <span>${character.species}</span></h5>
        </div>
      </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

function showToast() {
  clearTimeout(x);
  toast.style.transform = "translateX(0)";
  x = setTimeout(() => {
    toast.style.transform = "translateX(400px)";
  }, 5000);
}

function closeToast() {
  toast.style.transform = "translateX(400px)";
}
