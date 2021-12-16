<template>
    <header>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container cart">
                <a href="/" class="navbar-brand d-flex align-items-center">
                    <span class="iconify" data-icon="mdi:glass-tulip"></span>
                    <div class="title">Wine Product List</div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.bg-dark {
    background-color: darkslategray !important;
}
svg {
    height: 2rem;
    width: 2rem;
}
.title {
    padding-left: .25rem;
    letter-spacing: .0145rem;
    font-size: 1.3rem;
}  
</style>