<script setup lang="ts">
import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@vue/apollo-composable'
import { GetUserResponse, GetUserRequest } from 'shared';

const variables: GetUserRequest = {
  id: 555,
  email: 'john.doe@example.com'
}

const { result, loading, error, load: getUser } = useLazyQuery<GetUserResponse, GetUserRequest>(gql(`
  query getUser($id: Int!, $email: String!) {
    user(id: $id, email: $email) {
      id
      email
    }
  }
`), variables)

const fetchData = () => getUser()

</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="result">{{ result.user }}</div>
  <div v-else-if="error">{{ error }}</div>
  <button v-else @click="fetchData">Load</button>
</template>

<style>
</style>
