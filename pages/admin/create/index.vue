<template>
    <div class="container p-5">
        <form @submit.prevent="CreateVid">
            <h1 class="mb-3">Create a new video:</h1>
            <div class="form-group">
                <label for="title">Title:</label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Write your vid title here"
                    v-model="vid.title"
                >
            </div>
            <div class="form-group">
                <label for="thumbTitle">thumbTitle:</label>
                <input
                    type="text"
                    class="form-control"
                    id="thumbTitle"
                    placeholder="Write your vid thumbTitle here"
                    v-model="vid.thumbTitle"
                >
            </div>
            <div class="form-group">
                <label for="thumbImg">thumbImg:</label>
                <input
                    type="text"
                    class="form-control"
                    id="thumbImg"
                    placeholder="Write your vid thumbImg here"
                    v-model="vid.thumbImg"
                >
            </div>
            <div class="form-group">
                <label for="thumbUrl">thumbUrl:</label>
                <input
                    type="text"
                    class="form-control"
                    id="thumbUrl"
                    placeholder="Write your vid thumbUrl here"
                    v-model="vid.thumbUrl"
                >
            </div>
            <div class="custom-control custom-checkbox my-4">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    v-model="vid.grantAccess"
                    id="grantAccess"
                >
                <label class="custom-control-label" for="grantAccess">Check to grant access</label>
            </div>
            <div class="custom-control custom-checkbox my-4">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    v-model="vid.isVideoActive"
                    id="isVideoActive"
                >
                <label
                    class="custom-control-label"
                    for="isVideoActive"
                >Check to set Video Active state</label>
            </div>
            <div class="form-group">
                <label for="btnUrl">btnUrl:</label>
                <input
                    type="text"
                    class="form-control"
                    id="btnUrl"
                    placeholder="Write your vid btnUrl here"
                    v-model="vid.btnUrl"
                >
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            <nuxt-link tag="button" :to="{name:'admin'}" type="button" class="btn btn-dark">Cancel</nuxt-link>
        </form>
    </div>
</template>

<script>
export default {
    layout: "admin",
    data() {
        return {
            vid: {
                btnUrl: "",
                grantAccess: true,
                isVideoActive: true,
                thumbImg: "",
                thumbTitle: "",
                thumbUrl: "",
                title: ""
            }
        };
    },
    methods: {
        CreateVid() {
            this.$store.dispatch("createVid", { ...this.vid });
        }
    }
};
</script>

<style scoped lang='scss'>
h1 {
    @media screen and (max-width: 600px) {
        font-size: 2rem !important;
    }
    @media screen and (max-width: 420px) {
        font-size: 1.3rem !important;
    }
}
</style>