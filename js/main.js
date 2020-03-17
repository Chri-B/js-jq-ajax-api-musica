// SCOPO DEL GIOCO: Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.

var source = $("#card-template").html();
var templateCard = Handlebars.compile(source);

$.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data) {
        var music = data.response;
        for (var i = 0; i < music.length; i++) {
            var album = music[i];
            console.log(album);
            var albumTemplate = {
                author: album.author,
                genre: album.genre,
                albumImg: album.poster,
                albumTitle: album.title,
                albumYear: album.year
            }
            var dataCard = templateCard(albumTemplate);
            $('.card-container').append(dataCard);
        }
    },
    error: function() {
        alert('qualcosa è andato storto');
    }
});
