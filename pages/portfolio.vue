<template>
    <div>
        <sidebar/>
        <h4>Mes Sites</h4>
 
        <div style="margin:auto;text-align:center">
          <b-carousel
            
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333; width:80%;margin:auto; background-color:grey; margin-bottom:1rem;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >   
    <div  v-for="id in portofolio" :key="id"  > 
     
                    <a :href="id.workUrl" target="_blank">
                    <b-carousel-slide 
                   
                    v-if="id.workImg"
                    :caption="id.title.toUpperCase()"
                    :text="id.pitch"
                    :img-src="id.workImg"
                    > 
                    </b-carousel-slide>
                       <b-carousel-slide 
                    v-else
                    :caption="id.title.toUpperCase()"
                    :text="id.pitch"
                    img-blank
                    >  
                
        
     <!-- <apexchart width="380" type="donut" :options="options" :series="series"></apexchart> -->

                
      
                </b-carousel-slide>

                </a> 
   
            </div> 
          </b-carousel> 
          <p>
            Compétences mobilisées : <strong v-for="detail in portofolio[slide].details"> {{detail.toUpperCase()}}</strong>
          </p>
  
        
     
    </div>
</div>

        
</template>

<script>
import sidebar from "~/components/Sidebar.vue"


export default {

data(){
    return{
        portofolio:[
          {
          workImg:require('~/assets/img/meteo.png'),
          workUrl:'https://meteo.xaviervitali.fr',
          title:'Mon site meteo',
          pitch:"Site météo", 
          details:["html","css","JavaScript","JQuery", "Ajax"],
        
          }, 
          {
            workImg:require('~/assets/img/tr.png'),
            workUrl:'http://tr.xaviervitali.fr',
            title:'Tickets Restau',
            pitch:"Calcul du nombre de titre restaurant requis. ",
            details:["html","css","JavaScript"],
           
            },
          {
            workImg:require('~/assets/img/aka77.png'),
            workUrl:'http://www.aka77.fr',
            title:'AKA77',
            pitch: "Présentation de l'association de peintre Aka77",
            details:["symfony","css", "JavaScript", "PHP", "MySQL", "Twig", "Ajax"], 
            
            }, 
          {
            workImg:require('~/assets/img/marcelleMobi.png'),
            workUrl:'https://marcelle-mobi.xaviervitali.fr',
            title:'Marcelle-Mobi',
            pitch:'Appli pour la mobilité douce à Marseille',
            details:["vueJS","bootstrap", "css", "Ajax"], 
         
            },
          {
            title:"Ce Site", 
            pitch:'Page de présentation',
            details:["vueJS","BootStrap","css"],
         
            }
          ],
           slide: 0,
           series:[44, 55, 41, 17, 15],
        sliding: null,
        options:{}
        }},
        methods: {
        onSlideStart(slide) {
        this.sliding = true
       },
        onSlideEnd(slide) {
        this.sliding = false
        }
  },
  components:{
    sidebar,Apexcharts: () => import('vue-apexcharts'),
}
}
</script>

<style>

.img-fluid, .pitch {
    max-height: 480px;
    object-fit: cover;
    /* filter: brightness(40%); */

}
.carousel-caption{

  background-color:rgba(139, 181, 230, 0.8);
  border-radius: 2rem;


}


</style>