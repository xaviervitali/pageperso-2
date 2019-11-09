<template>

    
<div id="other">
    <h4>Mes Autres Compétences</h4>
 <div class="d-flex flex-wrap justify-content-around">
   <div v-for="(id, skill)  in skillsOthers" 
                   :key="id" class="d-flex flex-column justify-content-center align-items-center ">
  <progress-bar  
                        size="12rem"
                        dashCount="60"
                    
                      :activeCount="id.note*6"
                          activeStroke="firebrick"
                      activeWidth="30"

  >
      <p>{{skill.title}}</p>                


  </progress-bar>
  <p>

    {{id.title}}

  </p>
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
          skillsOthers:[
{title:'VBA Office',note:6, 
},{title:'Technologie ADSL',note:6, },{title:'Technologie Fibre',note:4,logo:require("~/assets/img/fttx.png")}, {title:'Beta-Test',note:6,logo:require("~/assets/img/beta1.jpg")}, {title:'Conseiller Relation Client à Distance',note:9.5},{title:'Superviseur relations clients à distance',note:6}
]
      }
  },
    components: {
   ProgressBar   
 
  },
  mounted(){
    this.diameter = window.innerWidth/5
    this.stroke = window.innerWidth/100
  }
  }
  </script>

  <style >
div p{
  margin: .5rem;
  color: black;
  font-size : 2.5rem;

  text-align: center;
}
  .category{
  padding: 0 3rem;

background-color: rgba(255,255, 255, 0.2);
  

}

#other{
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)),url("../assets/img/otherBackground.jpg");
background-repeat: no-repeat;
color:black;
  background-size: cover;
  background-position-y: center;
  padding: 1rem;
   margin: 0 0 2rem 0;
  
  }

 
  </style>
