<script setup>

import api from '@/plugins/axios';
import { ref, onMounted } from 'vue';

const companies = ref([]);

onMounted(async () => {
  for (let indice = 7000; indice < 100000; indice++) {
    try {
      const response = await api.get(`company/${indice}`);
      const company = response.data;

      if (company.origin_country === 'BR') {
        companies.value.push(company);
      }
    } catch (error) {
      console.log(`Empresa ${indice} inexistente`);
    };
  };
});

</script>

<template>
  <header>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/filmes">Filmes</router-link>
        <router-link to="/tv">Programas de TV</router-link>
      </nav>
    </div>
  </header>
  <main>
    <router-view />
  </main>

  <main>
    <ul>
      <li v-for="company in companies" :key="company.id">
        {{ company.id }} -
        {{ company.name }}
        {{ company.origin_country }}
      </li>
    </ul>
  </main>


</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}
</style>
