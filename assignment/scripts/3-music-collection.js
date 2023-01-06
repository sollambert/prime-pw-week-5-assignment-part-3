console.log('***** Music Collection *****')
let collection = [];

function addToCollection ( title, artist, yearPub ) {
    const album = {
        title: title,
        artist: artist,
        year: yearPub
    }
    collection.push (album);
}

function showCollection() {
    console.log(`Total albums in collection: ${collection.length}`);
    for (album of collection) {
        console.log(`${album.title} by ${album.artist}, published in ${album.year}`);
    }
    console.log('End of collection.');
}

function findByArtist ( artist ) {
  for (albumIn in collection) {
    let album = collection[albumIn];
    if (album.artist == artist) {
        console.log(`${album.title} by ${album.artist}, published in ${album.year}`);
    } else if (albumIn == collection.length - 1) {
        console.log (`${artist} not found in collection.`);
    }
  }
}

//The assignment is ambiguous on if it wants *ANY* or *ALL* search criteria matched
function search ( searchAlbum = {artist, year} ) {
    let result = [];
    let artist = searchAlbum.artist;
    let year = searchAlbum.year;
    if (searchAlbum == undefined || (searchAlbum.artist == undefined && searchAlbum.year == undefined)) {
        return collection;
    }
    for (album of collection) {
        if (artist == album.artist || year == album.year) {
            result.push(album);
        }
    }
    return result;
}

addToCollection('In the Court of the Crimson King', 'King Crimson', 1969);
addToCollection('No Parking on the Dance Floor', 'Midnight Star', 1983);
addToCollection('Vagabond Dreams', 'St. Cinder', 2015);
addToCollection('Mystery Girl', 'Roy Orbison', 1989);
addToCollection('32Oz to Failure', 'The Antidont\'s', 2014);
addToCollection('Desire', 'Spazzkid', 2013);

showCollection();

findByArtist('Spazzkid');
findByArtist('David Bowie');

console.log(search({artist: 'King Crimson', year: 1969}));
console.log(search({artist: 'King Crimson', year: 2015}));
console.log(search({artist: 'King Crimson'}));
console.log(search({year: 2015}));
console.log(search({}));
