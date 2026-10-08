"use strict";

console.log("validate.js is running");

// ---------- REGEX PATTERNS ----------

const patterns = {
  fullname: /^[A-Za-z ]{3,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i,
  phone: /^(17|77)\d{6}$/,
};

// ---------- ERROR DISPLAY HELPERS ----------

function showError(id, msg) {
  const span = document.getElementById("err-" + id);
  const field = document.getElementById(id);
  if (span) span.textContent = msg;
  if (field) field.classList.add("is-invalid");
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(function (s) {
    s.textContent = "";
  });
  document.querySelectorAll(".is-invalid").forEach(function (f) {
    f.classList.remove("is-invalid");
  });
}

// ---------- MAIN VALIDATION ----------

function validateForm(e) {
  clearErrors();
  let ok = true;

  // 1. Text fields: fullname, email, phone
  for (const field of ["fullname", "email", "phone"]) {
    const el = document.getElementById(field);
    const value = el ? el.value.trim() : "";
    if (!patterns[field].test(value)) {
      showError(field, "Invalid " + field);
      ok = false;
    }
  }

  // 2. Event dropdown: must not be placeholder
  const eventEl = document.getElementById("event_id");
  if (eventEl && eventEl.value === "") {
    showError("event_id", "Please choose an event");
    ok = false;
  }

  // 3. Food radio: at least one selected
  if (!document.querySelector("input[name='food']:checked")) {
    const foodErr = document.getElementById("err-food");
    if (foodErr) foodErr.textContent = "Select a food preference";
    ok = false;
  }

  // 4. Interests checkboxes: at least one selected
  const interests = document.querySelectorAll("input[name='interests']:checked");
  if (interests.length === 0) {
    const err = document.getElementById("err-interests");
    if (err) err.textContent = "Choose at least one interest";
    ok = false;
  }

  // 5. Final decision
  if (!ok) {
    e.preventDefault();
    alert("Please fix the errors.");
  } else {
    e.preventDefault(); // still no server in this practical
    alert("Looks good. In Practical V this will be saved on the server.");
  }
  return ok;
}

// ---------- BOOT ----------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("regForm");
  if (form) {
    form.addEventListener("submit", validateForm);
  }

  // Phone: strip non-digits and cap length at 8
  const phone = document.getElementById("phone");
  if (phone) {
    phone.addEventListener("input", function () {
      phone.value = phone.value.replace(/[^\d]/g, "").slice(0, 8);
    });
  }
});