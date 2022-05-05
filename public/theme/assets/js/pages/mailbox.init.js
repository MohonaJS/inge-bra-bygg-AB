var url = "/theme/assets/json/",
  allmaillist = "",
  getJSON = function (e, t) {
    var l = new XMLHttpRequest();
    l.open("GET", url + e, !0),
      (l.responseType = "json"),
      (l.onload = function () {
        var e = l.status;
        t(200 === e ? null : e, l.response);
      }),
      l.send();
  };
function loadMailData(e) {
  document
    .querySelector(
      '#mail-filter-navlist button[data-bs-target="#pills-primary"]'
    )
    .click(),
    (document.querySelector("#mail-list").innerHTML = ""),
    e.forEach(function (e, t) {
      var l = e.readed ? "" : "unread",
        a = e.starred ? "active" : "",
        i = e.counted ? "(" + e.counted + ")" : "";
      (document.querySelector("#mail-list").innerHTML +=
        '<li class="' +
        l +
        '">        <div class="col-mail col-mail-1">            <div class="form-check checkbox-wrapper-mail fs-14">                <input class="form-check-input" type="checkbox" value="' +
        e.id +
        '" id="checkbox-' +
        e.id +
        '">                <label class="form-check-label" for="checkbox-' +
        e.id +
        '"></label>            </div>            <input type="hidden" value=' +
        e.userImg +
        ' class="mail-userimg" />            <button type="button" class="btn avatar-xs p-0 favourite-btn fs-15 ' +
        a +
        '">            <i class="ri-star-fill"></i>            </button>            <a href="javascript: void(0);" class="title"><span class="title-name">' +
        e.name +
        "</span> " +
        i +
        '</a>        </div>        <div class="col-mail col-mail-2">            <a href="javascript: void(0);" class="subject"><span class="subject-title">' +
        e.title +
        '</span> – <span class="teaser">' +
        e.description +
        '</span>            </a>            <div class="date">' +
        e.date +
        "</div>        </div>    </li>"),
        favouriteBtn(),
        emailDetailShow(),
        emailDetailChange(),
        checkBoxAll();
    });
}
function loadSocialMailData(e) {
  e.forEach(function (e, t) {
    var l = e.readed ? "" : "unread",
      a = e.starred ? "active" : "",
      i = e.counted ? "(" + e.counted + ")" : "";
    (document.getElementById("social-mail-list").innerHTML +=
      '<li class="' +
      l +
      '">                <div class="col-mail col-mail-1">                    <div class="form-check checkbox-wrapper-mail fs-14">                        <input class="form-check-input" type="checkbox" value="' +
      e.id +
      '" id="checkbox-' +
      e.id +
      '">                        <label class="form-check-label" for="checkbox-' +
      e.id +
      '"></label>                    </div>                    <input type="hidden" value=' +
      e.userImg +
      ' class="mail-userimg" />                    <button type="button" class="btn avatar-xs p-0 favourite-btn fs-15 ' +
      a +
      '">                    <i class="ri-star-fill"></i>                    </button>                    <a href="javascript: void(0);" class="title"><span class="title-name">' +
      e.name +
      "</span> " +
      i +
      '</a>                </div>                <div class="col-mail col-mail-2">                    <a href="javascript: void(0);" class="subject"><span class="subject-title">' +
      e.title +
      '</span> – <span class="teaser">' +
      e.description +
      '</span>                    </a>                    <div class="date">' +
      e.date +
      "</div>                </div>            </li>"),
      emailDetailShow(),
      emailDetailChange(),
      checkBoxAll();
  });
}
function loadPromotionsMailData(e) {
  e.forEach(function (e, t) {
    var l = e.readed ? "" : "unread",
      a = e.starred ? "active" : "",
      i = e.counted ? "(" + e.counted + ")" : "";
    (document.getElementById("promotions-mail-list").innerHTML +=
      '<li class="' +
      l +
      '">                <div class="col-mail col-mail-1">                    <div class="form-check checkbox-wrapper-mail fs-14">                        <input class="form-check-input" type="checkbox" value="' +
      e.id +
      '" id="checkbox-' +
      e.id +
      '">                        <label class="form-check-label" for="checkbox-' +
      e.id +
      '"></label>                    </div>                    <input type="hidden" value=' +
      e.userImg +
      ' class="mail-userimg" />                    <button type="button" class="btn avatar-xs p-0 favourite-btn fs-15 ' +
      a +
      '">                    <i class="ri-star-fill"></i>                    </button>                    <a href="javascript: void(0);" class="title"><span class="title-name">' +
      e.name +
      "</span> " +
      i +
      '</a>                </div>                <div class="col-mail col-mail-2">                    <a href="javascript: void(0);" class="subject"><span class="subject-title">' +
      e.title +
      '</span> – <span class="teaser">' +
      e.description +
      '</span>                    </a>                    <div class="date">' +
      e.date +
      "</div>                </div>            </li>"),
      emailDetailShow(),
      emailDetailChange(),
      checkBoxAll();
  });
}
function favouriteBtn() {
  document.querySelectorAll(".favourite-btn").forEach(function (e) {
    e.addEventListener("click", function () {
      e.classList.contains("active")
        ? e.classList.remove("active")
        : e.classList.add("active");
    });
  });
}
function emailDetailShow() {
  var l = document.getElementsByTagName("body")[0];
  document.querySelectorAll(".message-list a").forEach(function (e) {
    e.addEventListener("click", function (t) {
      l.classList.add("email-detail-show"),
        document
          .querySelectorAll(".message-list li.unread")
          .forEach(function (e) {
            e.classList.contains("unread") &&
              t.target.closest("li").classList.remove("unread");
          });
    });
  }),
    document.querySelectorAll(".close-btn-email").forEach(function (e) {
      e.addEventListener("click", function () {
        l.classList.remove("email-detail-show");
      });
    });
  var t = !1,
    a = document.getElementsByClassName("email-menu-sidebar");
  document.querySelectorAll(".email-menu-btn").forEach(function (e) {
    e.addEventListener("click", function () {
      a.forEach(function (e) {
        e.classList.add("menubar-show"), (t = !0);
      });
    });
  }),
    window.addEventListener("click", function (e) {
      document
        .querySelector(".email-menu-sidebar")
        .classList.contains("menubar-show") &&
        (t ||
          document
            .querySelector(".email-menu-sidebar")
            .classList.remove("menubar-show"),
        (t = !1));
    }),
    favouriteBtn();
}
function checkBoxAll() {
  document
    .querySelectorAll(".checkbox-wrapper-mail input")
    .forEach(function (e) {
      e.addEventListener("click", function (e) {
        1 == e.target.checked
          ? e.target.closest("li").classList.add("active")
          : e.target.closest("li").classList.remove("active");
      });
    }),
    document
      .querySelectorAll(".checkbox-wrapper-mail input")
      .forEach(function (e) {
        e.addEventListener("click", function (e) {
          var t = document.querySelectorAll(".checkbox-wrapper-mail input"),
            l = document.getElementById("checkall"),
            a = document.querySelectorAll(
              ".checkbox-wrapper-mail input:checked"
            ).length;
          (l.checked = 0 < a),
            (l.indeterminate = 0 < a && a < t.length),
            e.target.closest("li").classList.contains("active"),
            (document.getElementById("email-topbar-actions").style.display =
              0 < a ? "block" : "none");
        });
      }),
    (document.getElementById("email-topbar-actions").style.display = "none"),
    checkall.addEventListener("click", function (l) {
      var a = document.querySelectorAll(".checkbox-wrapper-mail input");
      a.forEach(function (e) {
        e.checked = !0;
        var t = document.querySelectorAll(
          ".checkbox-wrapper-mail input:checked"
        ).length;
        (l.checked = 0 < t),
          (l.indeterminate = 0 < t && t < a.length),
          (e.checked = !0),
          e.parentNode.parentNode.parentNode.classList.add("active"),
          (document.getElementById("email-topbar-actions").style.display =
            0 < t ? "block" : "none");
      }),
        removeItems();
    });
}
getJSON("mail-list.init.json", function (e, t) {
  null !== e
    ? console.log("Something went wrong: " + e)
    : ((allmaillist = t[0].primary),
      (socialmaillist = t[0].social),
      (promotionsmaillist = t[0].promotions),
      loadMailData(allmaillist),
      loadSocialMailData(socialmaillist),
      loadPromotionsMailData(promotionsmaillist));
}),
  document.querySelectorAll(".mail-list a").forEach(function (a) {
    a.addEventListener("click", function () {
      var t,
        e,
        l = document.querySelector(".mail-list a.active");
      l && l.classList.remove("active"),
        a.classList.add("active"),
        a.querySelector(".mail-list-link").hasAttribute("data-type")
          ? ((t = a.querySelector(".mail-list-link").innerHTML),
            (e = allmaillist.filter((e) => e.labeltype === t)))
          : ((t = a.querySelector(".mail-list-link").innerHTML),
            (document.getElementById("mail-list").innerHTML = ""),
            (e =
              "All" != t
                ? allmaillist.filter((e) => e.tabtype === t)
                : allmaillist),
            (document.getElementById("mail-filter-navlist").style.display =
              "All" != t && "Inbox" != t ? "none" : "block")),
        loadMailData(e),
        favouriteBtn();
    });
  }),
  favouriteBtn(),
  ClassicEditor.create(document.querySelector("#email-editor"))
    .then(function (e) {
      e.ui.view.editable.element.style.height = "200px";
    })
    .catch(function (e) {
      console.error(e);
    });
