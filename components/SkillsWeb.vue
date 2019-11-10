<template>
  <div id="web">
    <h4>Mes Compétences Web</h4>
    <div v-if="selected==='names'">
      <div class="d-flex flex-wrap justify-content-around">
        <div v-for="(skill,id) in $store.getters['skills/sortSkillsWebByName']" :key="id">
          <progress-bar
            :size="size"
            dashCount=60
            :text="skill.title[0].toUpperCase()+skill.title.slice(1).toLowerCase()"
            :activeCount="skill.note*6"
            activeStroke="green"
            activeWidth=30
          ></progress-bar>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex flex-wrap justify-content-around">
        <div v-for="(skill,id) in $store.getters['skills/sortSkillsByScore(`skillsWeb`)']" :key="id">
          <progress-bar
            :size="size"
            dashCount=60
            :text="skill.title[0].toUpperCase()+skill.title.slice(1).toLowerCase()"
            :activeCount="skill.note*6"
            activeStroke="green"
            activeWidth=30
          ></progress-bar>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
import ProgressBar from "vue-circle-counter";

export default {
  components: {
    ProgressBar
   },
  props: {
    selected: { type: String, required: true }
  },
  data() {
    return {
      size: 0
    };
  },
  mounted() {
    this.size = window.innerWidth / 10;
  }
};
</script>

  <style >
div p {
  margin: 0.5rem;
  color: black;

  text-align: center;
  position: absolute;
}

div svg {
  margin: 1.5rem;
  font-size: 1.2rem;
  overflow: visible;
  transform: rotate(45deg);
}

svg {
  transition: transform 1s;
}

svg:hover {
  transform: scale(1.4) rotate(0deg);
  font-weight: bold;
  transition: transform font-weight 1s;
}

#web {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/img/webBackground.jpg");

  background-repeat: no-repeat;

  font-size: 1.4rem;
  background-size: cover;
  background-position-y: center;
  padding-top: 1rem;
  margin: 0 0 2rem 0;
}
h4 {
  font-size: 2rem;
}
</style>
