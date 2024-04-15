<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <template v-if="props?.options?.chartName != ''">
    <apexchart :options="chartOptions" :series="props?.series" />
  </template>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    options: {
      chartName: {
        type: String,
      },
      type: {
        type: String,
        default: () => 'area'
      },
      height: {
        type: Number,
        default: () => 350
      },
      tooltip: {
        y: {
          formatter: {
            type: Function,
            default: () => {}
          }
        },
        x: {
          formatter: {
            type: Function,
            default: () => {}
          }
        }
      },
      yaxis: {
        labelsFormatter: {
          type: Function,
          default: () => {}
        }
      }
    },
    series: {
      type: Array,
      default: () => []
    }
  })

  const chartOptions = computed(() => ({
    chart: {
      id: `${props?.options?.chartName}-chart`,
      type: props?.options?.type || 'area',
      height: props?.options?.height || 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    title: {
      text: props?.options?.chartName,
      align: 'left',
      style: {
        fontSize: '14px'
      }
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    grid: {
      clipMarkers: false
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 1,
        opacityTo: 0
      }
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: props?.options?.tooltip?.y?.formatter
      },
      x: {
        formatter: props?.options?.tooltip?.x?.formatter
      },
    },
      yaxis: {
        labels: {
          formatter: props?.options?.yaxis?.labelsFormatter
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        }
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        }
      }
  }))
</script>
