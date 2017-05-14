<template>
    <div>
        <!--<pre>
        {{result}}
                </pre>-->
    
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="grid-content">
                    <img src="/cloud-computing.svg" style="max-width: 200px; display: block; margin: 0 auto;">
                </div>
            </el-col>
        </el-row>
        <el-tabs type="border-card">
            <el-tab-pane label="MBP History">
                A new class of Neural Networks (NN), designated the Multiple Feed-Forward (MFF) networks, and a new gradient-based learning algorithm, Multiple Back-Propagation (MBP), are proposed and analyzed. MFF are obtained by integrating two feed-forward networks (a main network and a space network) in a novel manner. A major characteristic is their ability to partition the input space by using 
                selective neurons, whose actuation role is captured through the space localisation of input pattern data.
                 In this sense, only those neurons fired by a particular data point turn out to be relevant, while they retain 
                 the capacity to approximate closely to more general, irregular, non-linear features in localized regions. 
                 Together, the MFF networks and the MBP algorithm embody a new neural architecture, ensuring, 
                 in most cases, a better design choice than the one provided by the Multi-Layer Perceptron (MLP) 
                 networks trained with the Back-Propagation (BP) algorithm. The utilization of computable importance factors for the
                 actuation neurons whose relative magnitudes are derived from the space network properties and the training data is
                 the key reason for its ability to decompose the underlying mapping function into simpler sub-functions requiring 
                 parsimonious NN. Experimental results on benchmarks confirm improved efficiency of the gradient-based learning 
                 algorithm proposed, borne out by better generalization and in most cases by shorter training times for online 
                 learning, as compared with the MLP networks trained with the BP algorithm.

                The Multiple Back-Propagation algorithm is a generalization of the Back-Propagation algorithm. 
                Compared to the Back-Propagation algorithm Multiple Back-Propagation offers better generalization capabilities and 
                faster training times.
            </el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Reference">Config</el-tab-pane>
        </el-tabs>
    
    </div>
</template>

<script>
import cmd from "node-cmd";
export default {
    data() {
        return {
            result: "",
        }
    },
    mounted() {
        var self = this;
        cmd.get(
            '.\\app\\dist\\ATS.exe',
            function (err, data, stderr) {
                if (err) {
                    return console.log(err);
                }
                self.result += data;
                if (data.indexOf("Device does not support cuda") !== -1) {
                    alert("Hello");
                }
            }
        );
    }
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
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

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>