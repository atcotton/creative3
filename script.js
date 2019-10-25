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
      
      axios.get('http://api.mathjs.org/v4/?expr=7%2B8*2')
        .then(response => {
          this.answer1 = response.data;
          console.log("the 1 beacons are lit! " + this.answer1);
          return true;
        })
        .catch(error => {
          console.log(error)
        });
        
        
      axios.get('http://api.mathjs.org/v4/?expr=2%5E3%2B7')
        .then(response => {
          this.answer2 = response.data;
          console.log("the 2 beacons are lit! " + this.answer2);
          return true;
        })
        .catch(error => {
          console.log(error)
        });
        
        
      axios.get('http://api.mathjs.org/v4/?expr=27%2F3')
        .then(response => {
          this.answer3 = response.data;
          console.log("the 3 beacons are lit! " + this.answer3);
          return true;
        })
        .catch(error => {
          console.log(error)
        });
      
      
      
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
     
    },
  },
  created: function(){
        this.initilize()
    },
});


