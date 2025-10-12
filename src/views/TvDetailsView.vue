<script setup>

import { onMounted } from 'vue';
import { useTvStore } from '@/stores/tv';
import { RouterLink } from 'vue-router';

const TvStore = useTvStore();

const props = defineProps({
    showId: {
        type: Number,
        required: true,
    },
});

onMounted(async () => {
    await TvStore.getTvDetail(props.showId);
});


</script>

<template>


    <div class="all">
        <router-link to="/tv" class="voltar">
            < Voltar para Programas de TV</router-link>
                <div class="main">
                    <div class="content">
                        <img :src="`https://image.tmdb.org/t/p/w185${TvStore.currentTv.poster_path}`"
                            :alt="TvStore.currentTv.name" />
                        <div class="details">
                            <h1>{{ TvStore.currentTv.name }}</h1>
                            <p>{{ TvStore.currentTv.tagline }}</p>
                            <p>{{ TvStore.currentTv.overview }}</p>
                            <p class="avaliacao">Avaliação: {{ (TvStore.currentTv.vote_average * 10).toFixed(1) }}%</p>
                        </div>
                    </div>
                </div>

                <div class="companies">
                    <p>Produtoras</p>
                    <div class="content-companies">
                        <template v-for="company in TvStore.currentTv.production_companies" :key="company.id">
                            <img v-if="company.logo_path" :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
                                :alt="company.name" />
                            <p v-else>{{ company.name }}</p>
                        </template>
                    </div>
                </div>
    </div>

</template>

<style scoped>
.all {
    padding: 2rem;
    margin: 2rem 3rem 2rem 3rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.237);
    background-color: rgba(0, 0, 0, 0.011);
    border-radius: 0.5rem;
}

.voltar {
    text-decoration: none;
    color: black;
}

.content {
    display: flex;
    margin: 2rem 0 0 2rem;
}

.content img {
    border: 1px solid rgba(0, 0, 0, 0.066);
    border-radius: 0.5rem;
}


.content h1 {
    font-size: 2rem;
}

.details {
    margin: 0 2rem 0 2rem;
}

.details p {
    margin: 0.7rem 0 0 0;
    font-size: 0.9rem;
}

.details .avaliacao {
    font-size: 1.2rem;
}


.companies {
    margin-top: 2rem;
    text-align: center;
}

.companies p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
}


.content-companies {
    box-shadow: 0 0 0.5rem rgb(180, 180, 180);
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: center;
    margin: 0 2rem 0 2rem;

}
</style>