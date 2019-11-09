<template>

    
<div id="form">
    <h4>Mes Compétences en Formation pour Adultes</h4>
 <div class="d-flex flex-wrap justify-content-around" >
   <div v-for="id in skillsForm" 
                        :key="id">
  <progress-bar  
                        size="20rem"
                        dashCount="60"
                
                      :activeCount="id.note*6"
                      
                      activeWidth="30"
                  

  >

  </progress-bar>
<p>{{id.title}}</p>
</div>
 </div></div>
  </template>

  <script>
  
 import ProgressBar from 'vue-circle-counter'

  export default {
  data(){
      return{   

      totalSteps: 10,
      diameter:0,
      stroke:0,
          skillsForm:[
{title:'Ingéniérie Pédagogique',note:6, logo:require('~/assets/img/animation.png')},{title:'Ingéniérie de Formation',note:4, logo:require("~/assets/img/if.png")},{title:'Accompagnement',note:5,logo:require("~/assets/img/accompagnement.png")}
]
      }
  },
    components: {
    ProgressBar
   
 
  },
  mounted(){
    this.diameter = window.innerWidth/4
    this.stroke = window.innerWidth/100
  }
  }
  </script>

  <style >

svg{
  margin: 1.1rem;
  
   

}
p{
  font-size: .8rem;
}
#form{
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)),url("../assets/img/formBackground.jpg");
background-repeat: no-repeat;
color:black;
  background-size: cover;
  background-position-y: center;
  padding: 1rem;
  margin: 0 0 2rem 0;



  }

 
  </style>
