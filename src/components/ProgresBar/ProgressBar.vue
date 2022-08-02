
<template>
  <div class="progress-bar">
    <div class="top-num" :style="{paddingLeft:doneWidth}">
      <div class="text-bar">{{title}}</div>
      <div class="text-icon"><i class="el-icon-caret-bottom"></i> </div>
    </div>
    <div class="p-line"></div>
    <div class="p-done" :style="{width:doneWidth}"></div>
    <div class="bottom-num">
      <div style="float:left">0</div>
      <div style="float:right">{{totalCost}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ProgressBar',
  props: {
    title: {
      type: String,
      default: '进度条',
    },
    // 给的数值
    drugCost: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      totalCost: 100,
    }
  },
  computed: {
    ratio() {
      const r = this.drugCost / this.totalCost
      return r
    },
    doneWidth() {
      return (this.drugCost / this.totalCost) * 100 + '%'
    },
  },
  created() {},
  mounted() {
    console.log('doneStyle:', this.doneWidth)
  },
  methods: {},
}
</script>


 <style lang="less" scoped>
.progress-bar {
  margin: 200px;
  width: 200px;
  position: relative;
  .p-line {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 10px;
    border-radius: 4px;
    background-color: #eeeeee;
  }
  .p-done {
    position: absolute;
    z-index: 2;
    // width:80%;
    height: 10px;
    border-radius: 4px;
    background: linear-gradient(
      45deg,
      #40a9ff 25%,
      #1890ff 0,
      #1890ff 50%,
      #40a9ff 0,
      #40a9ff 75%,
      #1890ff 0
    );
    background-size: 30px 30px;
  }
  .top-num {
    margin-left: -30px;
    margin-right: -80px;
    text-align: left;
    .text-bar {
      font-size: 13px;
    }
    .text-icon {
      color: #008cdb;
      padding-left: 20px;
      margin-top: -5px;
      i {
        font-size: 18px;
      }
    }
  }
  .bottom-num {
    width: 100%;
    padding-top: 15px;
  }
}
</style>