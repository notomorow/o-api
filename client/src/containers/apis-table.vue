<template>
<div class="apis-table">
    <Input placeholder="搜索"></Input>
    <Button class="add" type="primary" icon="plus-round" long @click="createAPI">添加API</Button>
    <ul>
        <li v-for="APIId in APIsList" @click="showAPIInfo(APIId)">
            <span>{{ APIs[APIId].method }}</span>
            <span>{{ APIs[APIId].path }}</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    computed: {
        APIsList() {
            return Object.keys(this.$store.state.APIs)
        },
        APIs() {
            return this.$store.state.APIs
        }
    },
    methods: {
        createAPI() {
            this.$store.commit('切换页面', 'api')
        },
        showAPIInfo(APIId) {
            this.$store.commit('切换页面', 'api')
            this.$store.commit('选择API', APIId)
        }
    }
}
</script>

<style>
.apis-table {
    height: 100%;
    width: 29%;
    padding: 10px;

    border: 1px solid #d7dde4;
    background: #f5f7f9;
}
.add {
    margin: 5px 0;
}
</style>
