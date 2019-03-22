<template>
    <div class="row justify-content-around">
        <div
            class="card text-white bg-transparent border-0 col-6 mt-3 mt-sm-0 col-sm-3"
            v-for="vid in vids"
            :key="vid.id"
        >
            <nuxt-link :to="{path: '/admin/'+vid.id+'/edit'}" style="position: relative">
                <img class="card-img-top" :src="vid.thumbImg">
                <div class="overlay"></div>
                <div class="title">{{ vid.thumbTitle }}</div>
            </nuxt-link>
        </div>
        <nuxt-child class="col-12"/>
    </div>
</template>

<script>
export default {
    layout: "admin",
    computed: {
        vids() {
            return this.$store.state.vids;
        }
    }
};
</script>

<style lang='scss' scoped>
.card {
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.1;
        transition: all 0.25s;
        z-index: 0;
    }
    a:hover .overlay {
        opacity: 0.5;
    }
    a {
        cursor: pointer;
    }
    .title {
        width: 100%;
        transform: translate(-50%, -50%);
        text-align: center;
        text-transform: capitalize;
        position: absolute;
        font-size: 1.2rem;
        color: #000;
        font-weight: 700;
        color: #fff;
        letter-spacing: 1px;
        top: 50%;
        left: 50%;
        z-index: 1;
        @media screen and (max-width: 1100px) and (min-width: 992px) {
            font-size: 1.67rem;
        }
    }
    img {
        height: 200px;
    }
}
</style>