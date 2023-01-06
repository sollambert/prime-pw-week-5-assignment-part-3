console.log('***** Music Collection *****')
let collection = [];

function addToCollection ( title, artist, yearPub ) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPub
    }
    collection.push (album);
}

function showCollection() {
    console.log(`Total albums in collection: ${collection.length}`);
    for (album of collection) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

addToCollection('In the Court of the Crimson King', 'King Crimson', '1969');
addToCollection('No Parking on the Dance Floor', 'Midnight Star', '1983');
addToCollection('Vagabond Dreams', 'St. Cinder', '2015');
addToCollection('Mystery Girl', 'Roy Orbison', '1989');
addToCollection('32Oz to Failure', 'The Antidont\'s', '2014');
addToCollection('Desire', 'Spazzkid', '2013');

showCollection();