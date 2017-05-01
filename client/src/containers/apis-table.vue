<template>
<div class="apis-table">
    <Input v-model="apiFilterString" placeholder="搜索"></Input>
    <Button class="add" type="primary" icon="plus-round" long @click="createAPI">添加API</Button>
    <Tree :data="baseData"></Tree>
</div> 
</template>

<script>
export default {
    data() {
        return {
            baseData: [{
                title: 'parent 1',
                children: [{
                    title: 'parent 1-0',
                    children: [{
                        title: 'leaf',
                        disableCheckbox: true
                    }, {
                        title: 'leaf'
                    }]
                }, {
                    title: 'parent 1-1',
                    expand: true,
                    checked: true,
                    children: [{
                        title: '<span style="color: red">leaf</span>'
                    }]
                }]
            }]
        }
    },
    methods: {
        createAPI() {
            this.$store.dispatch('增加API')
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
