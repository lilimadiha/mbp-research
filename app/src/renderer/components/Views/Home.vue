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
        <el-tabs type="border-card" >
            <el-tab-pane label="Introduction" >
                <div>This project was integrated with GPUMLib using Element which is a dekstop UI Library that based on javascript which is 
                use to analyze big data using Multi-Back Propagation (MBP) Algorithm. For more information about the component of this project, please refer link below:  </div>
                <el-col>
                        <ul class="li-bg">
                            <li type="circle"><div><a href="">Vue.js</a> is a progressive framework for building user interfaces. </div></li>
                            <li type="circle"><div><a href="http://element.eleme.io/#/en-US">Element</a> is a Vue 2.0 based component library for developers, designers and product managers.</div></li>
                            <li type="circle"><div><a href="http://gpumlib.sourceforge.net/">GPUMLib Machine Library</a> is an open source Graphic Processing Unit Machine Learning Library. This library aims to provide machine learning researchers and practitioners with a high performance library by taking 
                            advantage of the GPU enormous computational power. The library is developed in C++ and CUDA.</div></li>
                            <li type="circle"><div><a href="https://electron.atom.io/">Electron</a> is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS
                            where it is cross platform that compatible with Mac, Windows, and Linux, </div></li>
                        </ul>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="MBP History">
                <div>The Multiple Back-Propagation algorithm is a generalization of the Back-Propagation algorithm. 
                Compared to the Back-Propagation algorithm Multiple Back-Propagation offers better generalization capabilities and 
                faster training times.</div>
                <div> <a href="https://en.wikipedia.org/wiki/Backpropagation">For more information</a> </div>
            </el-tab-pane>
            
            <el-tab-pane label="Reference">
            The above is some related paper for this project:
            
                <el-row :gutter="20">
                    <el-col>
                        <ul id="example-1" class="li-bg">
                            <li type="circle">Noel Lopes and Bernardete Ribeiro. An evaluation of multiple feed-forward networks on GPUs. International Journal of Neural Systems (IJNS), 21(1):31-47, 2011.</li>
                            <li type="circle">Noel Lopes and Bernardete Ribeiro. GPU implementation of the multiple back-propagation algorithm. In 10th International Conference on Intelligent Data Engineering and Automated Learning (IDEAL 2009), LNCS 5788, pages 449-456. Springer, 2009.</li>
                            <li type="circle">Noel Lopes and Bernardete Ribeiro. Hybrid learning multi neural architecture. In INNS-IEEE International Joint Conference on Neural Networks (IJCNN 2001), volume 4, pages 2788-2793, 2001.</li>
                            <li type="circle">Noel Lopes and Bernardete Ribeiro. An efficient gradient-based learning algorithm applied to neural networks with selective actuation neurons. Neural, Parallel and Scientific Computations, 11:253{272, 2003.</li>
                            <li type="circle">Machine Learning Big Data Framework and Analytics for Big Data Problems, Shafaatunnur Hasan, Siti Mariyam Shamsuddin, Noel Lopes, Int. J. Advance Soft Compu. Appl, Vol. 6, No. 2, July 2014, Copyright © SCRG Publication, 2014</li>
                            <li type="circle">Emilio Corchado HujunYin (Eds.), Intelligent Data Engineering and Automated Learning -IDEAL 2009, 10th International Conference, Burgos, Spain, September, pp. 23-26, 2009, Proceedings. ISSN 0302-9743</li>
                            <li type="circle">Wei, Xun-Kai Li, Ying-Hong Li, Yu-Fei Zhang, Dong-Fang, 2008, “Enclosing machine learning: concepts and algorithms”, Neural Computing and Applications, ISSN- 1433-3058. DOI- 10.1007/s00521-007-0113-y pp 273-243.</li>
                            <li type="circle">Jurgen Schmidhuber, The Swiss AI Lab IDSIA Istituto Dalle Molle di Studi sull’Intelligenza Artificiale, University of Lugano & SUPSI, Galleria 2, 6928 Manno-Lugano Switzerland, 8 October 2014 “Deep Learning in Neural Networks: An Overview”. IDSIA-03-14 / arXiv:1404.7828v1 [cs.NE].pp 2553-2561.</li>
                        </ul>
                    </el-col>
            
                </el-row>
            </el-tab-pane>
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
                    alert("Hello! Welcome to MBP, continue? ");
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

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
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

.li-bg {
    font-size: 15px;
    font-style: italic;
    
}
</style>