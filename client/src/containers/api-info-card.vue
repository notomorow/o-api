<template>
    <div class="wrap">
        <h2>
            <Button type="primary" @click="returnHome" icon="home" style="float: right">首页</Button>
            新增API
        </h2>
        <Form :label-width="60">
            <Form-item label="名称：">
                <Input v-model="APIForm.name" placeholder="请输入"></Input>
            </Form-item>
            <Form-item label="路径：">
                <Input v-model="APIForm.path" placeholder="请输入API相对路径，例如: /api/bonds">
                    <Select v-model="APIForm.method" slot="prepend" style="width: 80px;">
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                    </Select>
                </Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="next">下一步</Button>
            </Form-item>
        </Form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 0,
            APIForm: {
                name: '',
                path: '',
                method: 'GET'
            }
        }
    },
    methods: {
        returnHome() {
            this.$store.commit('切换页面', 'home')
        },
        next() {
            // this.step++
            this.$store.commit('新增API', this.APIForm)
        }
    }
}
</script>

<style scoped>
.wrap {
    font-size: 14px !important;
}
h2 {
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
}
</style>
