<template>
    <article class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
        <ContentDoc>
            <template v-slot="{doc}">
                <div class="grid grid-cols-6 gap-16">
                    <div :class="{'col-span-4': doc.toc, 'col-span-6': !doc.toc}">
                        <ContentRenderer :value="doc" />
                    </div>
                    <div class="col-span-2 not-prose" v-if="doc.toc">
                        <aside class="sticky top-8">
                            <div class="font-semibold mb-2">
                                Table of Contents
                            </div>
                            <nav>
                                <TocLinks :links="doc.body?.toc?.links" :active-id="activeId"/>
                            </nav>
                        </aside>
                    </div>
                </div>
            </template>
            <template #not-found>
                <div class="text-center">
                    <h1 class="text-4xl font-bold">404</h1>
                    <p class="text-lg">Page not found</p>
                </div>
            </template>
        </ContentDoc>
    </article>
</template>

<script setup lang="ts">
const activeId = ref<string|null>(null);

onMounted(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
        for(const entry of entries) {
            if (entry.isIntersecting) {
                activeId.value = entry.target.id;
                break;
            }
        };
    };

    const observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0.5,
    });
    const elements = document.querySelectorAll("h2, h3, h4, h5, h6");

    for(const el of elements) {
        observer.observe(el);
    }

    onBeforeMount(() => {
        for(const el of elements) {
            observer.unobserve(el);
        }
    })
});
</script>
