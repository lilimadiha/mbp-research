<template>
    <div>
        <el-collapse v-model="convertData" accordion>
            <el-collapse-item title="Step 1: Upload Data" name="1">
                <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Filename">
                        <input type="file" @change="handleDataFile">
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="Step 2: Resizing Data" name="2">
                <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
            </el-collapse-item>
            <el-collapse-item title="Step 3: Convert Data Format" name="3">
                <div>Simplify the process: keep operating process simple and intuitive;</div>
                <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
            </el-collapse-item>
        </el-collapse>
    
        <div class="block">
            <span class="wrapper">
                    <el-button @click="onSubmit" type="success"> Resize and Convert </el-button>
                    <el-button>Cancel</el-button>
                </span>
        </div>
    
    </div>
</template>


<script>
export default {
    data() {
        return {
                convertData: '1'
        }
    },
    methods: {
        onSubmit() {
            console.log('Success Convert');
        },
        handleDataFile() {
             console.log('Success Upload File');
        }

    }
}
</script>