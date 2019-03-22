<template>
    <h1 class="my-4 text-center">Select Video</h1>
</template>

<script>
export default {
    created() {
        const firstVid = this.$store.state.vids[0];
        this.$router.push("/main/" + firstVid.id);
    }
};
</script>

<style>
</style>
