<template>
    <div class="container-fluid px-md-5">
        <adminNav></adminNav>
        <hr>
        <nuxt/>
    </div>
</template>

<script>
import adminNav from "~/layouts/partials/adminNav";
export default {
    middleware: ["isAdmin"],
    components: {
        adminNav
    },
    created() {
        if (process.client) {
            if (
                window.localStorage.getItem("token") &&
                !window.localStorage.getItem("isAdmin")
            ) {
                this.$router.push("/main");
            }
            if (!window.localStorage.getItem("token")) {
                this.$router.push("/");
            }
        }
    }
};
</script>

<style>
</style>