 <template>
  <div> 
  <sidebar />

    <div class="position-fixed d-flex justify-content-around align-items-center flex-wrap">
    
        <b-form-group label="Trier les Compétences par" class="sort">
          <b-form-radio v-model="selected"  value="names">Noms</b-form-radio>
          <b-form-radio v-model="selected"  value="values">Valeurs decroissantes</b-form-radio>
        </b-form-group>
     
      <b-form-group
        id="input-group-1"
        label="Chercher directement une compétence"
        label-for="input-1"       
      >
<div class="d-flex justify-content-between align-item-center">
  <div  class="col-9">
  <p>Nom</p> 
        <b-form-input
          id="input-1"
          type="text"
          placeholder="ex. VueJS"
         
        ></b-form-input>
        </div>
        <div class="col-3">
<p>Taux</p>
<p>-  %</p>
</div>

        </div>
      </b-form-group>

    </div> 
    <div class="skillsList">
      <skillsWeb :selected="this.selected" />
       <skillsForm :selected="this.selected" :size="size" />
    <skillsOther :selected="this.selected" :size="size"/> 
    </div>
  </div>
</template>

<script>
import skillsWeb from "~/components/SkillsWeb.vue";
import skillsForm from "~/components/SkillsForm.vue";
import skillsOther from "~/components/SkillsOther.vue";
import sidebar from "~/components/Sidebar.vue";
export default {
  components: {
    skillsWeb,
    sidebar,
    skillsForm,
    skillsOther
  },
  data() {
    return {
      size: "1",
      activeWidth: 0,
      selected: "names"
    };
  },
  mounted() {
    this.size = window.innerWidth/6
  }
};
</script>

<style>
div p{
  font-size: 1rem;
  color: black;
  text-align: center;
}
*[data-v-4fe340fb] {

  padding: auto;
}

.form-control{
  margin: 0;
}
* {
  color: black;
}
form {
  text-align: center;
}
.skillsList {
  margin-top: 11.5rem;
}
.position-fixed  {
  top: 6.9rem !important;
  width: 100%;
  background-color: #f9f9fa;
  padding:.5rem ;
z-index: 2;
opacity: .9;
}
</style>