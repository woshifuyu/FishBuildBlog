<template>
    <div>
        <div ref="geoEcharts" class="geo-echart"></div>
    </div>
  
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
import { color } from 'echarts'

export default {
  name: "Geo",
  data() {
    return {
      timer: null,
      seriesData: [
        {name: '天津市', value: 20057.34},
        {name: '北京市', value: 15477.48},
        {name: '上海市', value: 31686.1},
        {name: '河北省', value: 6992.6},
        {name: '山东省', value: 44045.49},
        {name: '山西省', value: 4045.49},
      ],
      map: null
    }
    
  },
  created() {
    
  },
  mounted(){
      this.initGeoEcharts();
  },
  methods: {
    initGeoEcharts() {
      axios.get('./china.json').then(res => {
         echarts.registerMap('china', res.data)
          this.$nextTick(() => {
            const map = echarts.init(this.$refs['geoEcharts'], null, {renderer:'svg'})
            const option = {
              title: {
                // text:"中国地图",
                left: 'center',
                // subtext: "下载链接",
                sublink: "http://datav.aliyun.com/tools/atlas/#&lat=30.772340792178525&lng=103.94573258937584&zoom=9.5"
              },
              // 悬浮窗
              tooltip: {
                trigger: 'item',
                formatter: function(params) {
                  console.log(2222, params);
                  return `${params.name}: ${params.value || 0}`

                }
              },
              // 图例
              // visualMap: {
              //   min: 800,
              //   max: 50000,
              //   text: ['High', 'Low'],
              //   realtime: false,
              //   calculable: true,
              //   inRange: {
              //       color: ['lightskyblue', 'yellow', 'orangered']
              //   }
              // },
              geo: {
                map: 'china',
                zoom: 1,
                roam: 'move',
                nameMap: {
                  '新疆维吾尔自治区': "新疆",
                  "西藏自治区": '西藏',
                  "甘肃省": "甘肃",
                  "宁夏回族自治区": "宁夏",
                  "广西壮族自治区": "广西",
                  "内蒙古自治区": "内蒙古",
                  "香港特别行政区": "香港",
                  "澳门特别行政区": "澳门"
                },
                label: {
                  show: true,
                  color: 'black',
                  position: "inside",
                  distance: 0,
                  fontSize: 10,
                  rotate:45
                },
                // 所有地图的区域颜色
                itemStyle: {
                  areaColor: 'rgba(51,159,205,0.8)',
                  borderColor: '#02c0ff'
                },
                emphasis: {
                  itemStyle: {
                    // areaColor: 'rgba(0,0,0,0.5)',
                    // shadowColor: 'rgba(0,0,0,0.8)',
                    shadowBlur: 5,
                    shadowOffsetY: 5
                  }
                },
                // 针对某些区域做一些特别的样式
                // regions: [{
                //   name: '广东省',
                //   itemStyle: {
                //     areaColor: 'yellow',
                //     color: 'black',
                //     borderColor: 'pink'
                //   }
                // }]
              },  
              // 数据
              series: [
                {
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  color:'white',
            	  data: [
                    // {name: '江苏省', value:[120.15, 31.99, 9]}, // 值为，经纬度，数据
                    // {name: '湖北省', value: [111, 31.89, 15477]},
                    // {name: '四川省', value: [102.15, 31.89, 31686]},
                    // {name: '浙江省', value: [120.15, 29.89, 6992]},
                    // {name: '山东省', value: [118.15, 36.9, 44045]},
                    {name: '山东省', value: [118.15, 36.9, 1]},
                    // {name: 'zhe', value: [118.15, 36.9, 1]}
                  ],
                  SymbolSize: 4
                },
                {
                  type: 'lines',
                  coordinateSystem: 'geo',
                  data: [
                    // {coords: [[121.15,38], [111, 31.89], [100.15, 31.89],[121.15, 29.89], [105.15, 30.89]]}
                  ],
                  polyline: true, // 是否是多段线
                  lineStyle: {
                    color: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      // colorStops: [{
                      //     offset: 0, color: 'black' // 0% 处的颜色
                      // }, {
                      //     offset: 1, color: 'black' // 100% 处的颜色
                      // }],
                      global: false, // 缺省为 false
                      // shadowColor: 'rgba(0, 0, 0, )',
                      shadowBlur: 10,
                      curveness: 1
                    },
                    opacity: 0.3,
                    width: 2,
                  },
                  // 线特效的配置
                  // effect: {
                  //   show: true,
                  //   period: 5, // 特效动画的时间，单位为 s
                  //   trailLength: 1, //特效尾迹长度[0,1]值越大，尾迹越长重
                  //   // symbol: 'image://' + require('@/echartsMap/money.png'), // 自定义动画图标
                  //   symbolSize: 15, //图标大小
                  //   // color:"white"
                  // }
                }
                
              ]
            }
            map.setOption(option)
          })
      })
    }
  },
}
</script>

<style scoped>
.geo-echart{
  height: 980px;
  width: 980px;
}
</style>
