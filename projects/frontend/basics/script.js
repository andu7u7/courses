document.addEventListener("DOMContentLoaded", () => {
  const btnOpenDialog = document.getElementById("opendialog");
  const btnCloseDialog = document.getElementById("closedialog");
  const dialog = document.getElementById("dialog");

  btnCloseDialog.addEventListener("click", () => {
    dialog.close();
  });

  btnOpenDialog.addEventListener("click", () => {
    dialog.showModal();
  });
});
