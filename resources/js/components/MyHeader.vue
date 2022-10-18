<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Boolpress</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(link, linkIndex) in menuLinks" :key="linkIndex">
                        <a class="nav-link" :href="link.link">{{link.name}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'MyHeader',
        data() {
            return {
                menuLinks: [
                    {
                        name: 'Home',
                        link: '#'
                    },
                    {
                        name: 'Posts',
                        link: '#'
                    },
                    {
                        name: 'Contact',
                        link: '#'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>