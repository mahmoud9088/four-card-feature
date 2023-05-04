<template>
      <router-view />
</template>

<script lang="ts">
import HomeView from './views/HomeView.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { HomeView }
})
</script>

<style lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
