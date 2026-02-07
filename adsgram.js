let adsgramController = null;

document.addEventListener("DOMContentLoaded", () => {
  if (window.Adsgram) {
    adsgramController = window.Adsgram.init({
      blockId: 22286
    });
    console.log("Adsgram hazır");
  } else {
    console.error("Adsgram yüklenmedi");
  }
});

function showAdAndReward(onSuccess) {
  if (!adsgramController) {
    alert("Reklam henüz hazır değil");
    return;
  }

  adsgramController.show()
    .then(() => {
      console.log("Reklam izlendi");
      if (onSuccess) onSuccess();
    })
    .catch(err => {
      console.log("Reklam kapatıldı / hata", err);
    });
}
