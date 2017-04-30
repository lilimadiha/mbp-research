<template>
    <div>
        <el-collapse v-model="activeNames">
            <!--<el-row>
                <el-col :xs="12" :sm="12" :md="8" :lg="12" class="row-gutter text">-->
            <el-collapse-item title="Device" name="1">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Device">
                        <el-select v-model="form.device" placeholder="Select Your Device">
                            <el-option label="CPU" value="CPU"></el-option>
                            <el-option label="GPU" value="GPU"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="Network Configuration" name="2">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Algorithm">
                        <el-select v-model="form.algorithm" placeholder="Select Algorithm">
                            <el-option label="Back-Propagation (BP)" value="BP"></el-option>
                            <el-option label="Multi-Back Propagation (MBP)" value="MBP"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Topology">
                        <el-input v-model="form.topology" placeholder="e.g:10-30-10-1"> </el-input>
                    </el-form-item>
                    <el-form-item label="Fixed Topology">
                        <el-checkbox :label="header.text" name="type" v-model="checkboxHeader"></el-checkbox>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="Dataset" name="3">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Header Line">
                        <el-checkbox :label="header.text" name="type" v-model="checkboxHeader"></el-checkbox>
                    </el-form-item>
                    <el-form-item label="Rescale input data">
                        <el-checkbox :label="header.text1" name="type" v-model="checkboxHeader1"></el-checkbox>
                    </el-form-item>
                </el-form>
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="Training" name="3-1">
                        <el-form ref="form" :model="form" label-width="120px">
                            <el-form-item label="Samples">
                                <el-input v-model="form.samples" placeholder="0"> </el-input>
                            </el-form-item>
                            <el-form-item label="Filename">
                                <input type="file" @change="handleTrainingFile">
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                </el-collapse>
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="Validation" name="3-2">
                        <el-form ref="form" :model="form" label-width="120px">
                            <el-form-item label="Samples">
                                <el-input v-model="form.samples" placeholder="0"> </el-input>
                            </el-form-item>
                            <el-form-item label="Filename">
                                <input type="file" @change="handleTestingFile">
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                </el-collapse>
            </el-collapse-item>
            <el-collapse-item title="Training Configuration" name="4">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Networks">
                        <el-input v-model="form.name" placeholder="Number of networks to train"></el-input>
                    </el-form-item>
                    <el-form-item label="Robust Learning">
                        <el-checkbox :label="header.text1" name="type" v-model="checkboxHeader1"></el-checkbox>
                    </el-form-item>
                </el-form>
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="Stop Criteria" name="4-1">
                        <el-form ref="form" :model="form" label-width="120px">
                            <el-form-item label="Epochs">
                                <el-input v-model="form.epochs" placeholder="0"> </el-input>
                            </el-form-item>
                            <el-form-item label="Stop RMS">
                                <el-input v-model="form.stopRMS" placeholder="0.010"> </el-input>
                            </el-form-item>
                            <el-form-item label="Initial Random Seed">
                                <el-input v-model="form.initialRandomSeed" placeholder="0"> </el-input>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                </el-collapse>
            </el-collapse-item>

        </el-collapse>
        <div class="block">
            <span class="wrapper">
                <el-button type="success">Train and Test</el-button>
                <el-button>Cancel</el-button>
            </span>
        </div>
        <el-dialog title="Warning!" v-model="trainingFileFailed" size="tiny">
            <span>Wrong format data</span>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="trainingFileFailed = false">Cancel</el-button>
                    <el-button type="primary" @click="trainingFileFailed = false">Ok</el-button>
                </span>
        </el-dialog>
        <el-dialog title="Warning!" v-model="testingFileFailed" size="tiny">
            <span>Wrong format data</span>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="testingFileFailed = false">Cancel</el-button>
                    <el-button type="primary" @click="testingFileFailed = false">Ok</el-button>
                </span>
        </el-dialog>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                fileList:[],
                activeNames: [''],
                checkboxHeader: false,
                checkboxHeader1: false,
                options: [{
                    value: 'cpu',
                    label: 'CPU'
                }, {
                    value: 'gpu',
                    label: 'GPU'
                }],
                value: '',
                trainingSrcFile: "",
                testingSrcFile: "",
                trainingFileFailed: false,
                testingFileFailed: false,
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },

            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleTrainingFile(file) {
                let isCSV = file.srcElement.files[0].path.length - file.srcElement.files[0].path.indexOf(".csv") === 4;
                let isTXT = file.srcElement.files[0].path.length - file.srcElement.files[0].path.indexOf(".txt") === 4;

                console.log(isCSV || isTXT);

                if (!isCSV && !isTXT) {
                    file.srcElement.value = "";
                    return this.trainingFileFailed = true;
                }
                this.trainingSrcFile = file.srcElement.files[0].path 
            },
            handleTestingFile(file) {
                let isCSV = file.srcElement.files[0].path.length - file.srcElement.files[0].path.indexOf(".csv") === 4;
                let isTXT = file.srcElement.files[0].path.length - file.srcElement.files[0].path.indexOf(".txt") === 4;

                console.log(isCSV || isTXT);

                if (!isCSV && !isTXT) {
                    file.srcElement.value = "";
                    return this.testingFileFailed = true;
                }
                this.testingSrcFile = file.srcElement.files[0].path 
            }


        },
        computed: {
            header() {
                let text = "True",
                    text1 = "True";
                // console.log(this.checkboxHeader);
                if (!this.checkboxHeader) {
                    text = "False";
                }
                if (!this.checkboxHeader1) {
                    text1 = "False";
                }
                return {
                    text,
                    text1,
                }
            }
        }
    }
</script>




<style>
    .row-gutter {
        padding: 8px 0;
    }
</style>