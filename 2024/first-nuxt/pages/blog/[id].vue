<template>
    <div>
        <h1>Blog Page....!</h1>
    </div>
    <div>
        Post id is {{ route.params.id }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

console.log(route);
</script>
