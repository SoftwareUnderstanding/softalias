<template>
  <table class="my-table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="header in headers" :key="header">{{ row[header] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.my-table {
  border-collapse: collapse;
  width: 100%;
  min-width: 500px; /* Ajusta esto a la anchura mínima que quieras para la tabla */
}

.my-table th, .my-table td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #ddd;
  font-weight: bold;
  text-align: center;
}
</style>