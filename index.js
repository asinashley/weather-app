function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", citySearch);
