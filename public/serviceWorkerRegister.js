if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((registration) => {
      console.log("SW Registered!");
      console.log(registration.scope);
    })
    .catch((error) => {
      console.log("SW Registration Failed!");
      console.log(error);
    });
}
