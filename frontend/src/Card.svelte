<script lang="typescript">
  export let value: number;
  export let name: string;
  export let icon: string;
  export let bgIcon: string;
</script>

<div class="col-span-12">
  <div
    class="flex flex-row bg-white shadow-sm rounded p-4 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
    <div
      class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl {bgIcon}">
      <span class="text-xl">{icon}</span>
    </div>
    <div class="flex flex-col flex-grow ml-4">
      <div class="text-sm text-gray-500 capitalize">{name}</div>
      <div class="font-bold text-lg">{value}</div>
    </div>
  </div>
</div>
