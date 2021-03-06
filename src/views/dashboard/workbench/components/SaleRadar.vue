<template>
  <Card :loading="loading" title="销售统计">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>

<script lang="ts">
  import { defineComponent, watch, ref } from 'vue-demi';
  import { Card } from 'ant-design-vue';
  import useEcharts from '/@/hooks/web/useEcharts';
  import type { Ref } from 'vue';

  export default defineComponent({
    name: 'SaleRadar',
    components: { Card },
    props: {
      loading: Boolean,
      width: { type: String, default: '100%' },
      height: { type: String, default: '380px' },
    },
    setup(props) {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useEcharts(chartRef as Ref<HTMLDivElement>);
      watch(
        () => props.loading,
        (val) => {
          if (val) return;
          setOptions({
            legend: { bottom: 0, data: ['Visits', 'Sales'] },
            tooltip: {},
            radar: {
              radius: '60%',
              splitNumber: 8,
              indicator: [
                { text: '2017', max: 100 },
                { text: '2017', max: 100 },
                { text: '2018', max: 100 },
                { text: '2019', max: 100 },
                { text: '2020', max: 100 },
                { text: '2021', max: 100 },
              ],
            },
            series: [
              {
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                  shadowBlur: 0,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1,
                },
                data: [
                  {
                    value: [90, 50, 86, 40, 50, 20],
                    name: 'Visits',
                    itemStyle: { color: '#b6a2de' },
                  },
                  {
                    value: [70, 75, 70, 76, 20, 85],
                    name: 'Sales',
                    itemStyle: { color: '#67e0e3' },
                  },
                ],
              },
            ],
          });
        },
        { immediate: true }
      );

      return { chartRef };
    },
  });
</script>
