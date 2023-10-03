//  ---------------------------
//    insert main navigation
//  ---------------------------
const siteName = "SNIPPETS:<span>247</span>";
const siteNameURL = "#";
const insertNav = `
<nav class="top__nav">
  <div class="content">
    <a href="${siteNameURL}" class="logo">${siteName}</a>
  </div>
  <div class="dropdown-container">
    <div id="hamburger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div id="dropdown-menu">
      <ul></ul>
    </div>
  </div>
</nav>
`;
document.getElementById("insertNavHere").innerHTML = insertNav;
console.log("SUCCESS: Main Menu Inserted");

//  ---------------------------
//    insert left-side-bar
//  ---------------------------
const insertLeftSideBar = `
<aside class="left__sidebar">
  <nav class="left__nav">
    <ul></ul>
  </nav>
</aside>
`;
document.getElementById("insertLeftSideBarHere").innerHTML = insertLeftSideBar;
console.log("SUCCESS: Left Side Bar Inserted");

//  ---------------------------
//    insert right-side-bar
//  ---------------------------
const insertRightSideBar = `
<aside class="right__sidebar"></aside>
`;
document.getElementById("insertRightSideBarHere").innerHTML = insertRightSideBar;
console.log("SUCCESS: Right Side Bar Inserted");

//  -------------------------
//    display dropdown menu
//  -------------------------
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownContainer = document.querySelector(".dropdown-container");

  hamburgerMenu.addEventListener("click", function () {
    if (dropdownMenu.style.display === "flex") {
      dropdownMenu.style.display = "none";
      console.log("CLICKED: Menu Closed");
    } else {
      dropdownMenu.style.display = "flex";
      console.log("CLICKED: Menu Opened");
    }
  });
  document.addEventListener("click", function (event) {
    if (
      !dropdownContainer.contains(event.target) &&
      dropdownMenu.style.display === "flex"
    ) {
      dropdownMenu.style.display = "none";
      console.log("CLICKED: Menu Closed");
    }
  });
});

//  ----------------------------------
//    insert nav info into the
//    dropdown menu from json file
//  ----------------------------------

// Function to fetch and populate the dropdown menu with nested menus and items
function populateDropdownMenu() {
  fetch("../json/pages.json")
    .then((response) => response.json())
    .then((data) => {
      const dropdownMenu = document.getElementById("dropdown-menu");
      const ul = dropdownMenu.querySelector("ul");

      data.topics.forEach((topic) => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        h2.textContent = topic.title;
        li.appendChild(h2);

        if (topic.pages && topic.pages.length > 0) {
          const submenuUl = document.createElement("ul");

          topic.pages.forEach((page) => {
            const submenuLi = document.createElement("li");
            const submenuA = document.createElement("a");
            submenuA.href = page.url;
            submenuA.textContent = page.title;
            submenuLi.appendChild(submenuA);
            submenuUl.appendChild(submenuLi);
          });

          li.appendChild(submenuUl);
        }

        ul.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
}

// Call the function to populate the dropdown menu with nested menus and items
populateDropdownMenu();

//  ----------------------------------
//    NAVBAR - insert nav info from
//    json file into the left sidebar
//    navbar <aside>
//  ----------------------------------

function populateNestedMenu() {
  fetch("../json/pages.json")
    .then((response) => response.json())
    .then((data) => {
      const asideMenu = document.querySelector(".left__nav ul");

      data.topics.forEach((topic) => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        h2.textContent = topic.title;
        li.appendChild(h2);

        if (topic.pages && topic.pages.length > 0) {
          const submenuUl = document.createElement("ul");
          topic.pages.forEach((page) => {
            const submenuLi = document.createElement("li");
            const submenuA = document.createElement("a");
            submenuA.href = page.url;
            submenuA.textContent = page.title;
            submenuLi.appendChild(submenuA);
            submenuUl.appendChild(submenuLi);
          });
          li.appendChild(submenuUl);
        }

        asideMenu.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
}

populateNestedMenu();
