 <template>
  <div>
    <sidebar />
    <div>
      <div class="smartphone">
        <label for="range-1">Niveau de maitrise min : {{ noteMin }} %</label>
        <b-form-input id="range-1" v-model="noteMin" type="range" min="0" max="100"></b-form-input>
      </div>
      <div class="sidebar">
        <b-form-group label="Trier les Compétences par" class="sort" style="margin-bottom:3rem;">
          <b-form-radio v-model="selected" value="names">Noms</b-form-radio>
          <b-form-radio v-model="selected" value="values">Valeurs</b-form-radio>
        </b-form-group>
        <div>
          <label for="range-1">Maitrise minimale : {{ noteMin }} %</label>
          <b-form-input id="range-1" v-model="noteMin" class="p-3" type="range" min="0" max="100"></b-form-input>
        </div>
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
            <div class="d-flex justify-content-center align-items-center">
              <img :src="img" alt />
              <p style="font-size:1.5rem; margin-left:.5rem;">{{note}} %</p>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="skillsList">
      <h2>Mes Compétences Web</h2>

      <skillsWeb :selected="this.selected" :noteMin="this.noteMin/10" />
      <h2>Mes Compétences en Formation pour Adultes</h2>

      <skillsForm :selected="this.selected" :noteMin="this.noteMin/10" />
      <h2>Mes Autres Compétences</h2>

      <skillsOther :selected="this.selected" :noteMin="this.noteMin/10" />
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
      img: "",
      noteMin: 0
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
.smartphone {
  position: fixed;
  width: 100%;
  bottom: 3rem;
  background: white;
  z-index: 2;
  display: none;
  padding: 0 5rem;
}

.skillsList {
  width: 88%;
  max-width: 800rem;
}
.query p {
  font-size: 1rem;
  text-align: center;
  color: #000;
}
*[data-v-4fe340fb] {
  padding: auto;
}
.col-form-label,
label {
  text-align: center;
  margin: 0.5rem;
}
.form-control {
  margin: 0;
}
h2 {
  margin: auto;
  text-align: center;
  color: black;
  font-size: 2.5rem;
  max-width: 30rem;
}

form {
  text-align: center;
}

.sidebar {
  width: 12%;
  min-width: 10rem;
  position: fixed;
  background-color: white;
  /* height: 100%; */
  right: 0;
  overflow: hidden;
  z-index: 3;
  display: flex;
  justify-content: center;

  flex-direction: column;
  top: 6.9rem;
  bottom: 2rem;
}

img {
  height: 4rem;
  max-width: 6rem;
  object-fit: contain;
}

@media screen and (max-width: 991px) {
  .sidebar {
    display: none;
  }
  .skillsList,
  .skills,
  h2 {
    width: 100%;
  }
  .skillsList {
    margin-bottom: 10rem;
  }
  .smartphone {
    display: block;
  }
  .apexcharts-legend.position-bottom.left,
  .apexcharts-legend.position-top.left,
  .apexcharts-legend.position-right,
  .apexcharts-legend.position-left {
    display: none;
  }
}
</style>