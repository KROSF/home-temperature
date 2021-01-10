<script lang="typescript">
  import { onMount } from "svelte";
  interface Sensor {
    temperature: number;
    humidity: number;
  }

  let data: Sensor = { temperature: 0.0, humidity: 0.0 };
  onMount(() => {
    const interval = setInterval(async () => {
      const response = await fetch("/api");
      data = await response.json();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
</style>

<div class="flex flex-col justify-center items-center">
  <span>{data.temperature}</span>
  <span>{data.humidity}</span>
</div>
