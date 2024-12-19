<template>
    <div>
        <h1>About Page</h1>
    </div>
    <div>
        <button @click="enableCustomLayout">Upsate layout</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
})

function enableCustomLayout() {
    setPageLayout('another');
}
</script>