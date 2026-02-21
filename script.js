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

function correspondLivre(recherche, livres) {
    return livres.includes(recherche);
}

function rechercherLivres(recherche, livres) {
    var result = []
    for(var i =0; i<= livres.length; i++) {
        if (correspondLivre(recherche, livres[i]) === true) {
            result.push(livres[i]);
        }
    }
    return result
}

function supprimerLivre(titre, livres) {
    for (var i = 0; i < livres.length; i++) {
        if (livres[i].nom === titre) {
            return  livres.splice(i, 1);
        }
    }
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

function moyenneDuree(films) {
    var result = 0;
    for (var i = 0; i < films.length; i++) {
        result = result + films[i].duree;
    }
    return result / films.length;
}

function moyenneNote(films) {
    var result = 0;
    for (var i = 0; i < films.length; i++) {
        result = result + films[i].note;
    }
    return result / films.length;
}

function correspondFilm(recherche, film) {
    return film.includes(recherche);
}

function rechercherFilms(recherche, films) {
    var result = []
    for(var i =0; i<= films.length; i++) {
        if (correspondFilm(recherche, films[i]) === true) {
            result.push(films[i]);
        }
    }
    return result
}
