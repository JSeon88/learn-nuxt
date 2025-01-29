<template>
    <article class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
        <ContentDoc v-slot="{doc}">
            {{ doc.body?.toc?.links }}
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </article>
</template>

<script setup lang="ts">
const route = useRoute();

console.log(route.path);
</script>
