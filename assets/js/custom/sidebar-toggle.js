function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const topbar = document.getElementById("topbar");
  if (!sidebar) return;

  if (window.innerWidth >= 850) {
    sidebar.classList.add('d-none');
    if (sidebar.classList.contains('d-unset')) {
      sidebar.classList.remove('d-unset');
    }
    topbar.classList.add("d-unset");
    if (topbar.classList.contains('d-none')) {
      topbar.classList.remove('d-none');
    }
  } else {
    sidebar.classList.add('d-unset')
    if (sidebar.classList.contains('d-none')) {
      sidebar.classList.remove('d-none');
    }
    topbar.classList.add('d-none');
    if (topbar.classList.contains('d-unset')) {
      topbar.classList.remove('d-unset');
    }
  }
}

document.addEventListener("DOMContentLoaded", toggleSidebar);
window.addEventListener("resize", toggleSidebar);
