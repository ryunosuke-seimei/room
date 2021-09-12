<template>
  <v-container>
    <v-card flat>
      <v-card-title> セルフチェック～うつ編～ </v-card-title>
    </v-card>

    <v-container class="d-flex d-lg-none flex-column">
      <template v-for="(question, index) in questions">
        <CheckBox
          :CardTitle="question"
          :point="index"
          :key="index"
          @changeValue="ListUpdate"
        ></CheckBox>
      </template>
      <v-dialog v-model="dialog" width="500" v-if="CheckFlag">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            @click="Calculation()"
          >
            結果を表示
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            セルフチェック結果
          </v-card-title>

          <v-card-text>
            あなたの点数は{{ CalculationValue }}点です。
            <br />
            {{ CheckValue }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>

    <v-container class="d-none d-lg-flex flex-column">
      <template>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">質問項目</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(question, index) in questions" :key="index">
                <td>{{ question }}</td>
                <td>
                  <v-radio-group v-model="radioGroups[index]" row>
                    <v-spacer></v-spacer>
                    <v-radio
                      v-for="n in 4"
                      :key="n"
                      :value="n"
                      :label="label[n]"
                    >
                    </v-radio>
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
      <v-dialog v-model="dialog" width="500" v-if="CheckFlag">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            @click="Calculation()"
            v-if="CheckFlag"
          >
            結果を表示
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            セルフチェック結果
          </v-card-title>

          <v-card-text>
            あなたの点数は{{ CalculationValue }}点です。
            <br />
            {{ CheckValue }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-container>
</template>


<script>
import CheckBox from "@/components/CheckBox";
export default {
  name: "Survey",

  components: {
    CheckBox,
  },

  data: () => ({
    questions: [
      "気が沈んだり気が重くなる",
      "朝方は、一番気分がいい",
      "涙ぐむことがよくある",
      "夜よく眠れない",
      "食欲は普通にある",
      "異性に対する関心がある",
      "痩せてきた",
      "便秘している",
      "普段よりも動悸がする",
      "身体がだるく、疲れやすい",
      "気持ちはいつもさっぱりしている",
      "いつもとかわりなく仕事ができる",
      "落ち着かず、じっとしていられない",
      "将来に希望がある",
      "いつもよりイライラしている",
      "たやすく判断や決断ができる",
      "自分は、役に立つ人間だと思う",
      "毎日、充実している",
      "自分が死んだ方が、周りの人は楽に暮らせると思う",
      "生活について不満なく過ごせている",
    ],
    radioGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    reverseFlag: [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    CalculationValue: 0,
    label: ["", "まったく", "ときどき", "かなりのあいだ", "ほとんどいつも"],
    CheckValues: [
      "うつ状態は見られません。",
      "軽いうつ状態です。気分転換を図りましょう。",
      "やや重いうつ状態です。一人で考え込まずにだれかに今の気持ちを話しましょう。",
      "思いうつ状態です。気分が沈んでいて辛いと思いますが、ぜひ学生相談室にご連絡ください。",
    ],
    dialog: false,
  }),
  methods: {
    Calculation: function () {
      let sum = 0;
      for (let i = 0; i < this.reverseFlag.length; i++) {
        if (this.reverseFlag[i] == 1) {
          sum += 5 - this.radioGroups[i];
        } else {
          sum += this.radioGroups[i];
        }
      }
      this.CalculationValue = sum;
    },
    ListUpdate: function (value, index) {
      this.radioGroups.splice(index, 1, value);
    },
  },
  computed: {
    CheckValue: function () {
      let number = 0;
      if (this.CalculationValue < 39) {
        number = 0;
      } else if (this.CalculationValue >= 40 && this.CalculationValue <= 47) {
        number = 1;
      } else if (this.CalculationValue >= 48 && this.CalculationValue <= 55) {
        number = 2;
      } else {
        number = 3;
      }
      return this.CheckValues[number];
    },
    CheckFlag: function () {
      let result = true;
      for (let i = 0; i < this.radioGroups.length; i++) {
        if (this.radioGroups[i] == 0) {
          result = false;
        }
      }
      return result;
    },
  },
};
</script>

<style scoped>
</style>
