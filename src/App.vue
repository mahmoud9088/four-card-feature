<template>
      <router-view />
</template>

<script lang="ts">
import HomeView from './views/HomeView.vue';
import { defineComponent } from 'vue';
import "./assets/css/styles.css";

export default defineComponent({
    components: { HomeView }
})
</script>