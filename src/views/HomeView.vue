<template>
  <section class="main">
    <div class="container">
      <div class="header">
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div class="cards">
        <div v-for="card in cards" :key="card.title" :class="card.classes">
          <Card
            :title="card.title"
            :desc="card.desc"
            :icon="card.icon"
            :borderColor="card.borderColor"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Card from '@/components/Card.vue'
import { defineComponent } from 'vue'
import { cards } from '@/data/cards'

export default defineComponent({
  name: 'home-view',
  components: { Card },
  data() {
    return {
      cards,
    }
  },
})
</script>
