<template>
  <div>
    <div style="width: 80%;margin: 0 auto">
      <el-input style="width:80%" v-model="input" placeholder="请输入内容"></el-input><el-button icon="el-icon-search"  @click="serchar" circle></el-button>
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
        <el-table-column
          label="操作">
          <template slot-scope="scope">

            <el-button
              @click.native.prevent="findDep(scope.$index)"
              type="text"
              size="small">
              查看回复
            </el-button>

          </template>
<!--          <button type="button"><router-link to="/replyDetailView/">查看回复</router-link></button>-->
<!--          <button type="button">删除</button>-->
        </el-table-column>
      </el-table>
      <el-row>
        第 <span>1/3</span>页 <el-button>首页</el-button><el-button>上一页</el-button><el-button>末页</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>

export default {
  name: "InvitationView",
  created() {
    let url = "/api/invitation/query"
    this.that = this
    let that = this.that
    this.$axios.get(url).then(function (promise) {
      that.invitation =promise.data
    });
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
    , findDep: function (index) {
      console.log(this.invitation[index].id)

      this.$router.push("/replyDetailView/"+this.invitation[index].id)
      // sessionStorage.setItem("nowNvid",)

    }

  }
}
</script>
<style scoped>

</style>
