<template>
    <section class="not-prose font-mono">
        <div class="column text-gray-400 text-sm">
            <div>date</div>
            <div>title</div>
        </div>
        <ul>
            <li v-for="post in posts" :key="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
                <div :class="{'text-white dark:text-gray-900': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear}">{{ post.yaer }}</div>
                <NuxtLink :to="post._path">
                    {{ post.title }}
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">

const data = await useAsyncData('blog-list', 
    () =>  queryContent('/blog')
        .where({_path: {$ne: '/blog'}})
        .only(['_path', 'title', 'publishedAt'])
        .sort({publishedAt: -1})
        .find()
);

const posts = computed(() => {
    if(!data.data.value) return [];

    const result = [];
    let lastYear = null;
    for(const post of data.data.value) {
        const displayYear = new Date(post.publishedAt).getFullYear();
        result.push({
            ...post,
            yaer: displayYear,
            displayYear: displayYear !== lastYear
        });
        lastYear = displayYear;
    }

    return result;
})

console.log(posts);
</script>

<style lang="postcss" scoped>
.column {
    @apply flex items-center space-x-8 border-b border-gray-200 dark:border-gray-700
}
</style>