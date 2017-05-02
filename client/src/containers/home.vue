<template>
<div>
    <h2>Hello, {{ user.username }}！</h2>
    <p>项目：{{ user.team }}</p>
    <p>地址：
        <Input v-model="url.protocol" style="width: 300px">
            <Select v-model="url.hostname" slot="prepend" style="width: 80px">
                <Option value="http">http://</Option>
                <Option value="https">https://</Option>
            </Select>
        </Input>
    </p>
    <Tabs type="card" style="margin-top: 20px;">
        <Tab-pane label="所属 API">标签一的内容</Tab-pane>
        <Tab-pane label="所属测试案例">标签二的内容</Tab-pane>
    </Tabs>
</div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    data() {
        return {
            url: {
                protocol: '127.0.0.1',
                hostname: 'http'
            }
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>
