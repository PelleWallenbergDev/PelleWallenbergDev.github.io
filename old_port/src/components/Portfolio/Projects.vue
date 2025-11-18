<script lang="ts">

</script>

<template>
    <div class="main"> 
        <div class="text">
            <p>Hi my name is Pelle Wallenberg. Im a student at <a href="https://liu.se/">Linköping University</a>. I study Innovative programming, 
                the innovative part being that we often work with different tools to create project. 
                This makes us build up our portfolio as well as our programming expertise.
            </p>
            <break/>
            <p>
                I have created different project such as games, websites using frameworks, my own programming language using a tree based node system and more!
                Ill also present different courses I have taken to give extra information about what I know and have done.
            </p>
        </div>
        <div class="imgcontainer">
            <img src="./images/coding.jpg">
        </div>
    </div>
</template>

<style>
 .main{
    color: black;
    margin: 20rem;
    margin-top: 5rem;
    background-color: var(--blue);
    
    display: flex;
    padding: 3rem;
    line-height: 1.1;

    border-radius: 12px;
    box-shadow: var(--blue) 0px 6px 24px 0px, var(--black) 0px 0px 0px 1px;
    padding-right: 8rem;
    padding-left: 8rem;
    gap: 3rem;
    justify-content: left;
 }

 .main p{
    font-family: "Teko", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: black;
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
 }

 .main a{
    all:unset
 }

 .imgcontainer
 {
    min-width: 30rem;

 }

 .imgcontainer img{
    width: 30rem;
    height: auto;
 }


 @media screen and (max-width: 1800px) {
    .main{
        padding: 5 rem;
        margin-left: 10%;
        margin-right: 10%;
        min-width: 800px;
    }
 }

 @media screen and (max-width: 1500px) {
    .main{
        padding: 5 rem;
        margin-left: 10%;
        margin-right: 10%;
        min-width: 800px;
    }
 }


 @media screen and (max-width: 1300px) {
    .main{
        padding: 3rem;
        margin: 15vw;
        min-width: 500px;
        flex-direction: column;

    }

    .imgcontainer{
        display: none;
        margin-left: 1vw;
    }


    
}

 /*p,h1,h2{
    font-family: "Teko", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #ebdbb2;
  }*/

</style>