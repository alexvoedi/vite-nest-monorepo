<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { gql } from "@apollo/client/core";
import { GetUser, GetUserQuery } from 'shared'

const user: GetUser = {
  id: 6,
  email: 'john.doe@example.com',
}

const { result, loading } = useQuery<GetUserQuery>(gql`
  query {
    user {
      id
      email
    }
  }
`)

</script>

<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>

  <div v-else-if="result">
    <p>{{ result.user }}</p>
  </div>
</template>

<style>
</style>
