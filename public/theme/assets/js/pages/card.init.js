var Portlet = function () {
  (el = document.querySelector('.card a[data-toggle="reload"]')),
    el &&
      el.addEventListener("click", function (e) {
        e.preventDefault();
        e = el.closest(".card");
        (insertEl =
          '<div class="card-preloader"><div class="card-status"><div class="spinner-border text-success"><span class="visually-hidden">Loading...</span></div></div></div>'),
          e.children[1].insertAdjacentHTML("beforeend", insertEl);
        var t = e.getElementsByClassName("card-preloader")[0];
        setTimeout(function () {
          t.remove();
        }, 500 + 5 * Math.random() * 300);
      });
};
Portlet();
var growingLoader = function () {
  (element = document.querySelector('.card a[data-toggle="growing-reload"]')),
    element &&
      element.addEventListener("click", function (e) {
        e.preventDefault();
        e = element.closest(".card");
        (insertEl =
          '<div class="card-preloader"><div class="card-status"><div class="spinner-grow text-danger"><span class="visually-hidden">Loading...</span></div></div></div>'),
          e.children[1].insertAdjacentHTML("beforeend", insertEl);
        var t = e.getElementsByClassName("card-preloader")[0];
        setTimeout(function () {
          t.remove();
        }, 500 + 5 * Math.random() * 300);
      });
};
growingLoader();
var customLoader = function () {
  (customLoader1 = document.querySelector(
    '.card a[data-toggle="customer-loader"]'
  )),
    customLoader1 &&
      customLoader1.addEventListener("click", function (e) {
        e.preventDefault();
        e = customLoader1.closest(".card");
        (insertEl =
          '<div class="card-preloader"><div class="card-status"><img src="/theme/assets/images/logo-sm.png" alt="" class="img-fluid custom-loader"></div></div>'),
          e.children[1].insertAdjacentHTML("beforeend", insertEl);
        var t = e.getElementsByClassName("card-preloader")[0];
        setTimeout(function () {
          t.remove();
        }, 500 + 5 * Math.random() * 300);
      });
};
function delthis(e) {
  document.getElementById(e).remove();
}
customLoader();
