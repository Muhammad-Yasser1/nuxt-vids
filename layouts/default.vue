<template>
    <div class="container-fluid px-md-5">
        <Navbar></Navbar>
        <hr>
        <nuxt/>
    </div>
</template>

<script>
import Navbar from "~/layouts/partials/Navbar";
export default {
    components: {
        Navbar
    }
};
</script>

<style>
</style>
