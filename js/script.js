// {
// "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
// "title": "New Jersey",
// "author": "Bon Jovi",
// "genre": "Rock",
// "year": "1988"
// }
var music = new Vue ({
  el : '#root',
  data: {
    albums: []
  },
  methods: {},
  mounted: function() {
    var self = this
    axios .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function (response) {
      self.albums = response.data.response;
    })
  }
});
