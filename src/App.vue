<script setup>

  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const moviesGenres = ref([]);
  const TVGenres = ref([]);

  onMounted(async () => {
    let response = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR',
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTViMDIxNzZkODE4OWY4M2Y1YmQ0NjQyYzMxYTA5NSIsIm5iZiI6MTc1OTQzNDI0MS40MjIwMDAyLCJzdWIiOiI2OGRlZDYwMTBkZjQ0NmY2NGI0MDVmZGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LsOfZwsBvLeyc4tWjEoXHJP-_v4NZv1ZHhcftx9CLPM`,
      },
    },
  );
  moviesGenres.value = response.data.genres;
  response = await axios.get(
    'https://api.themoviedb.org/3/genre/tv/list?language=pt-BR',
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTViMDIxNzZkODE4OWY4M2Y1YmQ0NjQyYzMxYTA5NSIsIm5iZiI6MTc1OTQzNDI0MS40MjIwMDAyLCJzdWIiOiI2OGRlZDYwMTBkZjQ0NmY2NGI0MDVmZGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LsOfZwsBvLeyc4tWjEoXHJP-_v4NZv1ZHhcftx9CLPM`,
      },
    },
  );
  TVGenres.value = response.data.genres;
  });
  
</script>

<template>
  <h1>Gêneros de filmes</h1>
  <ul>
    <li v-for="genre in moviesGenres" :key="genre.id">{{ genre.name }}</li>
  </ul>
  <hr />
  <h1>Gêneros de programas de TV</h1>
  <ul>
    <li v-for="genre in TVGenres" :key="genre.id">{{ genre.name }}</li>
  </ul>
</template>

<style scoped>
</style>
