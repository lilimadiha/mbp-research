<template>
    <div>
        <pre>
{{result}}
        </pre>
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
            var self= this;
            cmd.get(
                '.\\app\\dist\\ATS.exe',
                function(err, data, stderr){
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