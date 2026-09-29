// Mobile navigation
function toggleMenu() {
  const nav = document.getElementById("mainNav");

  if (nav) {
    nav.classList.toggle("open");
  }
}

// Automatically update the copyright year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Share button
async function sharePage() {
  const shareData = {
    title: "Supporting Our Family",
    text: "Please take a moment to learn about our family's journey and ways you can help.",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Page link copied. You can now share it with your friends and family.");
    }
  } catch (error) {
    console.log("Sharing was cancelled.");
  }
}