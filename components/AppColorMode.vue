<script setup lang="ts">
const colorMode = useColorMode();

function toggleDark() {
  // colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  colorMode.value = "sepia";
}
</script>

<template>
  <UTooltip :text="`切换${$colorMode.value === 'dark' ? '白天' : '黑夜'}模式`">
    <UButton
      :icon="$colorMode.value === 'dark' ? 'i-carbon-moon' : 'i-carbon:sun'"
      size="sm"
      variant="ghost"
      class="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
      @click="toggleDark"
    />
  </UTooltip>
</template>
<style>
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
