'use strict'


//let myRoot = document.getElementById('root');

class Movie {
    constructor(title, director) {

        this.title = title;
        this.director = director;
        this.stars = [];
        this.writers = [];
        this.ratings = [];
        

       
    }

    getTitle() {
        return this.title;
    }

    getDirector() {
        return this.director;
    }

    addStar(star) {
        this.stars.push(star);

    }

    getStars() {
        return this.stars;
    }

    addWriter(writer) {
        this.writers.push(writer);
      
    }

    getWriters() {
        return this.writers;
      
    }

    addRating(rating) {
        this.ratings.push(rating);
      
    }

    getAverageRating() {
        let sumOfRatings = 0;
        for (let i = 0; i < this.ratings.length; i++) {
            sumOfRatings += this.ratings[i];
        }
        let AverageRating = sumOfRatings / this.ratings.length;
            return AverageRating;
        
    }

    // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.movies = [];

    
    }

    addMovie(movie) {
        this.movie.push(movie);
     
    }

    getName() {
        return this.name;
        
    }

    getRole() {
        return this.role;

    }

    getAge() {
        let now = new Date();
       // let birthDate = this.dateOfBirth;
        let age = now.getFullYear() - this.dateOfBirth;
        return age;
      
    }
}

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie("viva Zapata" , "Elia_Kazan");

const firstActor = new StaffMember("Marlon Brando" , "Zapata" , 1924-4-3 );
myMovie.addStar(firstActor);

const firstActress = new StaffMember("Jean Peters", "Josefa Zapata", 1926-10-15 );
myMovie.addStar(firstActress);

const secondActor = new StaffMember("Anthony Quinn", "Eufemio Zapata", 1915-4-21 );
myMovie.addStar(secondActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${myMovie.getDirector()}`);

myMovie.addRating(8.5);
myMovie.addRating(9.9);

console.log(`The Average Rating for ${myMovie.getTitle().toUpperCase()} is ${myMovie.getAverageRating()}`);



    // for (let i = 0; i < Movie.length; i++) {
    //     let Id = Movie[i];
    //     let myUl = document.createElement('ul');
    //     let myLi = document.createElement('li');
    //     let myH3 = document.createElement('h3');
    //     let myH4 = document.createElement('h4');
    //     let myP = document.createElement('p');

    //     myUl.appendChild(myLi);
    //     myLi.appendChild(myP);
    //     myLi.appendChild(myH3);
    //     myLi.appendChild(myH4);
    //     myRoot.appendChild(myUl);
    //     myH3.innerHTML = myMovie.getTitle();
    //     let myImg = document.createElement('img');
    //     myImg.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjU5ZDIwNDQtYWVhOC00ZmFmLWIyYmItMTQ1ZjljYzNhYmRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg');
    //     myLi.appendChild(myImg);

    //     myH4.innerHTML = "Director : " + myMovie.getDirector();
    //     myP.innerHTML = "The stars of this movie are: " + myMovie.getStars();
    // }

