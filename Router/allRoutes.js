
// Toutes les routes de mon applications

import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/personnages", "Personnages", "/pages/personnages.html", "/js/personnages.js"),
    new Route("/maker", "Maker", "/pages/maker.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "FantasyRealm Online";