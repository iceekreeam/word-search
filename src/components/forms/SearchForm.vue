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
      //words:['hello', 'goodbye', 'helol'],
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
      console.log("test 1");
      this.processList(wordLength);
    },
    // getFinalList() {
    //   this.finalList =[];
    //   let array = this.searchWord.val.split("");
    //   console.log(array)
    //   for (var x in array) {
    //     console.log(this.wordArray);
    //     for (var y in this.wordArray) {
    //       if (this.wordArray[y].includes(array[x])) {
    //         if (!this.finalList.includes(this.wordArray[y])) {
    //           this.finalList.push(this.wordArray[y]);
    //           console.log("finalList")
    //           console.log(this.finalList)
    //         }
    //       } else if (!this.wordArray[y].includes(array[x])) {
    //         break;
    //       }
    //     }
    //   }
    // },
    checker(arr, target) {
      //let x = target.every((v) => arr.includes(v));
      return arr.every((z) => target.includes(z));
      // if (x === y) {
      //   return true;
      // } else {
      //   return false;
      // }
    },

    getFinalList() {
      this.finalList = [];
      let array = this.searchWord.val.toLowerCase().split("");
      for (var x in this.wordArray) {
        let newWordArray = this.wordArray[x].toLowerCase().split("");

        //console.log(this.checker(array, newWordArray));

        if (this.checker(array, newWordArray)) {
          this.finalList.push(this.wordArray[x]);
        }
      }
      console.log("finalList");
      console.log(this.finalList);
    },

    processList(charNumber) {
      this.wordArray = [];
      for (var x in words) {
        if (charNumber == words[x].length) {
          this.wordArray.push(words[x]);
          console.log("test 2");
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