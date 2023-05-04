<template>
    <section class="main">
        <div class="container">
            <div class="header">
                <h1>Reliable, efficient delivery</h1>
                <h2>Powered by Technology</h2>
                <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

            </div>

            <div class="cards">
                <div class="supervisor__card flex">
                    <Card title="Supervisor" desc="Monitors activity to identify project roadblocks" icon="icon-supervisor.svg" borderColor="hsl(180, 62%, 55%)" />
                </div>
                <div class="team__builder__card flex">
                    <Card title="Team Builder" desc="Scans our talent network to create the optimal team for your project" icon="icon-team-builder.svg" borderColor="hsl(0, 78%, 62%)" />

                </div>
                <div class="karma__card flex">
                    <Card title="Karma" desc="Regularly evaluates our talent to ensure quality" icon="icon-karma.svg" borderColor="hsl(34, 97%, 64%)" />

                </div>
                <div class="calculator__card flex">
                    <Card title="Calculator" desc="Uses data from past projects to provide better delivery estimates" icon="icon-calculator.svg" borderColor="hsl(234, 12%, 34%)"  />
                </div>
            </div>

        </div>

    </section>

</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import { defineComponent } from 'vue';
// import cards from '@/data/cards'

export default defineComponent({
    name: "home-view",
    components: { Card }
})
</script>