<template>
    <div>
        <article v-if="post">
            <h5 class="card-title">Title: {{post.title}}</h5>
            <p class="card-text">Content: {{post.content}}</p>
            <p class="card-text">Category: {{post.category ? post.category.name : '-'}}</p>
            <p class="card-text">
                Tag: <span v-if="post.tags.length == 0">-</span>
                <span v-else v-for="(tag, tagIndex) in post.tags" :key="tagIndex">{{tag.name + '; '}}</span>
            </p>
            <router-link :to="{name: 'post'}" class="btn btn-primary">Back</router-link>
        </article>
        <div v-else class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SinglePostPage',
    data() {
        return {
            post: null
        }
    },
    methods: {
        getSinglePost() {
            const slug = this.$route.params.slug;
            axios.get('/Boolean/laravel-boolpress/public/api/posts/' + slug)
            .then((response) => {
                this.post = response.data.results;
                console.log(this.post)
            })
            .catch((error) => {
                this.$router.push({name: 'not-found'});
            });
        }
    },
    mounted() {
        this.getSinglePost();
    }
}
</script>

<style scoped lang="scss">

</style>