var currentChatId = "users-chat";
function scrollToBottom(l) {
  setTimeout(function () {
    var e = document
        .getElementById(l)
        .querySelector("#chat-conversation .simplebar-content-wrapper")
        ? document
            .getElementById(l)
            .querySelector("#chat-conversation .simplebar-content-wrapper")
        : "",
      t = document.getElementsByClassName("chat-conversation-list")[0]
        ? document
            .getElementById(l)
            .getElementsByClassName("chat-conversation-list")[0].scrollHeight -
          window.innerHeight +
          750
        : 0;
    t && e.scrollTo({ top: t, behavior: "smooth" });
  }, 100);
}
function removeItems() {
  document
    .getElementById("removeItemModal")
    .addEventListener("show.bs.modal", function (e) {
      document
        .getElementById("delete-record")
        .addEventListener("click", function () {
          document.querySelectorAll(".message-list li").forEach(function (e) {
            var t, l;
            e.classList.contains("active") &&
              ((t = e.querySelector(".form-check-input").value),
              (allmaillist =
                ((l = t),
                allmaillist.filter(function (e) {
                  return e.id != l;
                }))),
              e.remove());
          }),
            document.getElementById("btn-close").click(),
            document.getElementById("email-topbar-actions") &&
              (document.getElementById("email-topbar-actions").style.display =
                "none"),
            (checkall.indeterminate = !1),
            (checkall.checked = !1);
        });
    });
}
scrollToBottom(currentChatId),
  removeItems(),
  (document.getElementById("unreadConversations").style.display = "none");
