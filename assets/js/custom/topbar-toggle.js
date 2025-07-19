function toggleSidebar() {
  const topbar = document.getElementById("topbar-wrapper");

  if (window.innerWidth >= 850) {
    topbar.classList.add('d-none');
    if (topbar.classList.contains('d-unset')) {
      topbar.classList.remove('d-unset');
    }
  } else {
    topbar.classList.add('d-unset')
    if (topbar.classList.contains('d-none')) {
      topbar.classList.remove('d-none');
    }
  }
}

document.addEventListener("DOMContentLoaded", toggleSidebar);
window.addEventListener("resize", toggleSidebar);
