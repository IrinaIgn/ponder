$(function(){

    // function getWeather()
    // {
    //   $.get("http://api.openweathermap.org/data/2.5/forecast?zip=90401,us&APPID=21fcff90ee254edd442c00e3b412cf11&units=imperial", function(response) {
    //     // console.log(response);
    //
    //       for(index in response.list) {
    //
    //             var list = response.list[index];
    //             var temp = '+' + list.main.temp + '°';
    //             $('#temperatura').append(temp);
    //       };
    //   });
    // };

    function getNews()
    {
    $.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aa0855bda6384ff9acab08adbc06e02c", function(response) {
        console.log(response);

        for(index in response.articles) {

            var article = response.articles[index];
            // console.log(article);

            var s = '';
            s += `
                <!-- Small Card With Image -->
                <div class="card card_small_with_image grid-item">
                <img class="card-img-top" src="` + article.urlToImage + `" alt="` +  article.title + `">
                <div class="card-body">
                  <div class="card-title card-title-small"><a href="` + article.url + `" target="_blank">` +  article.title + `</a></div>
                  <small class="post_meta"><a href="">` + article.author + `</a><span>` + article.publishedAt + `</span></small>
                </div>
                </div>
            `;

            $('#one').append(s);
        };
    }); //api
  };


    // getWeather();
    getNews();

});// onload
