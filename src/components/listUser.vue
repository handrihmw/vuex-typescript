<script lang="ts" setup>
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';

import { userStoreEnum, StoreEnum } from '@/types';

const store = useStore();

const fetchUser = async () =>
  await store.dispatch(
    `${StoreEnum.ModuleNames.USER}/${userStoreEnum.Actions.FETCH_USER}`
  );

const detail = computed(
  () => store.state.user[StoreEnum.ModuleNames.USER].detail
);

console.log(detail.value);

const name = computed(() => detail.value.data.name);
const username = computed(() => detail.value.data.username);

onBeforeMount(async () => {
  await fetchUser();
});
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">No.</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Username</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4">1.</td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ name }}
          </th>
          <td class="px-6 py-4">{{ username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>