var markAllReadBtn = document.getElementById("mark-all-read");
markAllReadBtn.addEventListener("click", function (e) {
  0 === document.querySelectorAll(".message-list li.unread").length &&
    ((document.getElementById("unreadConversations").style.display = "block"),
    setTimeout(function () {
      document.getElementById("unreadConversations").style.display = "none";
    }, 1e3)),
    document.querySelectorAll(".message-list li.unread").forEach(function (e) {
      e.classList.contains("unread") && e.classList.remove("unread");
    });
});
var dummyUserImage = "/theme/assets/images/users/user-dummy-img.jpg",
  mailChatDetailElm = !1;
function emailDetailChange() {
  document.querySelectorAll(".message-list li").forEach(function (i) {
    i.addEventListener("click", function () {
      var e = i.querySelector(".subject-title").innerHTML;
      document.querySelector(".email-subject-title").innerHTML = e;
      var l = i.querySelector(".title-name").innerHTML;
      document.querySelectorAll(".accordion-item.left").forEach(function (e) {
        e.querySelector(".email-user-name").innerHTML = l;
        var t = i.querySelector(".mail-userimg").value;
        e.querySelector("img").setAttribute("src", t);
      });
      var t = document.querySelector(".user-name-text").innerHTML,
        a = document.querySelector(".header-profile-user").getAttribute("src");
      document.querySelectorAll(".accordion-item.right").forEach(function (e) {
        (e.querySelector(".email-user-name-right").innerHTML = t),
          e.querySelector("img").setAttribute("src", a);
      });
    });
  });
}
document.querySelectorAll(".email-chat-list a").forEach(function (a) {
  a.addEventListener("click", function (e) {
    (document.getElementById("emailchat-detailElem").style.display = "block"),
      (mailChatDetailElm = !0);
    var t = document.querySelector(".email-chat-list a.active");
    t && t.classList.remove("active"), this.classList.add("active");
    scrollToBottom("users-chat");
    var t = a.querySelector(".chatlist-user-name").innerHTML,
      l = a.querySelector(".chatlist-user-image img").getAttribute("src");
    (document.querySelector(
      ".email-chat-detail .profile-username"
    ).innerHTML = t),
      document
        .getElementById("users-conversation")
        .querySelectorAll(".left .chat-avatar")
        .forEach(function (e) {
          l
            ? e.querySelector("img").setAttribute("src", l)
            : e.querySelector("img").setAttribute("src", dummyUserImage);
        });
  });
}),
  document
    .getElementById("emailchat-btn-close")
    .addEventListener("click", function () {
      document.getElementById("emailchat-detailElem").style.display = "none";
    });
