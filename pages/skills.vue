 <template>
  <div>
    <sidebar />

    <div
    class="position-fixed"
      style="top:9rem!important;padding:.5rem; width:10rem;background-color:#F9F9FA;"
    >
      
  <div>
    <b-form-group label="Trier les Compétences par">
      <b-form-radio v-model="selected" name="some-radios" value="names">Noms</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="values">Valeurs decroissantes</b-form-radio>
    </b-form-group>

    
  </div>
    </div>
    <skillsWeb :selected="this.selected" style="margin-left:11rem" />
    <skillsForm :selected="this.selected" style="margin-left:11rem" />
    <skillsOther :selected="this.selected" style="margin-left:11rem"  />
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
    skillsOther,

  },
  data() {
    return {
      size: 1,
      activeWidth: 0,
      selected:'names'
    };
  },
  created() {
   
   
  }
};
</script>

<style scoped>


*[data-v-4fe340fb]  {
 
margin-top: 1.2rem ;

}
*{
  color: black;
}
form {
  text-align: center;
}


</style>