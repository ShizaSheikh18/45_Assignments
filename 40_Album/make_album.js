//make function
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    //condition
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    //return
    return album;
}
//recall function
var album1 = make_album(' Atist 1', 'Album title 1');
console.log(album1);
var album2 = make_album(' Atist 2', 'Album title 2');
console.log(album2);
var album3 = make_album(' Atist 3', 'Album title 3', 12);
console.log(album3);
