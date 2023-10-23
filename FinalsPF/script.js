let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
// Function to open the search container
function openSearch() {
  var searchContainer = document.getElementById("search-container");
  searchContainer.style.display = "block";
}

// Function to close the search container
function closeSearch() {
  var searchContainer = document.getElementById("search-container");
  searchContainer.style.display = "none";
}

// Add an event listener to the search icon
document.getElementById("search-btn").addEventListener("click", openSearch);

// Function to toggle the profile dropdown
function toggleProfileDropdown() {
  var profileDropdown = document.getElementById("profile-dropdown");
  if (profileDropdown.style.display === "block") {
      // If the dropdown is currently open, close it
      profileDropdown.style.display = "none";
  } else {
      // If the dropdown is currently closed, open it
      profileDropdown.style.display = "block";
  }
}

// Function to close the profile dropdown
function closeProfileDropdown() {
  var profileDropdown = document.getElementById("profile-dropdown");
  profileDropdown.style.display = "none";
}

// Function to handle logout
function logout() {
  // Implement your logout logic here
  alert("Logging out...");
  closeProfileDropdown();
}

// Add an event listener to the profile icon
document.getElementById("profile-btn").addEventListener("click", toggleProfileDropdown);
