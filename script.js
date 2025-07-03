// Load Header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    highlightCurrentPage();
  });

// Load Footer
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

  function highlightCurrentPage() {
    let currentPath = window.location.pathname.split("/").pop();

    if (currentPath === "") {
        currentPath = "index.html";
    }

    const navLinks = document.querySelectorAll(".nav-right a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
  }


//   // playing around with the gallery
//   function scrollGallery(direction) {
//     const container = document.getElementById('galleryScroll');
//     const scrollAmount = 250; // adjust as needed

//     container.scrollBy({
//       left: direction * scrollAmount,
//       behavior: 'smooth'
//     });
//   }

//   const gallery = document.getElementById("galleryScroll");
// const cardWidth = 220; // Adjust based on actual width + gap
// const totalCards = gallery.children.length;
// let currentIndex = 0;

// document.getElementById("next").addEventListener("click", () => {
//   currentIndex++;
//   if (currentIndex >= totalCards) {
//     currentIndex = 0;
//   }
//   gallery.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
// });

// document.getElementById("prev").addEventListener("click", () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = totalCards - 1;
//   }
//   gallery.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
// });


// Flip effect for each card
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-inner");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });
  });
  
  // Rotating carousel logic
  document.addEventListener("DOMContentLoaded", () => {
    const galleryScroll = document.getElementById("galleryScroll");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
  
    nextBtn.addEventListener("click", () => {
      const firstCard = galleryScroll.children[0];
      galleryScroll.appendChild(firstCard); // Move first card to the end
    });
  
    prevBtn.addEventListener("click", () => {
      const lastCard = galleryScroll.children[galleryScroll.children.length - 1];
      galleryScroll.insertBefore(lastCard, galleryScroll.children[0]); // Move last card to the front
    });
  });