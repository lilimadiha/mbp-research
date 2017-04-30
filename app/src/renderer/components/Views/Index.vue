<template>
    <el-tabs v-model="activeName" >
        <el-tab-pane label="Home" name="first">
            <span slot="label"><i class="el-icon-menu"></i> </span>
            <l-home></l-home>
        </el-tab-pane>
        <el-tab-pane label="MBP Details" name="second">
            <l-details></l-details>
        </el-tab-pane>
        <el-tab-pane label="Test and Train" name="third">
           <l-train></l-train>
        </el-tab-pane>
        <el-tab-pane label="How to" name="four">
           <l-tutorial></l-tutorial>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import LHome from "./Home.vue"
    import LTrain from "./Train.vue"
    import LDetails from "./Details.vue"
    import LTutorial from "./Tutorial.vue"

    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        components: {
            LTrain,
            LDetails,
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

<!--<script src="D:\ELECTRON\my-mbp\build\sigma.js"></script>
<script src="D:\ELECTRON\my-mbp\build\sigma.min.js"></script>
<script src="D:\ELECTRON\my-mbp\build\plugins\sigma.parsers.gexf.min.js"></script> -->

<style>
    .el-tabs {}
    
    .el-tabs .el-tabs__item.is-active {
        color: green;
    }
    
    .el-tabs__active-bar {
        background-color: green;
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