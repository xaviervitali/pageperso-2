<template>
  <div id="other">
    <h4>Mes Autres Compétences</h4>
    <div v-if="selected==='names'">
      <div class="d-flex flex-wrap justify-content-around">
        <div
          v-for="(skill,id)  in  $store.getters['skills/sortSkillsOthersByName']"
          :key="id"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <progress-bar
            :size="size"
            :activeCount="skill.note*6"
            activeStroke="firebrick"
            dashCount=60
            activeWidth=30
            style
            :text="skill.title[0].toUpperCase()+skill.title.slice(1).toLowerCase()"
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

  font-size: 1rem;
  text-align: center;
}
.category {
  padding: 0 3rem;

  background-color: rgba(255, 255, 255, 0.2);
}
h4 {
  color: white;
}
#other {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/img/otherBackground.jpg");
  background-repeat: no-repeat;
  color: black;
  background-size: cover;
  background-position-y: center;
  padding: 1rem;
  margin: 0 0 2rem 0;
}
</style>
