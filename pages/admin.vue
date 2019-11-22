<template>
  <div>
    <sidebar/>
    <div
      class="d-flex justify-content-center align-items-center"
      style="height:100vh"
      v-if="accessDenied!=false"
    >
      <b-form
        @submit="onSubmit"
        @reset="onReset"
        class="placard d-flex flex-row col-lg-6 col-sm-12 justify-content-center align-items-center align-content-center lp-2 m-2"
      >
        <div>
          <div class="para p-4 title">Bienvenue dans l'interface d'administration du site</div>
          <div class="para">
            <div v-if="accessDenied" style="color:red">Nom d'Utilisateur ou mot de passe incorecte</div>
            <b-form-group id="input-group-2" label="Identifiant :" label-for="input-2">
              <b-form-input id="input-2" v-model="name" required placeholder="Utilisateur"></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Mot de passe :"
              label-for="input-1"
              description="Ce champs est sensible à la casse. "
            >
              <b-form-input
                id="input-1"
                v-model="password"
                type="password"
                required
                placeholder="Mot de passe"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">M'identifier</b-button>
          </div>
        </div>
      </b-form>
    </div>
    <div v-else>
      <b-table striped hover :items="messages"></b-table>
    </div>
    <foot/>
  </div>
</template>

<script>
import sidebar from "~/components/Sidebar.vue";
import foot from "~/components/footer.vue";

export default {
  components: {
    sidebar, foot
  },
  data() {
    return {
      accessDenied: null,

      password: "",
      name: "",
      messages: []
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const access = await this.$axios.$get("/form.php", {
        params: {
          log: this.name,
          pwd: this.password
        }
      });
      if (access.accessdenied) {
        this.accessDenied = true;
        this.messages = access.messages;
        this.onReset
      } else {
        this.accessDenied = false;
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.password = "";
      this.form.name = "";
    }
  },

  watch: {
    name: function(evt) {
      this.accessDenied = null;
    },
    password: function(evt) {
      this.accessDenied = null;
    }
  }
};
</script>

<style>
.placard .para {
  border: 1px solid black;
  margin: 0;
  padding: 1rem;
  text-align: center;
}

.placard .title {
  background-color: #2fa9bc;
  font-size: 1.5rem;
}
</style>