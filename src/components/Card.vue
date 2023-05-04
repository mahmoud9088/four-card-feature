<template>
    <div class="card" :style="`border-top:.5rem solid ${borderColor};`">
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-paragraph">{{ desc }}</p>
      <div class="card-image">
        <img :src="require(`../assets/images/${icon}`)">
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
    export default defineComponent({
        name:"common-card",
        props:["title" , "desc" , "icon" , "borderColor"],
    })
</script>
