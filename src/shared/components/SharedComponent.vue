<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

withDefaults(defineProps<Props>(), {
  title: () => 'Shared Component',
});
</script>
