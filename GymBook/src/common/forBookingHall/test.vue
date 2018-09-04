<template>
    <div id="container">
        <el-row>
            <el-col :span='12'>
                <el-input  v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-row>
        <el-row>
            <el-col :span='12'>
                <li v-for='(item,index) in testArr' :key=index>
                    {{item}}
                </li>
            </el-col>
           
        </el-row>  
    </div>
</template>

<script>
import 'element-ui'
export default {
    data:function(){
        return{
            input:'',
            testArr:['1','2','3','4']
        }
    },
    props:[],
    computed:{

    },
    methods:{

    }

}
</script>

<style>

</style>

