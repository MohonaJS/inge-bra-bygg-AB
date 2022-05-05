function formatDate(e) {
  var t = new Date(e),
    a =
      "" +
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ][t.getMonth()],
    e = "" + t.getDate(),
    t = t.getFullYear();
  return (
    a.length < 2 && (a = "0" + a),
    [(e = e.length < 2 ? "0" + e : e) + " " + a, t].join(", ")
  );
}
var checkAll = document.getElementById("checkAll");
checkAll &&
  (checkAll.onclick = function () {
    var e = document.querySelectorAll('.form-check-all input[type="checkbox"]');
    1 == checkAll.checked
      ? e.forEach(function (e) {
          (e.checked = !0), e.closest("tr").classList.add("table-active");
        })
      : e.forEach(function (e) {
          (e.checked = !1), e.closest("tr").classList.remove("table-active");
        });
  });
var perPage = 8,
  options = {
    valueNames: [
      "id",
      "name",
      "company_name",
      "date",
      "leads_score",
      "phone",
      "location",
    ],
    page: perPage,
    pagination: !0,
    plugins: [ListPagination({ left: 2, right: 2 })],
  },
  leadsList = new List("leadsList", options).on("updated", function (e) {
    0 == e.matchingItems.length
      ? (document.getElementsByClassName("noresult")[0].style.display = "block")
      : (document.getElementsByClassName("noresult")[0].style.display = "none");
    var t = 1 == e.i,
      a = e.i > e.matchingItems.length - e.page;
    document.querySelector(".pagination-prev.disabled") &&
      document
        .querySelector(".pagination-prev.disabled")
        .classList.remove("disabled"),
      document.querySelector(".pagination-next.disabled") &&
        document
          .querySelector(".pagination-next.disabled")
          .classList.remove("disabled"),
      t && document.querySelector(".pagination-prev").classList.add("disabled"),
      a && document.querySelector(".pagination-next").classList.add("disabled"),
      e.matchingItems.length <= perPage
        ? (document.querySelector(".pagination-wrap").style.display = "none")
        : (document.querySelector(".pagination-wrap").style.display = "flex"),
      0 < e.matchingItems.length
        ? (document.getElementsByClassName("noresult")[0].style.display =
            "none")
        : (document.getElementsByClassName("noresult")[0].style.display =
            "block");
  });
const xhttp = new XMLHttpRequest();
(xhttp.onload = function () {
  JSON.parse(this.responseText).forEach(function (e) {
    leadsList.add({
      id:
        '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ' +
        e.id +
        "</a>",
      name: e.name,
      company_name: e.company_name,
      date: formatDate(e.date),
      leads_score: e.leads_score,
      phone: e.phone,
      location: e.location,
    }),
      leadsList.sort("id", { order: "desc" }),
      refreshCallbacks();
  }),
    leadsList.remove(
      "id",
      '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a>'
    );
}),
  xhttp.open("GET", "/theme/assets/json/leads-list.json"),
  xhttp.send(),
  (isCount = new DOMParser().parseFromString(
    leadsList.items.slice(-1)[0]._values.id,
    "text/html"
  ));
var isValue = isCount.body.firstElementChild.innerHTML,
  idField = document.getElementById("id-field"),
  customerNameField = document.getElementById("customername-field"),
  company_nameField = document.getElementById("company_name-field"),
  dateField = document.getElementById("date-field"),
  leads_scoreField = document.getElementById("leads_score-field"),
  phoneField = document.getElementById("phone-field"),
  locationField = document.getElementById("location-field"),
  addBtn = document.getElementById("add-btn"),
  editBtn = document.getElementById("edit-btn"),
  removeBtns = document.getElementsByClassName("remove-item-btn"),
  editBtns = document.getElementsByClassName("edit-item-btn");
refreshCallbacks(),
  document
    .getElementById("showModal")
    .addEventListener("show.bs.modal", function (e) {
      e.relatedTarget.classList.contains("edit-item-btn")
        ? ((document.getElementById("exampleModalLabel").innerHTML =
            "Edit Lead"),
          (document
            .getElementById("showModal")
            .querySelector(".modal-footer").style.display = "block"),
          (document.getElementById("add-btn").style.display = "none"),
          (document.getElementById("edit-btn").style.display = "block"))
        : e.relatedTarget.classList.contains("add-btn")
        ? ((document.getElementById("exampleModalLabel").innerHTML =
            "Add Lead"),
          (document
            .getElementById("showModal")
            .querySelector(".modal-footer").style.display = "block"),
          (document.getElementById("edit-btn").style.display = "none"),
          (document.getElementById("add-btn").style.display = "block"))
        : ((document.getElementById("exampleModalLabel").innerHTML =
            "List Lead"),
          (document
            .getElementById("showModal")
            .querySelector(".modal-footer").style.display = "none"));
    }),
  ischeckboxcheck(),
  document
    .getElementById("showModal")
    .addEventListener("hidden.bs.modal", function () {
      clearFields();
    }),
  document.querySelector("#leadsList").addEventListener("click", function () {
    refreshCallbacks(), ischeckboxcheck();
  });
var table = document.getElementById("customerTable"),
  tr = table.getElementsByTagName("tr"),
  trlist = table.querySelectorAll(".list tr"),
  count = 11;
