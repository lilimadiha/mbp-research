<template>
    <div>
        <el-collapse  accordion >
            <el-collapse-item title="Upload Data" name="1" class="tab1">
                <div>Select an image from your device ( Max: 100 MB & 100 MP, GIF format: 30 MB & 10 MP ) :</div>
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Filename">
                        <el-popover ref="popover1" placement="top-start"  width="200"  trigger="hover" content="this file only accepted file format .csv and .bat only">
                        </el-popover>
                            <input type="file" @change="handleDataFile" v-popover:popover1>
                    </el-form-item>
                </el-form>
                <div>You can upload an image in JPEG, PNG, GIF or BMP format.</div>      
            </el-collapse-item>
            <el-collapse-item title="Resizing Data" name="2">
            
                <div>Resize the image by to be exactly the size you specified, for example: 1366x768 pixels.</div>
                    <el-form>
                        <el-form-item label="Height">
                            <el-col :span="5">
                                <el-input placeholder="Enter Height"></el-input> 
                            </el-col>
                             pixels
                        </el-form-item>
                        <el-form-item label="Weight">
                            <el-col :span="5">
                                <el-input placeholder="Enter weight"></el-input>
                            </el-col>
                            pixels
                        </el-form-item>
                    </el-form>
            </el-collapse-item>
            <el-collapse-item title="Convert Data Format" name="3">
                <div></div>
                <el-form>
                    <el-form-item label="Please select the output image format">
                    <el-select placeholder="Select format">
                        <el-option label="JPEG" value="jpeg"></el-option>
                        <el-option label="PNG" value="png"></el-option>
                        <el-option label="GIF" value="gif"></el-option>
                        <el-option label="BMP" value="bmp"></el-option>
                        <el-option label="PGM" value="pgm"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    
        <div class="block">
            <span class="wrapper">
                    <el-button @click="onSubmit" type="success" style="background-color: #006064;"> Resize and Convert </el-button>
                    <el-button>Cancel</el-button>
                </span>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
                //convertData: '1',
                form: [{


                }],
                options: [{
                            value: 'jpeg',
                            label: 'JPEG'
                        }, {
                            value: 'png',
                            label: 'PNG'
                        },{
                            value: 'gif',
                            label: 'GIF'
                        },{
                            value: 'bmp',
                            label: 'BMP'
                        },{
                            value: 'pgm',
                            label: 'PGM'
                        }],

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

<style>
.el-collapse .el-collapse-item__header {
    background-color: #0097A7;
    color: white;
}

.el-collapse .el-collapse-item__content {
   background-color: #B2EBF2;
   
}

.block {
    padding-top: 5%;
    padding-left: 75%;
}



</style>
