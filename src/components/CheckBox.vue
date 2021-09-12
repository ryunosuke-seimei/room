<template>
  <v-card class="my-2">
    <v-card-title class="pb-0">
      {{CardTitle}}
    </v-card-title>
    <v-card-text>
      <v-radio-group v-model="radioGroup">
        <v-radio v-for="n in 4" :key="n" :value="n" :label="label[n]">
        </v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CheckBox",
  props:["CardTitle", "point"],
  data: () => ({
    radioGroup:0,
    label: ["", "まったく", "ときどき", "かなりのあいだ", "ほとんどいつも"],
  }),
  watch:{
    radioGroup:function(newValue,oldValue){
      console.log(oldValue);
      console.log(this.point);
      this.$emit("changeValue", newValue, this.point)
    }
  }
};
</script>
