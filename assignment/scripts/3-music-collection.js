console.log('***** Music Collection *****')
let collection = [];

/**
 * Creates an object using given parameters, logs it, and adds to the global collection array.
 * @param {string} title Title of album object being created and added to collection array.
 * @param {string} artist Name of artist for object being added to collection array. 
 * @param {string} yearPub Publishing year of album object being added to collection array.
 * @param {object[]} tracks Array of track objects being added to album object with name and dur variables for title name and song duration respectively.
 */
function addToCollection ( title, artist, yearPub, tracks ) {
    const album = {
        title: title,
        artist: artist,
        year: yearPub,
        tracks: tracks
    }
    console.log(`Album added to array: ${album}`);
    collection.push (album);
    return album;
}

/**
 * Finds matching artist names by comparing to string parameter. Logs results.
 * @param {string} artist A string that contains the name of the artist that is being compared to the artist field in all album objects within the collections array.
 * @returns An array of all albums found that match given artist name.
 */
function findByArtist ( artist ) {
    let albumsFound = [];
    for (albumInd in collection) {
    let album = collection[albumInd];
    if (album.artist == artist) {
        console.log(`${album.title} by ${album.artist}, published in ${album.year}`);
        albumsFound.push(album);
    } else if (albumInd == collection.length - 1) {
        console.log (`${artist} not found in collection.`);
    }
  }
  return albumsFound;
}

//The assignment is ambiguous on if it wants *ANY* or *ALL* search criteria matched
/**
 * Compares the artist, year, and track variables of an object to those of all objects within the collection array.
 * @param {*} searchAlbum 
 * @returns An array of matching albums within album collection. If no albums match any search criteria, returns an empty array. If passed an undefined parameter OR an object with undefined variables, returns the entire collection array.
 */
function search ( searchAlbum = {artist, year, track} ) {
    let result = [];
    let artist = searchAlbum.artist;
    let year = searchAlbum.year;
    let track = searchAlbum.track;
    if (searchAlbum == undefined
        || (searchAlbum.artist == undefined
            && searchAlbum.year == undefined
            && track == undefined)) {
        return collection;
    }
    for (album of collection) {
        if (artist == album.artist || year == album.year) {
            result.push(album);
        } else {
            for (albumTrack of album.tracks) {
                 if (albumTrack.name == track) {
                     result.push(album);
                }
            }
        }
    }
    return result;
}

/**
 * Logs the contents of the provided array.
 */
function showCollection(albums) {
    console.log(`Total albums in collection: ${albums.length}`);
    for (album of albums) {
        console.log(`${album.title} by ${album.artist}, published in ${album.year}`);
        for (let i = 1; i <= album.tracks.length; i++) {
            track = album.tracks[i-1];
            console.log(`${i}. ${track.name}: ${track.dur}`)
        }
    }
    console.log('End of collection.');
}

addToCollection('In the Court of the Crimson King', 'King Crimson', 1969,
[{name: '21st Century Schizoid Man', dur: '7:24'},
{name: 'I Talk to the Wind', dur: '6:04'},
{name: 'Epitaph', dur: '8:49'},
{name: 'Moon Child', dur: '12:13'},
{name: 'The Court of the Crimson King', dur: '9:26'}]);

addToCollection('No Parking on the Dance Floor', 'Midnight Star', 1983,
[{name: 'Electricity', dur: '6:58'},
{name: 'Night Rider', dur: '4:40'},
{name: 'Feels So Good', dur: '4:23'},
{name: 'Wet My Whistle', dur: '5:06'},
{name: 'No Parking (On the Dance Floor)', dur: '4:27'},
{name: 'Freak-A-Zoid', dur: '8:06'},
{name: 'Slow Jam', dur: '4:17'},
{name: 'Playmates', dur: '4:10'}]);

addToCollection('Vagabond Dreams', 'St. Cinder', 2015,
[{name: 'Uncle Vern Might Wear Wool', dur: '5:34'},
{name: 'Van Leaving Blue', dur: '3:11'},
{name: 'Hot Tamales', dur: '3:31'},
{name: 'Double Yellow Blues', dur: '4:34'},
{name: 'Greenbelt Blues', dur: '3:48'},
{name: 'You Ain\'t No City Dog', dur: '5:23'},
{name: 'Hesitation Blues', dur: '4:03'},
{name: 'Lament of a Would be Dictator', dur: '4:08'},
{name: 'El Paso Song', dur: '3:48'},
{name: 'Patchwork Soul', dur: '3:14'},
{name: 'For Lack of Words', dur: '5:00'},
{name: 'Rioter\'s Lament', dur: '4:11'}]);

addToCollection('Mystery Girl', 'Roy Orbison', 1989,
[{name: 'You Got It', dur: '3:30'},
{name: 'In the Real World', dur: '3:44'},
{name: '(All I Can Do Is) Dream You', dur: '3:39'},
{name: 'A Love So Beautiful', dur: '3:33'},
{name: 'California Blue', dur: '3:57'},
{name: 'She\'s a Mystery to Me', dur: '4:16'},
{name: 'The Comedians', dur: '3:26'},
{name: 'The Only One', dur: '3:55'},
{name: 'Windsurfer', dur: '4:01'},
{name: 'Careless Heart', dur: '4:08'}]);

addToCollection('32 Oz to Failure', 'The Antidont\'s', 2014, 
[{name: 'Shit the Bed', dur: '1:14'},
{name: 'I Will Not Be A Blind Pass Casualty', dur: '1:54'},
{name: 'Bosch', dur: '1:23'},
{name: 'Safety... Always Off', dur: '1:30'},
{name: 'Baby Calls the Shots', dur: '2:12'},
{name: 'The Thirst', dur: '1:21'},
{name: 'You\'ve Been Smoochin With Everybody', dur: '1:00'},
{name: 'Nation in Distress', dur: '0:48'},
{name: 'Come on Vacation, Leave on Probation', dur: '1:18'},
{name: 'Don\'t Worm Our Chicks', dur: '1:16'},
{name: 'Parking Lot', dur: '1:35'},
{name: 'Fuck Your Institution', dur: '1:04'}]);

addToCollection('Desire', 'Spazzkid', 2013,
[{name: 'Getting To Know You', dur: '5:00'},
{name: 'Kokeshi Doll', dur: '5:25'},
{name: '40 Winks', dur: '4:46'},
{name: 'Forgiveness', dur: '4:30'},
{name: 'Loving Free', dur: '5:24'},
{name: 'Candy Flavored Lips (ft. Skymarines)', dur: '4:54'},
{name: 'Marquez', dur: '5:23'},
{name: 'If Not You, Then Who?', dur: '6:29'}]);

showCollection(collection);

findByArtist('Spazzkid');
findByArtist('David Bowie');

console.log(search({artist: 'King Crimson', year: 1969}));
console.log(search({artist: 'King Crimson', year: 2015}));
console.log(search({artist: 'King Crimson'}));
console.log(search({year: 2015}));
console.log(search({track: 'Electricity'}));
console.log(search({artist: 'David Bowie'}));
console.log(search({}));
