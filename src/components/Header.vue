<template>
  <header flat class="d-flex ma-0 px-2 py-4 align-center">
    <span class="d-flex px-3 mx-3" @click="OnClickHome"> vita </span>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon
      class="d-flex d-sm-none"
      @click="drawer = true"
    ></v-app-bar-nav-icon>
    <v-list
      flat
      class="d-none d-sm-flex justify-space-around"
      width="300"
      color="transparent"
    >
      <v-btn to="/survey" class="jpn"> アンケート </v-btn>
    </v-list>

    <v-navigation-drawer v-model="drawer" fixed temporary bottom>
      <v-sheet class="pa-10 px-4">
        <v-row justify="center">
          <v-col cols="9">
            <v-card @click="OnClickSurvey">
              <v-card-actions class="justify-center"
                ><v-icon large>mdi-chart-box</v-icon></v-card-actions
              >
              <v-card-title class="justify-center jpn">アンケート</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods:{
      OnClickHome: function(){
          this.$router.push({path: "/"})
      },
      OnClickSurvey:function(){
          this.$router.push({path: "/survey"});
      }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Allison&display=swap");
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap');
header {
  font-family: "Allison", cursive;
  height: 100px;
  background-color: rgba(120, 120, 120, 0.6);
}
header span{
    font-size: 60px;;
}
.jpn{
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
