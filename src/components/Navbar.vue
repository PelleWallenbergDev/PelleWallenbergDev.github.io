<script>
</script>

<template>

    <div class="navbar">
        <a href="/portfolio">
            Portfolio
        </a>
        <a href="/warehouse">
            The Warehouse
        </a>
        <a>
            Placeholder
        </a>
    </div>

</template>

<style>

    .navbar{
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin: auto;
    }

    a{
        text-wrap: nowrap;
        color: #f9f5d7;
        font-family: "Teko", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        text-decoration: none;
    } 

    a:hover{
        text-decoration: underline;
        cursor: pointer;
    }

    a.underlined
    {
        text-decoration: underline;
    }


    @media screen and (max-width: 900px) {
        .navbar{
            flex-direction: column;
        }

        a{
            margin: auto;
           font-size: 50px; 
        }
        
    }
</style>