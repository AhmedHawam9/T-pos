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

//=========== Back to Top Button =============
var btn = $("#float_up");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
//=========== Back to Top Button =============
