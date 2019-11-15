 <template>
  <div>
    <sidebar />
    <div>
      <div class="sidebar">
        <b-form-group label="Trier les Compétences par" class="sort" style="margin-bottom:3rem;">
          <b-form-radio v-model="selected" value="names">Noms</b-form-radio>
          <b-form-radio v-model="selected" value="values">Valeurs decroissantes</b-form-radio>
        </b-form-group>
        <b-form-group label="Chercher une competence" id="input-group-1" label-for="input-1">
          <div class="query">
            <div>
              <p>Nom</p>
              <no-ssr>
                <vue-bootstrap-typeahead
                  :data="$store.getters['skills/allSkillsTitle']"
                  v-model="skillSearch"
                  @hit="getNote()"
                />
              </no-ssr>
            </div>
            <p>Taux</p>
            <div class="d-flex justify-content-center align-items-center ">
              <img :src="img" alt />
              <p style="font-size:2.5rem">{{note}} %</p>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="skillsList">
      <h2>Mes Compétences Web</h2>

      <skillsWeb :selected="this.selected" class="skills" />
      <h2>Mes Compétences en Formation pour Adultes</h2>

      <skillsForm :selected="this.selected" class="skills" />
      <h2>Mes Autres Compétences</h2>

      <skillsOther :selected="this.selected" class="skills" />
    </div>
    <foot />
  </div>
</template>

<script>
import skillsWeb from "~/components/SkillsWeb.vue";
import skillsForm from "~/components/SkillsForm.vue";
import skillsOther from "~/components/SkillsOther.vue";
import sidebar from "~/components/Sidebar.vue";
import foot from "~/components/footer.vue";
// import Vue from 'vue'
// import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

export default {
  components: {
    skillsWeb,
    sidebar,
    skillsForm,
    skillsOther,
    VueBootstrapTypeahead: () => import("vue-bootstrap-typeahead"),
    foot
    // VueBootstrapTypeahead
  },
  data() {
    return {
      size: "1",
      activeWidth: 0,
      selected: "names",
      skillSearch: "",
      note: "-",
      img: ""
    };
  },
  mounted() {
    this.size = window.innerWidth / 6;
  },
  methods: {
    getNote() {
      this.note =
        this.$store.getters["skills/allSkills"][this.skillSearch].note * 10;
      this.img = this.$store.getters["skills/allSkills"][this.skillSearch].logo;
    }
  },
  watch: {
    skillSearch: function() {
      if (!this.$store.getters["skills/allSkills"][this.skillSearch]) {
        this.img = "";
        this.note = "-";
      }
    }
  }
};
</script>

<style>

.skills {
  width: 80%;
  right: 0;
}
.query p {
  font-size: 1rem;
  text-align: center;
  color: #000;
}
*[data-v-4fe340fb] {
  padding: auto;
}
.col-form-label, label{
  text-align: center;
  margin: .5rem;
}
.form-control {
  margin: 0;
}
h2 {
   margin: 0;
  color: black;
  font-size: 2.5rem;
  width: 80%;;
}

form {
  text-align: center;
}

.sidebar {
  width: 20%;
  min-width: 12rem;
  position: fixed;
  background-color: white;
  height: 100%;
  padding: 1rem;
  right: 0;
}

img {
  height: 4rem;
  max-width: 11rem;
  object-fit: contain;
}

@media screen and (max-width: 991px) {
  .sidebar { 
    display:none;
  }
  .skills, h2{
    width:100%;
  }

}
</style>