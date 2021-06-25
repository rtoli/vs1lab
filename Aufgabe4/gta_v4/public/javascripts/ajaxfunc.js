document.getElementById("submit").addEventListener("click", function(){

})

var setTag = function(lat, long, n, hash) {
    var req = XMLHttpRequest();
    var url = 'https://localhost:3000/tagging';
    var latitude = lat;
    var longitude = long;
    var name = n;
    var hashtag = hash;

    var data = JSON.stringify({
        latitude: latitude,
        longitude: longitude,
        name: name,
        hashtag: hashtag
    });

    req.open('POST', url, true);
    req.onload = function() {
        var response = JSON.parse(req.responseText);
        console.log(response);
    }
}