function ischeckboxcheck() {
  document.getElementsByName("checkAll").forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.target.checked
        ? e.target.closest("tr").classList.add("table-active")
        : e.target.closest("tr").classList.remove("table-active");
    });
  });
}
function refreshCallbacks() {
  removeBtns.forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.target.closest("tr").children[1].innerText,
        (itemId = e.target.closest("tr").children[1].innerText),
        leadsList.get({ id: itemId }).forEach(function (e) {
          deleteid = new DOMParser().parseFromString(e._values.id, "text/html");
          var t = deleteid.body.firstElementChild;
          deleteid.body.firstElementChild.innerHTML == itemId &&
            document
              .getElementById("delete-record")
              .addEventListener("click", function () {
                leadsList.remove("id", t.outerHTML),
                  document.getElementById("deleteRecordModal").click();
              });
        });
    });
  }),
    editBtns.forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.target.closest("tr").children[1].innerText,
          (itemId = e.target.closest("tr").children[1].innerText),
          leadsList.get({ id: itemId }).forEach(function (e) {
            isid = new DOMParser().parseFromString(e._values.id, "text/html");
            var t = isid.body.firstElementChild.innerHTML;
            t == itemId &&
              ((idField.value = t),
              (customerNameField.value = e._values.name),
              (company_nameField.value = e._values.company_name),
              (dateField.value = e._values.date),
              (leads_scoreField.value = e._values.leads_score),
              (phoneField.value = e._values.phone),
              (locationField.value = e._values.location),
              flatpickr("#date-field", {
                dateFormat: "d M, Y",
                defaultDate: e._values.date,
              }));
          });
      });
    });
}
function clearFields() {
  (customerNameField.value = ""),
    (company_nameField.value = ""),
    (dateField.value = ""),
    (leads_scoreField.value = ""),
    (phoneField.value = ""),
    (locationField.value = "");
}
function deleteMultiple() {
  if (
    ((ids_array = []),
    document.getElementsByName("chk_child").forEach(function (e) {
      1 == e.checked &&
        ((e = e.parentNode.parentNode.parentNode.querySelector(".id a")
          .innerHTML),
        ids_array.push(e));
    }),
    "undefined" != typeof ids_array && 0 < ids_array.length)
  ) {
    if (!confirm("Are you sure you want to delete this?")) return !1;
    ids_array.forEach(function (e) {
      leadsList.remove(
        "id",
        `<a href="javascript:void(0);" class="fw-medium link-primary">${e}</a>`
      );
    }),
      (document.getElementById("checkAll").checked = !1);
  } else
    Swal.fire({
      title: "Please select at least one checkbox",
      confirmButtonClass: "btn btn-info",
      buttonsStyling: !1,
      showCloseButton: !0,
    });
}
addBtn.addEventListener("click", function (e) {
  "" !== customerNameField.value &&
    "" !== company_nameField.value &&
    "" !== dateField.value &&
    "" !== leads_scoreField.value &&
    "" !== phoneField.value &&
    "" !== locationField.value &&
    (leadsList.add({
      id:
        '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ' +
        count +
        "</a>",
      name: customerNameField.value,
      company_name: company_nameField.value,
      date: formatDate(dateField.value),
      leads_score: leads_scoreField.value,
      phone: phoneField.value,
      location: locationField.value,
    }),
    leadsList.sort("id", { order: "desc" }),
    document.getElementById("close-modal").click(),
    clearFields(),
    refreshCallbacks(),
    count++,
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Lead inserted successfully!",
      showConfirmButton: !1,
      timer: 2e3,
      showCloseButton: !0,
    }));
}),
  editBtn.addEventListener("click", function (e) {
    (document.getElementById("exampleModalLabel").innerHTML = "Edit Contact"),
      leadsList.get({ id: idField.value }).forEach(function (e) {
        (isid = new DOMParser().parseFromString(e._values.id, "text/html")),
          isid.body.firstElementChild.innerHTML == itemId &&
            e.values({
              id:
                '<a href="javascript:void(0);" class="fw-medium link-primary">' +
                idField.value +
                "</a>",
              name: customerNameField.value,
              company_name: company_nameField.value,
              date: formatDate(dateField.value),
              leads_score: leads_scoreField.value,
              phone: phoneField.value,
              location: locationField.value,
            });
      }),
      document.getElementById("close-modal").click(),
      clearFields(),
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Lead updated Successfully!",
        showConfirmButton: !1,
        timer: 2e3,
        showCloseButton: !0,
      });
  }),
  document
    .querySelector(".pagination-next")
    .addEventListener("click", function () {
      !document.querySelector(".pagination.listjs-pagination") ||
        (document
          .querySelector(".pagination.listjs-pagination")
          .querySelector(".active") &&
          document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active")
            .nextElementSibling.children[0].click());
    }),
  document
    .querySelector(".pagination-prev")
    .addEventListener("click", function () {
      !document.querySelector(".pagination.listjs-pagination") ||
        (document
          .querySelector(".pagination.listjs-pagination")
          .querySelector(".active") &&
          document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active")
            .previousSibling.children[0].click());
    });
