const menu = document.querySelector(".menu"),
  nav = document.querySelector(".links");
menu.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(opened));
  menu.textContent = opened ? "Close" : "Menu";
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "Menu";
  }),
);
function download(name, text) {
  const url = URL.createObjectURL(
    new Blob([text], { type: "text/plain;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
document.getElementById("flavor-brief")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  download(
    "Ascend-Flavor-Development-Brief.txt",
    "ASCEND FLAVOR LABS\nDEVELOPMENT BRIEF\n\nConcept: " +
      data.get("concept") +
      "\nDate: " +
      new Date().toLocaleDateString() +
      "\n\nDesired profile and application:\n" +
      data.get("profile"),
  );
  document.getElementById("brief-status").textContent =
    "Your brief has been downloaded.";
});
