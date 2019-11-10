<template>
  <div id="form">
    <h4>Mes Compétences en Formation pour Adultes</h4>
      <div v-if="selected==='names'">
    <div class="d-flex flex-wrap justify-content-around">
        <div v-for="(skill,id) in  $store.getters['skills/sortSkillsFormByName']" :key="id">
          <progress-bar
            dashCount=60
            :activeCount="skill.note*6"
            :text="skill.title[0].toUpperCase()+skill.title.slice(1).toLowerCase()"
            activeWidth=30
            :size="size"
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
svg {
  margin: 1.1rem;
}
p {
  font-size: 0.8rem;
}
#form {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/img/formBackground.jpg");
  background-repeat: no-repeat;

  background-size: cover;
  background-position-y: center;
  padding: 1rem;
  margin: 0 0 2rem 0;
}
</style>
