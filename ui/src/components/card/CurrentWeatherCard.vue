<script lang="ts">
import { defineComponent } from 'vue';
import WeatherIcon from '@/components/icon/WeatherIcon.vue';

export default defineComponent({
  name: 'CurrentWeatherCard',
  props: {
    current: {
      type: Object,
      required: true
    },
    units: {
      type: Object,
      required: true
    },
    dayOrNight: {
      type: String,
      required: true
    }
  },
  computed: {
    getTemUnit() {
      return this.units.temperature_2m;
    },
    getTemperature() {
      return this.current.temperature_2m;
    }
  },
  components: {
    WeatherIcon
  }
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6 temp-text">
        <h3 class="text-center">{{ getTemperature }} {{ getTemUnit }}</h3>
      </div>
      <div class="col-6">
        <WeatherIcon :code="current.weather_code" :dayOrNight="dayOrNight" />
      </div>
    </div>
  </div>
</template>