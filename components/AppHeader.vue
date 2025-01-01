<template>
  <header
    class="static top-0 h-16 shadow-md dark:shadow-white-500/50 backdrop-blur-lg dark:bg-transparent transition-all py-3 px-4 md:px-8 lg:px-32"
    style="backdrop-filter: blur(10px)"
  >
    <nav class="flex gap-4 justify-between items-center">
      <!-- 左侧 logo -->
      <NuxtLink to="/">
        <div class="flex gap-4 items-center">
          <NuxtImg src="logo.svg" alt="logo" class="w-10 h-10" />
          <div>Guang</div>
        </div>
      </NuxtLink>
      <div class="flex">
        <AppColorMode />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.dark header {
  box-shadow: 0 4px 6px -1px rgb(255 255 255 / 10%),
    0 2px 4px -2px rgb(255 255 255 / 10%);
}
</style>
