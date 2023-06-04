<template>
  <div class="container">
    <div class="container2">
      <div class="notes-container">
        <p>
          Write the name of the software you want to search for and select, by clicking, the desired software from the list that appears.
        </p>
      </div>
      <div class="count-container" v-if="mentionsCount !== null">
        <p>
          Alias mentions count: {{ mentionsCount }}
        </p>
      </div>
      <div class="search-container">
        <input type="text" v-model="input" @input="filterSoftware" placeholder="Fill with the name of the Software" class="search-input"/>
      </div>
    </div>
    <ul v-show="showDropdown" class="sm-list">
      <li v-for="nameId in filteredSoftware" :key="nameId" :class="{ 'sm-item': true, selected: nameId === selectedSoftware }" @click="selectSoftware(nameId)">
        {{ nameId }}
      </li>
    </ul>
  </div>
  <div class="results-container">
    <div v-if="showSearchResults" class="results search-results">
    <div v-if="showSearchResults" class="results">
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-if="!loading">
        <div class="list-groups" v-for="(index, rowIndex) in result" :key="index" :class="{selected: selectedRow === rowIndex}">
          || Software: {{ index.grupo.value }}
          || Source: {{ index.source.value }}
          || Similarity {{ hasSimilarity(this.selected, index.grupo.value) }} %
          <button @click="getMoreInfo(index, rowIndex)" style="margin-left: 3px;">Details</button>
      </div>
    </div>
  </div>
    </div>
    <div v-if="showMoreResults" class="results more-results">
      <div v-if="showMoreResults" class="results" style="width: auto; font-size: 14px;">
        <div style="display: flex; justify-content: left; margin: 3px; padding: 3px; background-color: azure; border-radius: 22px; flex-grow: 1;">
          <TableComponent :headers="headers" :data="data"></TableComponent>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
import listSoftware from '@/assets/nombres_unicos.json'
import jaroWinkler from 'jaro-winkler';
import TableComponent from '@/components/TableComponent.vue'


export default {
  name: 'SoftAlias',
  components: {
    TableComponent
  },
  data() {
    return {
      input: "",
      selected: "",
      filteredSoftwareList: [],
      selectedSoftware: null,
      selectedRow: null,

      headers: ['Property', 'Value'],
      data: [],

      showDropdown: false,
      showSearchResults: false,
      showMoreResults: false,

      loading: false,
      loadedAlias: false,
      listaAliasResult: [],

      result: 'Loading...',
      moreResult: 'Loading...',
      sizeList: 100,
      endpointUrl: process.env.VUE_APP_ENDPOINT_URL_DB,
      softwareNames: listSoftware,
      mentionsCount: null
    }
  },
  computed:{
    filteredSoftware() {
      return this.softwareNames.filter((nameId) => nameId.toLowerCase().includes(this.input.toLowerCase())).slice(0, this.sizeList);
    },
  },
  watch: {
  filteredSoftware() {
    this.filteredSoftwareList = this.filteredSoftware;
  },
  input() {
    this.filteredSoftwareList = this.filteredSoftware;
  },
},
  methods: {
    filterSoftware() {
      if(this.input == ""){
        this.showDropdown = false;
      }else{
        this.$emit("input", this.input);
        this.showDropdown = true;
        this.showSearchResults = false;
        this.mentionsCount = null;
        this.showMoreResults = false;
        this.selectedRow = null;
      }
    },
    selectSoftware(nameId) {
      this.selectedSoftware = nameId;
      this.selected = nameId;
      this.input = nameId;
      this.searchByName();
      this.showSearchResults = true;
      this.showMoreResults = false;
      this.selectedRow = null;
    },
    hasSimilarity(s1, s2){
      return (jaroWinkler(s1,s2)* 100).toFixed(2);
    },
    toTable(){
      this.data = [];
      for (const index of this.moreResult) {
        const value = index.aliasName ? index.aliasName.value : index.value.value;
        this.data.push({ Property: index.property.value, Value: value });
      }
    },
    async searchByName() {
      this.loading = true;
      const query = `PREFIX schema: <https://schema.org/> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX prov: <http://www.w3.org/ns/prov#> SELECT ?alias ?grupo ?source ?num_reps WHERE { ?alias schema:name "${this.selected}" . ?alias <https://w3id.org/softalias/id_group> ?id_group . ?alias <https://w3id.org/softalias/number_of_repetitions> ?num_reps . ?grupo schema:identifier ?id_group . ?grupo rdf:type schema:SoftwareApplication . ?grupo prov:hadPrimarySource ?source } LIMIT 100`;
      const url = `${this.endpointUrl}?name=&infer=true&sameAs=true&query=${encodeURIComponent(query)}`;
      await axios.get(url)
      .then((response) => {
        this.result = response.data.results.bindings;
        this.mentionsCount = this.result[0].reps.value
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
    },
    async getMoreInfo(obj, rowIndex) {
      this.loading = true;
        //const query = `PREFIX schema: <https://schema.org/> SELECT ?property ?value WHERE {<${obj.grupo.value}> ?property ?value} LIMIT 100 `;
        const query = `PREFIX schema: <https://schema.org/> SELECT ?property ?value ?aliasName WHERE {<${obj.grupo.value}> ?property ?value . OPTIONAL { ?value schema:name ?aliasName . } } LIMIT 100`;
        const url = `${this.endpointUrl}?name=&infer=true&sameAs=true&query=${encodeURIComponent(query)}&format=json`;
        await axios.get(url).then((response) => {
          this.moreResult = response.data.results.bindings;
          this.toTable();
          this.loading = false;
          this.showMoreResults = true;
          this.selectedRow = rowIndex;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    }
  }
}
</script>

<style scoped>
.search-input {
  width: 400px;
  height: 35px;
  font-size: 16px;
  padding: 10px 12px;
  border: none;
  border-radius: 22px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: #fff;
  margin-right: 16px;
}
.results-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
}
.results {
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  background-color: #fff;
  margin: 1px;
}
.search-results {
  flex: 1;
  max-width: 40%;
}
.more-results {
  flex: 2;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  background-color: #dcdcdc;
  font-size: 15px;
  margin: 2px;
  border-radius: 5px;
  padding: 2px;
}
.list-groups {
  display: flex; 
  justify-content: left; 
  margin: 3px; 
  padding: 3px; 
  background-color: rgb(252, 252, 236); 
  border-radius: 22px;
}
div.selected {
  background-color: #C9E1FF;
  color: black;
}
.sm-list {
  list-style-type: none;
  padding: 0;
}

.sm-item {
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}

.sm-item.selected {
  background-color: #f5f5f5;
  border: 1px solid #007bff;
}

.sm-item:hover {
  background-color: #f5f5f5;
}
.notes-container {
  position: absolute;
  left: -420px;
  top: -10px;
  width: 400px;
  font-size: 15px;
  color: #333;
}
.count-container{
  position: absolute;
  right: -300px;
  width: 400px;
  font-size: 18px;
  color: #333;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container2 {
  position: relative;
  display: inline-block;
}
</style>
