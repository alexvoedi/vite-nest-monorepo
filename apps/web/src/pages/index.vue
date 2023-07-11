<script setup lang="ts">
import { IUser } from 'shared'

const { t } = useI18n()

const user: IUser = {
  id: 3,
  email: 'john.doe@exmaple.com'
}
</script>

<template>
  <div>
    <h1>{{ t('hello') }}</h1>
    <p>{{ user.email }}</p>
  </div>
</template>

<style>
</style>
