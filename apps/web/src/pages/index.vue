<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { GetUserResponse, GetUserRequest } from 'shared';
import GetUserGql from './get-user.gql'

const variables: GetUserRequest = {
  id: 555,
  email: 'john.doe@example.com'
}

const { result, loading, error } = useQuery<GetUserResponse, GetUserRequest>(GetUserGql, variables)

</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="result">{{ result.user }}</div>
  <div v-else-if="error">{{ error }}</div>
</template>

<style>
</style>
