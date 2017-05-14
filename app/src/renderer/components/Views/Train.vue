<template>
    <div>
        <el-collapse v-model="activeNames" accordion>
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
                        <el-checkbox :label="fixedTopology" name="type" v-model="form.fixedTopology"></el-checkbox>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="Dataset" name="3">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Header Line">
                        <el-checkbox :label="headerLine" name="type" v-model="form.header"></el-checkbox>
                    </el-form-item>
                    <el-form-item label="Rescale input data">
                        <el-checkbox :label="rescaleInput" name="type" v-model="form.rescale"></el-checkbox>
                    </el-form-item>
                </el-form>
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="Training" name="3-1">
                        <el-form ref="form" :model="form" label-width="120px">
                            <el-form-item label="Samples">
                                <el-input v-model="form.numTrainSample" placeholder="0"> </el-input>
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
                                <el-input v-model="form.numTestSample" placeholder="0"> </el-input>
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
                        <el-input v-model="form.numOfNetwork" placeholder="Number of networks to train"></el-input>
                    </el-form-item>
                    <el-form-item label="Robust Learning">
                        <el-checkbox :label="robustLearning" name="type" v-model="form.robust"></el-checkbox>
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
                <el-button @click="trainRun" type="success">Train and Test</el-button>
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
    import cmd from "node-cmd";
    export default {
        data() {
            return {
                form: {
                    topology: "",
                    numTrainSample: 0,
                    numTestSample: 0,
                    numOfNetwork: 1,
                    stopRMS: 0.01,
                    epochs: 1,
                    fixedTopology: false,
                    algorithm: "",
                    device: "GPU",
                    header: false,
                    rescale: false,
                    robust: false,
                    initialRandomSeed: 0,
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
                this.trainingSrcFile = file.srcElement.files[0].path;
            },
            handleTestingFile(file) {
                let isCSV = file.srcElement.files[0].path.length - file.srcElement.files[0].path.indexOf(".csv") === 4;
                let isTXT = file.srcElement.files[0].path.length - file.srcElement.files[0].path.indexOf(".txt") === 4;

                console.log(isCSV || isTXT);

                if (!isCSV && !isTXT) {
                    file.srcElement.value = "";
                    return this.testingFileFailed = true;
                }
                this.testingSrcFile = file.srcElement.files[0].path;
            },
            trainRun() {
                let config = " ";

                if (!this.trainingSrcFile) {
                    return console.log("Training Src not initiliazed!");
                }

                config += '"' + this.trainingSrcFile + '" ';

                if (this.testingSrcFile) {
                    config += '"' + this.testingSrcFile + '"';
                }

                if (!this.form.topology) {
                    return console.log("Topology not initiliazed!");
                }

                config += "-t " + this.form.topology + " ";

                if (!this.form.numTrainSample) {
                    return console.log("Number of Training Sample not initiliazed!");
                }

                config += "-p " + this.form.numTrainSample + " ";

                if (this.testingSrcFile && !this.form.numTestSample) {
                    if (this.form.numTestSample) {
                        config += this.form.numTestSample + " ";
                    } else {
                        return console.log("You initiliazed testing src file bu Number of Testing Sample not initiliazed!");
                    }
                }

                if (this.form.header) {
                    config += "-h ";
                }

                if (this.form.numOfNetwork) {
                    config += "-n "+ this.form.numOfNetwork + " ";
                }

                if (parseFloat(this.form.stopRMS) !== 0.01) {
                    config += "-s "+ this.form.stopRMS + " ";
                }

                if (this.form.epochs) {
                    config += "-e "+ this.form.epochs + " ";
                }

                if (this.form.initialRandomSeed) {
                    config += "-r " + this.form.initialRandomSeed + " ";
                }

                if (!this.form.robust) {
                    config += "-R ";
                }

                if (this.form.algorithm === "BP") {
                    config += "-b ";
                }

                if (this.form.fixedTopology) {
                    config += "-f ";
                }

                // config += "-q ";

                if (this.form.rescale) {
                    config += "-d ";
                }
                console.log(config);
                cmd.get('.\\app\\dist\\ATS.exe' + config,
                    function(err, data, stderr){
                        if (err) {
                            return console.log(err);
                        }
                        console.log(data);
                    }
                );
            },
            trueOrFalseString(input) {
                if (input) {
                    return "True";
                }

                return "False";
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
            },
            headerLine() {
                return this.trueOrFalseString(this.form.header);
            },
            fixedTopology() {
                return this.trueOrFalseString(this.form.fixedTopology);
            },
            rescaleInput() {
                return this.trueOrFalseString(this.form.rescale);
            },
            robustLearning() {
                return this.trueOrFalseString(this.form.robust);
            }
        }
    }
</script>




<style>
    .row-gutter {
        padding: 8px 0;
    }

    pre {
        white-space: pre-wrap;       /* Since CSS 2.1 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */
    }
</style>