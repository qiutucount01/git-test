<template>
  <div>
    <div style="width: 80%;margin: 0 auto">
      <h2>回复信息列表</h2>
      <el-table
        :data="invitation"
        stripe
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          width="100">
        </el-table-column>
        <el-table-column
          prop="summary"
          label="内容摘要">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者">
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
  </div>
</template>

<script>

export default {
  name: "ReplyDetaToInvi",
  created() {
   /* let url = "/api/invitation/query"
    this.that = this
    let that = this.that
    this.$axios.get(url).then(function (promise) {
      that.invitation =promise.data
    });
    */
  },
  data() {
    return {
      that:null,
      input: '',
      invitation:[
        {
          id: '',
          title:'',
          summary:'',
          author:'',
          createdate:''
        }
      ]
    }
  },
  methods : {
    serchar:function (){
      let url = "/api/invitation/title/";
      if (this.input == '' ){
        return
      }
      this.that = this
      let that = this.that
      this.$axios.get(url + this.input).then(function (promise){
        that.invitation =promise.data
      })
    }
    ,findDep:function (index,data){
      console.log(index)
      console.log(index)
      console.log(index)
    }
  }
}
</script>

<style scoped>

</style>
