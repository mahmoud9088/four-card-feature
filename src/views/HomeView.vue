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
                    <Card title="Supervisor" desc="Monitors activity to identify project roadblocks" icon="../assets/images/icon-supervisor.svg" borderColor="hsl(180, 62%, 55%)" />
                </div>
                <div class="team__builder__card flex">
                    <Card title="Team Builder" desc="Scans our talent network to create the optimal team for your project" icon="../assets/images/icon-team-builder.svg" borderColor="hsl(0, 78%, 62%)" />

                </div>
                <div class="karma__card flex">
                    <Card title="Karma" desc="Regularly evaluates our talent to ensure quality" icon="../assets/images/icon-karma.svg" borderColor="hsl(34, 97%, 64%)" />

                </div>
                <div class="calculator__card flex">

                    <Card title="Calculator" desc="Uses data from past projects to provide better delivery estimates" icon="../assets/images/icon-calculator.svg" borderColor="hsl(234, 12%, 34%)"  />
                </div>
            </div>

        </div>

    </section>

</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "home-view",
    components: { Card }
})
</script>

<style lang="scss">

.container{
    margin: 80px;
    min-height: 600px;
    flex: 1;

    .header{
        max-width: 465px;
        text-align: center;
        margin: auto;
        margin-bottom: 75px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        h1{
            font-size: 25px;
            color:$very-dark-blue;
            font-weight: $thin;
            line-height: 1.4;

        }
        h2{
            font-size: 25px;
            color:$very-dark-blue;
            font-weight: $bold;
            line-height: 1.2;
        }
        p{
            font-size: 16px;
            color:$grayish-blue;
            font-weight: $thin;
            margin-top: 10px;
        }

        @media (max-width: 400px){
         width: 80vw;
        }
    }

    .cards{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-areas:"supervisor team-builder calculator" "supervisor karma calculator";
        @media (max-width: 1400px){
            grid-template-columns: repeat(2,1fr);
            grid-template-areas:"supervisor team-builder" "karma calculator" ;
        }
        @media (max-width: 920px){
            grid-template-columns: repeat(1,1fr);
            grid-template-areas:"supervisor" "team-builder" "karma" "calculator" ;
        }
        
        gap:30px;
        .flex{
            display: grid;
            place-items: center;
        }

        .supervisor__card{
            grid-area: supervisor;
        }
        .team__builder__card{
            grid-area: team-builder;
        }
        .karma__card{
            grid-area: karma;
        }
        .calculator__card{
            grid-area: calculator;
        }
    }

    @media (max-width: 920px){
        margin: 80px 40px;
        }

        @media (max-width: 500px){
        margin: 80px 20px;
        }
}

</style>