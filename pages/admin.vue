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
            <div v-if="accessDenied" style="color:red">Nom d'Utilisateur ou mot de passe incorrecte</div>
            <b-form-group id="input-group-2" label="Identifiant :" label-for="input-2">
              <b-form-input id="input-2" v-model="name" required placeholder="Utilisateur"></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Mot de passe :"
              label-for="input-1"
              description="Ce champs est sensible à la casse."
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
      <b-table striped hover responsive="lg" :fields="fields" stacked="lg" :items="messages">
        <template v-slot:cell(actions)="row">
          <b-button
            size="sm"
            @click="info(row.item, row.index, $event.target)"
            class="mr-1"
            variant="primary"
          >Voir le message</b-button>
        </template>
        <template
          v-slot:cell(msg)="data"
        >{{ data.item.msg.length>80? data.item.msg.slice(0,80)+ " ...":data.item.msg}}</template>
      </b-table>
      <b-modal :id="infoModal.id" hide-footer :title="infoModal.title">
        <p v-html="infoModal.content"></p>
        <b-button
          variant="danger"
          class="col-4"
      
          @click="supprMsg(infoModal.itemId)"
        >Supprimer le message {{infoModal.itemId}}</b-button>
        <!-- <b-button
            variant="success"
            class="col-4"
            :value="{}"
            @click="this.sendMail(infoModal.name,infoModal.genre, infoModal.date, infoModal.email)"
        >Repondre</b-button>-->
      </b-modal>
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
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },

      accessDenied: null,
      password: "",
      name: "",
      messages: [],
      accessdenied: false,
      fields: [
        "id",
        {
          key: "date",
          formatter: (value, key, item) => {
            return new Date(value).toLocaleString("fr-Fr");
          }
        },
        "genre",
        "name",
        "firm",
        "email",

        { key: "msg" },
        { key: "actions" }
      ]
    };
  },
  methods: {
    supprMsg(id) {

      this.messages.slice(id, 1);
    },
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
      this.messages = await this.$axios.$get(
        "http://5be41d5495e4340013f88ebe.mockapi.io/messages",
        {
          params: {
            // log: this.name,
            // pwd: this.password
            log: "Xavier13",
            pwd: "Xavier13"
          }
        }
      );

      // if (access.accessdenied) {
      //   this.accessDenied = true;
      //   this.messages = access.messages;
      //   this.onReset;
      // } else {
      this.accessDenied = false;
      // }
    },
    info(item, index, button) {
      this.infoModal.title = `<p>Nom : ${item.genre + " " + item.name}</p> `;

      this.infoModal.content = `${
        item.firm != "" ? "<p>Société : " + item.firm + "</p>" : ""
      }<p>${new Date(item.date).toLocaleString("fr-FR")}<p> 
       <p>Message :</p><p >${item.msg}</p>`;
      // JSON.stringify(item, null, 2)
      this.infoModal.itemId = index;
      this.infoModal.email = item.email;
      this.infoModal.nom = item.name;
      this.infoModal.date = item.date;
      this.infoModal.genre = item.genre;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
  },
  // },
  // computed:{
  //   sendMail(name, genre, date, email) {
  //     window.open(
  //       "mailto:" +
  //         email +
  //         "?subject=message laissé le " +
  //         date.toLocaleString('fr-FR') +
  //         " sur xaviervitali.fr&body=Bonjour " +
  //         genre +
  //         " name,"
  //     );

  // }
  // },

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

.modal-body {
  overflow: scroll;
  max-height: 30rem;
}
</style>