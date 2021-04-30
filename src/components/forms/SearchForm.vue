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
  <div>
    <word-list v-if="finalList != null" :words="finalList"></word-list>
    <p v-if="notFound == true" style="text-align: center">Unfortunately this word and its permutaions are not in our records. <br/> Please try another word! </p>
  </div>
</template>

<script>
import words from "../../data/words.js";
import WordList from "../layout/WordList.vue";

export default {
  components: { WordList },

  data() {
    return {
      notFound: false,
      finalList: [],
      wordArray: [],
      searchWord: {
        val: "",
      },
    };
  },

 
  methods: {
    submitForm() {
      let wordLength = this.searchWord.val.length;
      this.processList(wordLength);
    },

    checker(arr, target) {
      let y = target.every((v) => arr.includes(v));
      let x = arr.every((z) => target.includes(z));
      if (x && y == true) {
        return true;
      } else {
        return false;
      }
    },

    getFinalList() {
      this.finalList = [];
      let array = this.searchWord.val.toLowerCase().split("");
      for (var x in this.wordArray) {
        let newWordArray = this.wordArray[x].toLowerCase().split("");
        if (this.checker(array, newWordArray)) {    
          this.finalList.push(this.wordArray[x]);
        }
      }
      if(this.finalList.length> 0){
      this.notFound = false;
      }else{
        this.notFound = true;
      }
    },

    processList(charNumber) {
      this.wordArray = [];
      for (var x in words) {
        if (charNumber == words[x].length) {
          this.wordArray.push(words[x]);
          
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