<template>
    <div>
    
        <el-tabs v-model="activeName" type="card"> 
            <el-tab-pane label="Home" name="first"  >
                <span slot="label" ><i class="el-icon-menu"></i> Home </span>
                <l-home></l-home>
            </el-tab-pane>
            <el-tab-pane label="Convert Data" name="second">
                <l-tutorial></l-tutorial>
            </el-tab-pane>
            <el-tab-pane label="Test and Train" name="third">
                <l-train></l-train>
            </el-tab-pane>
        </el-tabs>
    
    </div>
</template>

<script>
    import LHome from "./Home.vue"
    import LTrain from "./Train.vue"
    import LTutorial from "./Tutorial.vue"

    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        components: {
            LTrain,
            LHome,
            LTutorial,
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
    };
</script>

<style>
.el-tabs__nav-wrap {
    background-color: #0097A7;
    -webkit-text-fill-color: white;
    
}

.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    background-color: white;
    -webkit-text-fill-color: #0097A7;
}
    

   

    

.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>