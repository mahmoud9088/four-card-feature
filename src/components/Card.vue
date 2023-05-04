<template>
    <div class="card" :style="`border-top:.5rem solid ${borderColor};`">
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-paragraph">{{ desc }}</p>
      <div class="card-image">
        <img src="../assets/images/icon-supervisor.svg">
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
    export default defineComponent({
        name:"common-card",
        props:["title" , "desc" , "icon" , "borderColor"]
    })
</script>

<style lang="scss">
.card {
    border-radius: .5rem;
    padding: 30px;
    width: 360px;
    box-shadow: 0 1rem 2rem .5rem #dedede;

    .card-title {
    margin-bottom: 5px;
    font-size: 2rem;
    color: hsl(234, 12%, 34%);
}

.card-paragraph {
    margin: 0;
    font-size: 1.3rem;
    color: hsl(229, 6%, 66%);
}

.card-image {
    padding-top: 3rem;
    display: flex;
    justify-content: right;
}

@media (max-width: 400px){
    width: 80vw;
    margin: auto;
}
}


</style>