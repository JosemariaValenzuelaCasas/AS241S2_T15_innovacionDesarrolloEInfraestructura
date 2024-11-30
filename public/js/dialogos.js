function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.showModal(); // Muestra el diálogo como modal
  }
  
  function closeDialog() {
    const dialogs = document.querySelectorAll("dialog");
    dialogs.forEach((dialog) => dialog.close()); // Cierra todos los diálogos
  }
  
  