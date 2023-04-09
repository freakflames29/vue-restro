<template>
    <Nav />
    <router-view />
</template>
<script>
import Nav from "./components/Nav.vue";
export default {
    name: "Root",
    components: {
        Nav,
    },
};
</script>
