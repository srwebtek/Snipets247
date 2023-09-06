//  -------------------------
//    insert the site name
//  -------------------------

const siteName = "SNIPPETS:<span>247</span>";

document.getElementById("top__nav__logo").innerHTML = siteName;



//  -------------------------
//    display dropdown menu
//  -------------------------
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownContainer = document.querySelector(".dropdown-container");

  hamburgerMenu.addEventListener("click", function () {
    console.log("clicked: Hamburger");
    if (dropdownMenu.style.display === "flex") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "flex";
    }
  });
  document.addEventListener("click", function (event) {
    if (
      !dropdownContainer.contains(event.target) &&
      dropdownMenu.style.display === "flex"
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});

//  ----------------------------------
//    insert nav info into the
//    dropdown menu from json file
//  ----------------------------------

function populateDropdownMenu() {
  fetch("../json/pages.json")
    .then((response) => response.json())
    .then((data) => {
      const dropdownMenu = document.getElementById("dropdown-menu");
      const ul = dropdownMenu.querySelector("ul");

      data.topics.forEach((topic) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = topic.url;
        a.textContent = topic.title;
        li.appendChild(a);
        ul.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
}

populateDropdownMenu();







//  ----------------------------------
//    NAVBAR - insert nav info from
//    json file into the upper navbar
//  ----------------------------------

function populateHorizontalMenu() {
  fetch("../json/pages.json")
    .then((response) => response.json())
    .then((data) => {
      const horizontalMenu = document.querySelector(".horizontal");

      data.topics.forEach((topic) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = topic.url; 
        a.textContent = topic.title;
        li.appendChild(a);
        horizontalMenu.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
}

populateHorizontalMenu();





//  ----------------------------------
//    NAVBAR - insert nav info from
//    json file into the left sidebar
//    navbar <aside>
//  ----------------------------------

function populateAsideMenu() {
  fetch("../json/pages.json") // Update the path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const asideMenu = document.querySelector(".left__nav ul");

      data.topics.forEach((topic) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = topic.url; // Use the URL from the JSON data
        a.textContent = topic.title;
        li.appendChild(a);
        asideMenu.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
}


populateAsideMenu();
