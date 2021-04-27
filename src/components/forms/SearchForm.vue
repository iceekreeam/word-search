<template>
  <form @submit.prevent="submitForm">
    <div style="display: flex; justify-content: center; flex-direction: column">
      <div
        style="display: flex; justify-content: center; align-items: center"
        class="form-control"
      >
        <label style="margin-right: 5px; margin-top: 5px" for="wordsearch"
          >Type a word:</label
        >
        <input
          style="margin-right: 5px"
          type="text"
          id="searchWord"
          v-model.trim="searchWord.val"
        />
        <base-button>Submit</base-button>
      </div>
    </div>
  </form>
</template>

<script>
import words from "../../data/words.js";

export default {
  components: {},

  data() {
    return {
     // words:['hello', 'goodbye', 'helol'],
      finalList: [],
      wordArray: [],
      searchWord: {
        val: "",
      },
    };
  },

  

  mounted() {
   // this.getWords();
  },
  methods: {
    submitForm() {
      let wordLength = this.searchWord.val.length;
      console.log("test 1")
      this.processList(wordLength);
    },
    getFinalList() {
      this.finalList =[];
      let array = this.searchWord.val.split("");
      console.log(array)
      for (var x in array) {
        console.log(this.wordArray);
        for (var y in this.wordArray) {
          if (this.wordArray[y].includes(array[x])) {
            if (!this.finalList.includes(this.wordArray[y])) {
              this.finalList.push(this.wordArray[y]);
              console.log("finalList")
              console.log(this.finalList)
            }
          } else if (!this.wordArray[y].includes(array[x])) {
            break;
          }
        }
      }
    },
    processList(charNumber) {
      this.wordArray=[];
      for (var x in words.array) {
        if (charNumber == words.array[x].length) {
          this.wordArray.push(words.array[x]);
          console.log("test 2")
        }
      }
      this.getFinalList();
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
.invalid label {
  color: red;
}
h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
</style>