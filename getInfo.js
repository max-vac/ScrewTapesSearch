const fs = require('fs');

let sortData = function(array, album, chapter, disc) {
  let albumInfo = [];

  for (let i = 0; i < array.length; i++) {
    let artistSub = array[i].substring(array[i].indexOf('(') + 1, array[i].length - 1);
    let title = array[i].substring(array[i].indexOf(' ') + 1, array[i].indexOf('-'));

    title = capTitle(title)

    let artists = capArtists(artistSub);
    let track = getTrack(array[i]);

    let result = {album: album,
                chapter: chapter,
                disc: disc,
                title: title,
                artists: artists,
                track: track
              }
    albumInfo.push(JSON.stringify(result));

  }
  return albumInfo;
}

let getTrack = function(string) {
  let track = string.substring(0, string.indexOf('.'));

  return track;
}

let capTitle = function(string) {
  string = string.toLowerCase().split(' ');

  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return string.join(' ');
};

let capArtists = function(array) {
  array = array.split(',');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(' ');
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = array[i][j].charAt(0).toUpperCase() + array[i][j].substring(1).toLowerCase();
    }
    array[i] = array[i].join(' ')
  }
  return array
};

data = sortData(["1. FUCK THEM NIGGAS-(LIL TROY)",

  "2. SUPERSTAR-(FAT PAT, MIKE D, BILLY COOK)",

  "3. FREESTYLE-(FAT PAT, SNOOP)",

  "4. JAMMIN SCREW-(FAT PAT)",

  "5. SHOUT OUT_SCREW ON THE TABLES-(FAT PAT, DJ SCREW)",

  "6. HEAD & SHOULDAZ-(FAT PAT, CHICKEN HAWK, D GOTTI, NOKE D, SEAN PYMP)",

  "7. MONEY’S JUST A TOUCH AWAY-(MACK 10, GERALD LEVERT)",

  "8. PEEPIN ME-(FAT PAT,LIL KEKE, RONNIE SPENCER)",

  "9. IF U ONLY KNEW-(FAT PAT)",

  "10. DO U LIKE WHAT U SEE-(FAT PAT, BIG POKEY)"], "Southside Still Holdin'", 101, 1);




fs.writeFile('screwTapeInfo.json', data, (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('succeful')
  }
});



