console.log('***** Music Collection *****')
let collection = [];

function addToCollection ( title, artist, yearPub ) {
    const album {
        title: title,
        artist: artist,
        yearPublished: yearPub
    }
    collection.push (album);
}

function showCollection() {
    console.log(`Total albums in collection: ${collection.length}`);
    for (album of collection) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPub}`);
    }
}