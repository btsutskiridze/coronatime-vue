<script setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  rules: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Enter your {{ name }}</label
    >
    <div class="mt-1">
      <Field
        :id="name"
        :name="name"
        :type="type"
        :rules="rules"
        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
      <error-message :name="name" class="text-red-600 absolute text-xs pb-1" />
    </div>
  </div>
</template>
