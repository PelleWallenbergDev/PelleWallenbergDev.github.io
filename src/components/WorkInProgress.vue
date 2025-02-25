<script>
</script>

<template>
    <div class="wrapper">
        <h2 class="multicolortext">
            Work In Progress
        </h2>
        <p class="maintext">
            This page is a work in progress. It will be used as a portfolio and for other fun projects
        </p>
    </div>
</template>

<style>
    .multicolortext{
        margin: auto;
        font-family: "Teko", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: 50px;
        background: -webkit-linear-gradient(45deg, #fb4934, #d3869b,#83a598);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .maintext{
        margin: auto;
        font-size: 20px;
        color: #f9f5d7;
        font-family: "Teko", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }


    .wrapper {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 40%;
        margin-left: 30%;
    }


    @media screen and (max-width: 900px) {
        .wrapper{
            margin-top: 100px;
        }
        
    }
</style>