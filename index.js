function citySearch(event) {
  event.preventDefault();
  let searchIput = document.querySelector("#searchIput");
  let city = document.querySelector("#city");
  city.innerHTML = searchIput.value;
}
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", citySearch);
