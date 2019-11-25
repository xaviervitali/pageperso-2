<template>
  <div>
    <sidebar />
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
    <table class="table table-striped  table-dark ">
        <tr v-for="(msgs, id) in messages" :key=id  style="margin:20px">
          <td  v-for="msg in msgs ">{{msg.length>30?msg.slice(0,30)+"...":msg  }}</td><button class="btn btn-success" value="id">Afficher</button><button class="btn btn-danger" value="id">Supprimer</button>
        </tr>

      </table >
    </div>
    <foot />
  </div>
</template>

<script>
import sidebar from "~/components/Sidebar.vue";
import foot from "~/components/footer.vue";

export default {
  components: {
    sidebar,
    foot
  },
  data() {
    return {
      accessDenied: false,
      password: "",
      name: "",
      messages: [
        {
          id: "40",
          date: "1574422644",
          genre: "M",
          name: "Xavier Vitali",
          firm: "Xavier Vitali",
          email: "xavier.vitali@gmail.com",
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra, nibh quis ultrices malesuada, ligula ipsum vulputate diam, aliquam egestas nibh ante vel dui. Sed in tellus interdum eros vulputate placerat sed non enim. Pellentesque eget justo porttitor urna dictum fermentum sit amet sed mauris. Praesent molestie vestibulum erat ac rhoncus. Aenean nunc risus, accumsan nec ipsum et, convallis sollicitudin dui. Proin dictum quam a semper malesuada. Etiam porta sit amet risus quis porta. Nulla facilisi. Cras at interdum ante. Ut gravida pharetra ligula vitae malesuada. Sed eget libero et arcu tempor tincidunt in ac lectus. Maecenas vitae felis enim. In in tellus consequat, condimentum eros vitae, lacinia risus. Sed vehicula sem sed risus volutpat elementum.\n\nNunc."
        },
        {
          id: "39",
          date: "1574379225",
          genre: "M",
          name: "nom",
          firm: "",
          email: "xavier.vitali@gmail.com",
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra, nibh quis ultrices malesuada, iaculis varius, lorem nibh ullamcorper sapien"
        },
        {
          id: "38",
          date: "1574422644",
          genre: "M",
          name: "Xavier Vitali",
          firm: "Xavier Vitali",
          email: "xavier.vitali@gmail.com",
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra, nibh quis ultrices malesuada, ligula ipsum vulputate diam, aliquam egestas nibh ante vel dui. Sed in tellus interdum eros vulputate placerat sed non enim. Pellentesque eget justo porttitor urna dictum fermentum sit amet sed mauris. Praesent molestie vestibulum erat ac rhoncus. Aenean nunc risus, accumsan nec ipsum et, convallis sollicitudin dui. Proin dictum quam a semper malesuada. Etiam porta sit amet risus quis porta. Nulla facilisi. Cras at interdum ante. Ut gravida pharetra ligula vitae malesuada. Sed eget libero et arcu tempor tincidunt in ac lectus. Maecenas vitae felis enim. In in tellus consequat, condimentum eros vitae, lacinia risus. Sed vehicula sem sed risus volutpat elementum.\n\nNunc."
        }
      ],
      accessdenied: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.password = "";
      this.form.name = "";
    },
    async filterMsg() {
      let access = await this.$axios.$get("https://xaviervitali.fr/form.php", {
        headers: {
          "Access-Control-Allow-Origin": "localhost:3000 ",
          "Access-Control-Allow-Headers": "X-Requested-With, Content-Type",
          "Access-Control-Allow-Methods": "POST, GET"
        },
        params: {
          // log: this.name,
          // pwd: this.password
          log: "Xavier13",
          pwd: "Xavier13"
        }
      });
      if (access.accessdenied) {
        this.accessDenied = true;
        this.messages = access.messages;
        this.onReset;
      } else {
        this.accessDenied = false;
      }
    }
  },

  watch: {
    name: function(evt) {
      this.accessDenied = null;
    },
    password: function(evt) {
      this.accessDenied = null;
    }
  },
  created() {
    this.filterMsg();
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