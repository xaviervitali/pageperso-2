<template>
  <div>
    <sidebar />
    <h4>Mon portofolio</h4>

    <div style="margin:auto;text-align:center">
      <h5>{{title}}</h5>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-height="400"
        style="text-shadow: 1px 1px 2px #333; width:80%;margin:auto;margin-bottom:1rem;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <div v-for="id in portofolio" :key="id" class="carroussel">
          <a :href="id.workUrl" target="_blank">
            <b-carousel-slide
              v-model="slide"
              v-if="id.workImg"
              :caption="id.pitch"
              :img-src="id.workImg"
            ></b-carousel-slide>
            <b-carousel-slide v-model="slide" v-else :caption="id.pitch" img-blank></b-carousel-slide>
          </a>
        </div>
      </b-carousel>
      <p>
        Compétences mobilisées :
        <strong
          v-for="(detail,id) in portofolio[slide].details "
          :key="id"
        >{{detail.toUpperCase()+' '}}</strong>
      </p>
    </div>
    <foot />
  </div>
</template>

<script>
import sidebar from "~/components/Sidebar.vue";
import foot from "~/components/footer.vue";

export default {
  data() {
    return {
      title: "",
      slide: 0,
      portofolio: [
        {
          workImg: require("~/assets/img/meteo.png"),
          workUrl: "https://meteo.xaviervitali.fr",
          title: "Mon site meteo",
          pitch: "Site météo",
          details: ["html", "css", "JavaScript", "JQuery", "Ajax"]
        },
        {
          workImg: require("~/assets/img/tr.png"),
          workUrl: "http://tr.xaviervitali.fr",
          title: "Tickets Restau",
          pitch: "Calcul du nombre de titre restaurant requis. ",
          details: ["html", "css", "JavaScript"]
        },
        {
          workImg: require("~/assets/img/aka77.png"),
          workUrl: "http://www.aka77.fr",
          title: "AKA77",
          pitch: "Présentation de l'association de peintre Aka77",
          details: [
            "symfony",
            "css",
            "JavaScript",
            "PHP",
            "MySQL",
            "Twig",
            "Ajax"
          ]
        },
        {
          workImg: require("~/assets/img/marcelleMobi.png"),
          workUrl: "https://marcelle-mobi.xaviervitali.fr",
          title: "Marcelle-Mobi",
          pitch: "Appli pour la mobilité douce à Marseille",
          details: ["vueJS", "bootstrap", "css", "Ajax"]
        },
        {
          title: "Ce Site",
          pitch: "Page de présentation",
          details: ["vueJS", "BootStrap", "css"]
        }
      ],
      slide: 0,
      series: [44, 55, 41, 17, 15],
      sliding: null,
      options: {}
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  components: {
    sidebar,
    foot
  }
};
</script>

<style>
.img-fluid,
.pitch  {
  max-height: 400px;
  object-fit: cover;
  /* padding: 1rem; */
  /* background: linear-gradient(
    to bottom,
    #000000 0%,
    #44b2c3 35%,
    #44b2c3 35%,
    #44b2c3 52%
  );
  background: -moz-linear-gradient(
    top,
    #000000 0%,
    #44b2c3 31%,
    #44b2c3 31%,
    #44b2c3 52%,
    #44b2c3 71%,
    #000000 100% */
  /* ); */
  /* filter: brightness(40%); */
}
.carousel-control-prev-icon, .carousel-control-next-icon {
  background-color: rgba(0 , 0, 0, 0.5);
  padding: 2rem;
  border-radius: 2rem;
}

.carousel-caption{
  background-color: rgba(0 , 0, 0, 0.2);
  border-radius: 3rem;

}
.carousel-caption:hover{
  background-color: rgba(0 , 0, 0, 0.6);

}

.carousel-inner{
  border: 2px solid black;

  overflow: hidden;

}
 .carousel-control-next-icon {
   overflow: hidden;
  border: 2px 0 solid black;

 }
</style>