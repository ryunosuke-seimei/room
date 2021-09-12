<template>
  <v-container class="d-flex flex-column align-space-around">
    <v-img :src="require('../assets/logo-cat.png')" max-height="700"> </v-img>
    <v-card flat>
      <v-card-text class="jpn text-center"> ようこそ </v-card-text>
      <v-card-actions class="justify-center my-5">
          <v-btn @click="OnClickSurvey()">
              アンケートに進んでください
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Yomogi&display=swap");
.jpn {
  font-family: "Yomogi", cursive;
  font-size: 30px;
}
</style>

<script>
export default {
  name: "Main",

  data: () => ({

  }),
  methods: {
      OnClickSurvey:function(){
          this.$router.push({path: "/survey"});
      },
  },
};
</script>