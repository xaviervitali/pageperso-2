 <template>
  <div>
    <sidebar />
    <b-form
      @submit="onSubmit"
      @reset="onReset"
      class="contactForm d-flex justify-content-center flex-column"
    >
      <div
        class="tip"
      >Un Job ? Une remarque ? Ou un petit coucou ? N'hesitez pas à me les envoyer via le formulaire ci-dessous.</div>
      <div class="d-flex justify-content-center">
        <div class="d-flex justify-content-around align-items-center flex-column">
   

          <b-form-group >
            <b-form-radio-group id="radio-group-2" v-model="form.selected" name="radio-sub-component">
              <b-form-radio value="M">Monsieur</b-form-radio>
              <b-form-radio value="Mme">Madame</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group id="input-group-2" label="Nom:*" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Votre Nom"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Société:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.firm" placeholder="Nom de votre Société"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Adresse Email:*" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Votre email"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="d-flex justify-content-around flex-column">
          <b-form-group
            class="mb-0"
            label="Votre message:*"
            label-for="textarea-formatter"
            style="margin:1rem"
          >
            <b-form-textarea
              id="textarea"
              v-model="form.text"
              placeholder="Quelques mots ?"
              rows="4"
              max-rows="10"
              required
            ></b-form-textarea>
          </b-form-group>
          <b-form-group class="d-flex flex-column justify-content-center flex-row-reverse">
            <b-button type="reset" variant="danger">Effacer les champs</b-button>
            <b-button type="submit" variant="success">Envoyer votre message</b-button>
          </b-form-group>
        </div>
      </div>
      <div class="d-flex justify-content-center">Les champs ayant une "*" sont obligatoires.</div>
    </b-form>
    <foot />
  </div>
</template>

<script>
import sidebar from "~/components/Sidebar.vue";
import foot from "~/components/footer.vue";

export default {
  components: { sidebar, foot },
  data() {
    return {
      form: {
        email: "",
        name: "",
        text: "",
        firm: "",
        selected:"M"
      },

      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.firm = "";
      this.form.text = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },

  async sendArticle() {
    await this.$axios.$post("/articles", {
      title: this.form.title,
      description: this.form.description,
      img_url: this.form.imgUrl,
      url: this.form.url,
      publisher_name: this.form.publisherName,
      publisher_email: this.form.publisherEmail,
      category: this.form.selectedCategory
    });
    this.$router.push("/articles/validate");
  }
};
</script>

<style >
.contactForm {
  background-image: url("~assets/img/contact.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto 0;
  min-height: 76vh;
}

.form-group,
textarea.form-control {
  margin: 1rem;
}
.tip {
  margin: 1rem 0 3rem 0;
  text-align: center;
}
.btn {
  padding: 1rem;
  width: 100%;
  margin: 1rem;
  opacity: 0.8;
}
.btn:hover {
  opacity: 1;
}
</style>