//=========== Active navbar Link in multi pages =============
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "nav-link active";
  }
}
//=========== Active navbar Link in multi pages =============