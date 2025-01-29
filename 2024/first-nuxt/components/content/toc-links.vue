<template>
    <ul>
        <li v-for="link in links" :key="link.id">
            <NuxtLink :to="{path: route.path, hash: `#${link.id}`}" :class="{'ml-4': level}">
                {{ link.text }}
            </NuxtLink>
            <TocLinks :links="link.children" :level="level + 1" />
        </li>
    </ul>
</template>

<script setup lang="ts">
const route = useRoute();

type LinkType = {
    id: string,
    text: string,
    children?: LinkType[]
}

defineProps({
    links: Array<LinkType>,
    level: {
        type: Number,
        default: 0
    }
})
</script>