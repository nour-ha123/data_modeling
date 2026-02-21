function creerLivre(titre, auteurs, prix,genre,nombreDePages,description) {
    return {
        titre : titre,
        auteurs: auteurs,
        prix: prix,
        genre:genre,
        nombreDePages:nombreDePages,
        description:description
    }

}

function afficherLivre(livre) {
    return "titre : " + titre + " auteurs : " + auteurs + " prix : " + prix + " genre : " + genre + " nombreDePages : " + nombreDePages + " description : " + description
}

var livres = [livre1, livre2, livre3, livre4];

function afficherTousLesLivres(livres) {
    var affichage = "";
    for (var i = 0; i < afficherTousLesLivres.length; i++) {
    affichage = affichage + i + ": " + afficherLivre(afficherTousLesLivres[i]) + "\n";
    }
    console.log (affichage);
}

// excercices films
function creerFilm(titre, realisateur, duree, dateSortie, acteurs, studios, resume, note) {
    return {
        titre: titre,
        realisateur: realisateur,
        duree: duree,
        dateSortie: dateSortie,
        acteurs: acteurs,
        studios: studios,
        resume: resume,
        note: note
    }
}

function afficherFilm(film) {
    return "titre : " + titre + " realisateur : " + realisateur + " duree : " + duree + " dateSortie : " + dateSortie + " studios : " + studios + " resume : " + resume + " note :" + note
}

function afficherCasting(film) {
    var resultat = "";
    for (var i = 0; i < film.acteurs.length; i++) {
      resultat += film.acteurs[i].role + " : " + film.acteurs[i].nom;
    }
    return resultat;
  }

var films = [film1, film2, film3];

function afficherTousLesFilms(films) {
    var affichage = "";
    for (var i = 0; i < afficherTousLesFilms.length; i++) {
    affichage = affichage + i + ": " + afficherFilm(afficherTousLesFilms[i]) + "\n";
    }
    console.log (affichage);
}