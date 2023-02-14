document.getElementById("menu-btn").addEventListener("click", function() { 
    alert("Menu button clicked!"); 
  });

  const ruLink = document.getElementById("ru-link"); 
const uaLink = document.getElementById("ua-link"); 
 console.log(ruLink)
 console.log(uaLink)

const defaultLanguage = localStorage.getItem("language") || "ru"; 
 
if (defaultLanguage === "ru") { 
  ruLink.classList.add("active"); 
} else { 
  uaLink.classList.add("active"); 
} 
 
ruLink.addEventListener("click", function (event) { 
  event.preventDefault(); 
  localStorage.setItem("language", "ru"); 
  ruLink.classList.add("active"); 
  uaLink.classList.remove("active"); 
}); 
 
uaLink.addEventListener("click", function (event) { 
  event.preventDefault(); 
  localStorage.setItem("language", "ua"); 
  uaLink
})