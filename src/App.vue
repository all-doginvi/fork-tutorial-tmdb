<script setup>

import api from '@/plugins/axios';
import { ref, onMounted } from 'vue';

const atores = ref([]);

onMounted(async () => {
  for (let indice = 1; indice < 501; indice++) {
    try {
      const response = await api.get('person/popular', {
        params: {
          language: 'pt-BR',
          page: indice,
        },
      });

      const atorFamoso = response.data.results;

      console.log('Working');

      for (const detalhes of atorFamoso) {
        try {
          const responseDetalhes = await api.get(`person/${detalhes.id}`);
          const atorDetalhes = responseDetalhes.data;

          if (atorDetalhes.place_of_birth && atorDetalhes.place_of_birth.includes('Brazil')) {
            atores.value.push(atorFamoso);
          }
        } catch (err) {
          console.log(`Erro ator ${atorFamoso.id}`);
        }
      }
    } catch (error) {
      console.log(`Erro página ${indice}`);
    }
  }
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
      <li v-for="ator in atores" :key="ator.id">
        {{ ator.id }} -
        {{ ator.name }}
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
