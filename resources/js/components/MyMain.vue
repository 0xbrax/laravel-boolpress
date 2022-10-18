<template>
    <section class="container">
        <h1 class="mb-5">Posts list</h1>

        <div v-if="isLoading == true" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-else class="row">
            <div class="card col-12 mb-5" v-for="(post, postIndex) in posts" :key="postIndex">
                <div class="card-body">
                    <h5 class="card-title">{{post.title}}</h5>
                    <p class="card-text">{{post.content}}</p>
                    <p class="card-text">{{post.category ? post.category.name : '-'}}</p>
                    <p class="card-text">
                        <span v-for="(tag, tagIndex) in post.tag" :key="tagIndex">{{post.tag.length ? post.tag + '; ' : '-'}}</span>
                    </p>
                </div>
            </div>

            <nav>
                <ul class="pagination">
                    <li class="page-item" :class="(currentPage == 1 ? 'disabled' : '')"><a class="page-link" href="#" @click.prevent="getPosts(currentPage - 1)">Previous</a></li>

                    <li v-for="(page, pageIndex) in pages" :key="pageIndex" 
                    class="page-item" :class="(currentPage == page) ? 'disabled' : ''">
                        <a class="page-link" href="#" @click.prevent="getPosts(page)">{{page}}</a>
                    </li>

                    <li class="page-item" :class="(currentPage == lastPage) ? 'disabled' : ''"><a class="page-link" href="#" @click.prevent="getPosts(currentPage + 1)">Next</a></li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'MyMain',
        data() {
            return {
                posts: [],
                currentPage: 1,
                lastPage: null,
                isLoading: true,
                pages: []
            }
        },
        methods: {
            getPosts(page) {
                this.isLoading = true;
                axios.get('/Boolean/laravel-api/public/api/posts', {
                    params: {
                        page: page
                    }
                })
                .then((response) => {
                    this.posts = response.data.results.data;
                    this.isLoading = false;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.getPages(this.lastPage);
                });
            },
            getPages(lastPage) {
                this.pages = [];
                for (let i = 1; i <= lastPage; i++) {
                    this.pages.push(i);
                }
            }
        },
        mounted() {
            this.getPosts(1);
        }
    }
</script>

<style scoped lang="scss">

</style>