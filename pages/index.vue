<template>
  <div>
    <sidebar />
    <template>
      <div id="about">
        <h2>A propos de moi</h2>
        <div>
          <h4>Développeur WEB</h4>
          <p>
            <strong>Certifié Développeur WEB</strong> en Janvier 2019 par l'organisme de formation WebForce 3, j'ai acquis les compétences necessaires à la gestion d'un site Web de sa création jusqu'à sa maintenance en passant par sa mise en production.
          </p>

          <p>Outre ces compétences techniques, nous avons mené en équipe un projet de création de site web sur Symfony 4 ce qui m'a permis de découvrir le developpement à plusieurs sur GitHub. Lors de ce projet, j'ai aimé les confrontations d'idées, la prise de décision à plusieurs et l'élolaboration des tâches de chacun.</p>

          <p>J'ai aussi validé lors de cette formation un niveau intermediaire Opquast qui correspond aux régles de bon usage du developpement pour optimiser l'expérience utilisateur.</p>

          <p>
            Plus récemment, j'ai participé à la création de l'application qui a servi de socle au Hackathon organisée par l'association
            <a href="https://code4marseille.fr/">Code4Marseille</a>.
            Celle-ci a été developpée en 3 semaines par 6 developpeurs juniors venant de 3 écoles sans expériences sur le framework choisi :
            <a href="https://vuejs.org/">VueJs</a>.
          </p>
          <p>Compétences aquise nous avons pu faire du support lors de cet événement.</p>
        </div>
        <div>
          <h4>Formateur Informatique</h4>
          <p>
            Après la formation précédente j'ai passé une
            <strong>certification de Formateur pour Adulte</strong> au centre
            <a
              href="https://www.afpa.fr/centre/centre-de-marseille-st-jerome"
            >AFPA de Saint-Jérôme à Marseille</a>.
          </p>
          <p>
            Cette formation est la conclusion d'une expérience de 15 en centre d'appel où j'étais Technicien Expert. Mes missions était multiples :
            Assistance au Techniciens durant leur prises d'appels (150),
            Monitoring d'appel,
            Reporting sur les différentes campagnes à l'aide de
            <strong>Microsoft Excel & Access</strong>
 - C'est ainsi que j'ai acquis de solides bases en VBA,
            Beta-Test,
            Et enfin Formation en interne ou chez des prestataires
          </p>
          <p>Lors de ces expériences j'ai compris les enjeux de chacune et en ce qui concerne la formation l'importance de l'ancrage.</p>
          <p>
            C'est ainsi que j'ai suivi une formation qui m'a appris à
            <strong>préparer et animer des séances</strong> de formations mais aussi à contribuer à l'élaboration de dispositifs de formation et
            <strong>accompagner les apprenants dans leur parcours</strong>.
          </p>
          <p>
            J'ai pu pratiquer ce métier durant 3 mois pour l'
            <a href="https://www.afpa.fr/centre/centre-de-marseille-st-jerome">AFPA</a>
. AInsi j'ai fait découvrir les métier du numérique et plus spécifiquement celui du Web à 8 stagiaires qui ont pu se familiariser avec les attendus de ce monde.
          </p>
        </div>
      </div>
      <foot/>
    </template>
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
      choice: 0
    };
  }
};
</script>

<style>
html {
  padding-top: 7rem;
}
h4,
h2 {
  text-align: center;
  margin: 2rem;
}

#about {
  background-image: url("../assets/img/about.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position-y: center;
  padding: 1rem 3rem;
  overflow: hidden;
  text-shadow: 0 0 2px black;
  font-size: 1.2rem;
  margin: auto;
  color: black;
  text-shadow: 0 0 3px white;

}

@media screen and (max-width: 991px) {
  #about{
  background-position-x: right;


}}

</style>
