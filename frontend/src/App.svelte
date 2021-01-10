<script lang="typescript">
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
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

<div class="flex flex-col justify-center items-center h-full bg-gray-50">
  <div class="grid grid-cols-12 gap-4">
    <Card
      name="temperature"
      icon="🌡"
      value={data.temperature}
      bgIcon="bg-red-50" />
    <Card name="humidity" icon="💦" value={data.humidity} bgIcon="bg-blue-50" />
  </div>
</div>
