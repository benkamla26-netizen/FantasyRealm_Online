{
    const modal = document.getElementById("modal-personnage");

    modal.addEventListener("show.bs.modal", (event) => {
        // Le bouton sur lequel on a cliqué
        const bouton = event.relatedTarget;

        // data-nom devient dataset.nom, data-createur devient dataset.createur, etc.
        const nom = bouton.dataset.nom;

        document.getElementById("modal-personnage-titre").textContent = nom;
        document.getElementById("modal-personnage-createur").textContent = bouton.dataset.createur;
        document.getElementById("modal-personnage-genre").textContent = bouton.dataset.genre;

        const image = document.getElementById("modal-personnage-image");
        image.src = bouton.dataset.image;
        image.alt = nom;

        modal.querySelectorAll('input[name="note"]').forEach((radio) => radio.checked = false);
    });
}
