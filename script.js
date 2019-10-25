var app = new Vue({
  el: '#app',
  data: {
    seen1: true,
    seen2: false,
    seen3: false,
    seaGoat: false,
    cities: [],
    prefix: '',
    prefix2: '',
    prefix3: '',
    answer1: 0,
    answer2: 0,
    answer3: 0,
  },
  methods: {
    initilize:function(){
      console.log("I'm alive. Just tidying up here.");
      
      
      /*
      var expr = {
    "expr": [
      "a = 1.2 * (2 + 4.5)",
      "a / 2",
      "5.08 cm in inch",
      "sin(45 deg) ^ 2",
      "9 / 3 + 2i",
      "b = [-1, 2; 3, 1]",
      "det(b)"
    ],
    "precision": 14
  }

  .ajax({
    type: 'POST',
    url: '/v4/',
    data: expr,
    contentType: 'text/plain',
    success: function (result) {
      alert(JSON.stringify(result, null, 2))
    },
    error: function (resp) {
      alert('Error: ' + resp.responseText)
    }
  })*/
      
      //fetch('http://api.mathjs.org/v4/?expr=2*(7-3)')
      //.then((resp) => this.answer1)
      
      /*
      fetch('http://api.mathjs.org/v4/?expr=2*(7-3)')
.then((res) => {
      console.log(res.text());
      return res.text();
})
.then((data) => this.answer1);*//*{
     this.answer1.html(data);
});*/
      /*
      .then(function(data){
        console.log(data.result);
        let answer1b = data.result;
      });*/
        
        
      this.answer1 = 23;
      this.answer2 = 15;
      this.answer3 = 9;
      
      
    },
    
    fetchREST() {
      console.log("In Fetch " + this.prefix + " - " + this.answer1 + " " + this.answer2 + " " + this.answer3);
      
      
      if (this.prefix == this.answer1){
        this.seen2 = true;
      } else{
        console.log("nah");
      }
      
      if (this.prefix2 == this.answer2){
        this.seen3 = true;
      } else{
        console.log("nah");
      }
      
      if (this.prefix3 == this.answer3){
        this.seaGoat = true;
      } else{
        console.log("nah");
      }
      //var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=" + this.prefix;
      /*
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((citylist) => {
          console.log("CityList");
          console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push({ name: citylist[i].city });
          };
          console.log("Got Citylist");
        });
        */
    },
  },
  created: function(){
        this.initilize()
    },
});


