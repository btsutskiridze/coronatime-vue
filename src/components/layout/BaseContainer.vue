<script setup></script>

<template>
  <div class="flex">
    <div class="flex flex-col h-screen w-full px-[3%] py-[2%] lg:w-3/4">
      <header>
        <img src="@/assets/images/logo.svg" alt="logo" />
      </header>
      <slot></slot>
    </div>
    <div
      class="h-screen hidden md:block w-2/4 bg-[url(@/assets/images/covid.png)] bg-no-repeat bg-center bg-cover"
    ></div>
  </div>
</template>
