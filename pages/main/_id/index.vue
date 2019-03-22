<template>
    <div>
        <div class="row p-4">
            <div class="col-11 col-md-6 col-lg-8 mx-auto my-3 my-lg-0">
                <h1 class="title text-center">{{ vid.title }}</h1>
                <hr>
                <iframe
                    style="width: 100%; height: 450px"
                    :src="vid.thumbUrl"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div class="col-12 text-center py-3">
                    <a
                        target="_blank"
                        :href="vid.thumbUrl"
                        class="btn btn-primary py-3 border-0 w-50 bg-warning"
                    >
                        Visit Video
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <div class="comments">Disqus will be integerated here</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    asyncData(context) {
        return new Promise((resolve, reject) => {
            resolve({
                vid: context.app.store.state.vids.find(
                    x => x.id == context.params.id
                )
            });
        });
    }
};
</script>

<style lang='scss' scoped>
.title {
    font-weight: 300;
    font-size: 2.25rem;
}
.comments {
    background: rgb(158, 95, 95);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    color: #fff;
}
</style>