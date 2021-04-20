var form = document.getElementById("data");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Bien enregistré!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Il y a un problème avec ton formulaire!"
      });
    }
    form.addEventListener("submit", handleSubmit)