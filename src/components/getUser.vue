<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { userStoreEnum, StoreEnum } from '@/types'

const store = useStore()

const detail = computed(
  () =>
    store.getters[
      `${StoreEnum.ModuleNames.USER}/${userStoreEnum.Getters.GET_USER}`
    ]
);

const getUsers = computed(() => detail.value.data);

// console.log('getters: ', getUsers)
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 mt-4">
      <thead class="text-xs text-gray-900 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Username</th>
          <th scope="col" class="px-6 py-3">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b border-gray-200" v-for="user in getUsers" :key="user.id">
          <td class="px-6 py-4">
            {{ user.id }}
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {{ user.name }}
          </th>
          <td class="px-6 py-4">
            {{ user.username }}
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
