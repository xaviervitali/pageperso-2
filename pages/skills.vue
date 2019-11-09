 <template>
 <div>
<sidebar />
  

<skillsWeb class="skill"/>
<skillsForm class="skill"/>
<skillsOther class="skill"/>
</div>

</template>

<script>
  import skillsWeb from "~/components/SkillsWeb.vue";
  import skillsForm from "~/components/SkillsForm.vue";
  import skillsOther from "~/components/SkillsOther.vue";
    import sidebar from "~/components/Sidebar.vue"
export default {
  components:{
  skillsWeb, sidebar, skillsForm, skillsOther}
}
</script>

<style >

</style>