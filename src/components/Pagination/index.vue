<template>
  <!-- 分页器 -->
  <div class="pagination">
    <!-- 上 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startNumAndEndNum.start > 1"
      @click="$emit('getPageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>
    <!-- 中 -->
    <!-- 中间部分 -->
    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-if="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo', page)"
      :class="{active:pageNo==page}"
    >
      {{ page }}
    </button>
    <!-- 下 -->
    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-if="startNumAndEndNum.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
      :class="{active:pageNo==totalPage}"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>
    <button style="margin-left: 30px">共{{ total }}条</button>
  </div>
</template>

<script>
// pageNo：代表当前是在第几页
// pageSize：代表每一页展示多少条数据
// total：代表整个分页一共要展示多少条数据
// continues：代表分页连续页码个数
export default {
  name: "Pagination",
  // 父组件传递给字符串的数据：当前页、每一页展示多少条数据、数据总个数、连续页码数
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 计算总共多少页
    totalPage() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算出连续的页码的起始数字与结束数字
    startNumAndEndNum() {
      // 解构出连续页码数、当前页码、总页数
      const { continues, pageNo, totalPage } = this;
      // 先定义两个变量，存储起始数字与结束数字【连续页码的数字：至少是5】
      let start = 0;
      let end = 0;
      // 连续页码数字5【至少5页】：如果出现不正常的现象【页码数字少于5页】
      // 不正常现象【总页数没有连续页码多】
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // 正常现象【连续页码为5，总页数一定是大于5的】
        // 起始数字
        start = pageNo - parseInt(continues / 2);
        // 比如当前是第8页 连续页码是5
        // 6 7 8 9 10
        // 比如当前是第8页 连续页码是7
        // 5 6 7 8 9 10 11
        // 结束数字
        end = pageNo + parseInt(continues / 2);
        // 把出现不正常的现象【start数字出现0|负数】纠正
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 把出现不正常的现象【end数字大于总页码】纠正
        if (end > totalPage) {
          end = totalPage;
          start = end - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style scoped lang="less">
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>