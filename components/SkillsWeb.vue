<template>

    
<div id="web">
    <h4>Mes Compétences Web</h4>

 <div class="d-flex flex-wrap justify-content-around">
   <div v-for="id in skillsWeb" 
                        :key="id" >
  <progress-bar 
                        size="11rem"
                        dashCount="60"
                      
                      :activeCount="id.note*6"
                      activeStroke="green"
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
      components: {
        ProgressBar  
   
    },
  data(){
      return{   

  },


  }
  </script>

  <style >

svg{
  margin: 1.1rem;
  font-weight: bold;

}



svg:hover{
  transform:scale(1.4);

  transition: transform 1s ;
  
}
text{
 
  }

#web{ 
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)),url("../assets/img/webBackground.jpg"); 

background-repeat: no-repeat;
color: black;
font-size: 1.4rem;
  background-size: cover;
  background-position-y: center;
  padding-top: 1rem;
  margin: 0 0 2rem 0;
  


}
h4{
  font-size: 2rem;
}
  </style>
