<template>
  <div>
    <div style="width: 80%;margin: 0 auto">
      <el-input style="width:80%" v-model="input" placeholder="请输入内容"></el-input><el-button icon="el-icon-search"  @click="serchar" circle></el-button>
      <el-table
        :data="invitation"
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="回复内容"
          width="100">
        </el-table-column>
        <el-table-column
          prop="summary"
          label="回复昵称">
        </el-table-column>
        <el-table-column
          prop="createdate"
          label="日期"
          width="180">
        </el-table-column>
      </el-table>
      <el-row>
        第 <span>1/3</span>页 <el-button>首页</el-button> <el-button>上一页</el-button><el-button>末页</el-button>
      </el-row>
    </div>
    {{invdata}}
  </div>
</template>
<script>

export default {
  name: "ReplyDetailView",
  created() {
    this.that = this;
    let that = this
    this.invid = this.$route.params.invid
    this.$axios.get('/api/replyDetail/query/'+this.invid).then(function (pro) {
      that  = pro.data
      console.log(that)
    })
  },
  data() {
    return {
      that:null,
      input: '',
      invid : '',
      invdata:''
    }
  },
  methods : {}
}
</script>
<style scoped>

</style>
