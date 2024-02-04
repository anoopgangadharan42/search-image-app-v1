const accesskey ="L-FPPucxmWcgw38jnVFWFqP2ytrhsPqlSn1dmJZ5VMY";

const formE1 =document.querySelector("form");
const  searchInputE1 =document.getElementById("search-input");
const  searchResultsE1 =document.querySelector(".search-results");
const showMorebutton =document.getElementById("show-more-button");

let inputData ="";
let page = 1;

  async function searchImages() {
    inputData =searchInputE1.value;
    console.log(inputData);
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
  console.log(url);
  const response=await fetch(url);
  const data = await response.json();
  console.log(data);
  if(page ==1){
    searchInputE1.innerHTML ="";

  }

const results =data.results;

results.map((result)=>{
   const image =document.createElement("img");
   image.src=result.urls.small;
   const imagelink =document.createElement("a")
   imagelink.href=result.links.html;
   imagelink.target ="_blank";
   imagelink.appendChild(image);
   searchResultsE1.appendChild(imagelink);
})
}
formE1.addEventListener("submit",(e)=>{
  e.preventDefault();
  page=1;
  searchImages();
  
})