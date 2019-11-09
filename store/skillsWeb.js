export const state = () => ({
    skillsWeb:[
        {title:'HTML5',note:6, logo:require('~/assets/img/html5.jpg')},{title:'Angular',note:3, logo:require("~/assets/img/angular.png")},{title:'JQuery',note:4,logo:require("~/assets/img/jquery.png")},{title:'JavaScript',note:7,logo:require("~/assets/img/js.jpg")},{title:'Symfony 4',note:6,logo:require("~/assets/img/symfony.png")},{title:'PHP',note:6,logo:require("~/assets/img/php.jpg")},{title:'Bootstrap 4',note:2,logo:require("~/assets/img/bootstrap.png")},{title:'Cordova',note:2,logo:require("~/assets/img/cordova.jpg")},{title:'Opquast',note:7,logo:require("~/assets/img/opquast.png")},{title:'wordpress',note:3,logo:require("~/assets/img/wordpress.png")},{skill:'CSS',title:'CSS 3',note:6,logo:require("~/assets/img/css3.jpg")},{skill:'VueJS 3',title:'VueJS 3',note:5,logo:require("~/assets/img/vueJS.png")},{title:'nuxtJS',note:2,logo:require("~/assets/img/nuxt.png")},{title:'nodeJS',note:2,logo:require("~/assets/img/nodeJs.png")},{title:'yarn',note:3,logo:require("~/assets/img/yarn.png")}
        ]
              
})

export const mutations = {
  SET_CHARGING_STATIONS(state, chargingStations) {
    state.chargingStations = chargingStations;
  },
  SET_PARKING_STATIONS(state, parkingStations) {
    state.parkingStations = parkingStations.pois
  },
  SET_CAR_POOL_STATIONS(state, carPoolStations) {
    state.carPoolStations = carPoolStations.pois
  }

};

export const actions = {
  async fetchChargingStations({ commit }, { latitude, longitude }) {
    const chargingStations = await this.$axios.$get('/parkings/charge_station');
    commit("SET_CHARGING_STATIONS", chargingStations);
  },

  async fetchParkingStations({ commit, state }) {
    const parkingStations = await this.$axios.$get('/parkings/toll_parking')
    commit("SET_PARKING_STATIONS", parkingStations)
  },

  async fetchCarPoolStations({ commit }) {
    const carPoolStations = await this.$axios.$get("https://search.mappy.net/search/1.1/find?extend_bbox=1&bbox=43.138572924273255,5.123748779296876,43.45142348523913,5.648345947265626&q=Aire%20de%20covoiturage%20marseille&favorite_country=250&language=FRE&loc_format=geojson&mid=3482934797&tagid=SPD_RESPONSE_SEARCH&abtest=NA&max_results=500")
    commit("SET_CAR_POOL_STATIONS", carPoolStations)
  }
}