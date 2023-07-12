<script setup lang="ts">
import { GetUserResponse } from 'shared';

const user: GetUserResponse = {
  id: 1,
  email: 'john.doe@example.com',
}

</script>

<template>
  <h1>Hello World 2</h1>
  <div>{{ user }}</div>
</template>

<style>
</style>
