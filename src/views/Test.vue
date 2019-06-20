<template>
    <div id="Test">
        <p class="btn">
            <router-link :to="{name: 'vant'}">返回</router-link>
        </p>
    </div>
</template>

<script>
export default {
    created(){
        console.log(process.env.NODE_ENV);
        console.log(process.env.VUE_APP_URL);
    }
}
</script>

<style lang="scss" scoped>
#Test{
    padding: 0.15rem;
    min-height: 100%;
    background-color: #fff;
    p.btn{
        padding: 5px 15px;
        color: #fff;
        background-color: #07c160;
        border: 1px solid #07c160;
        border-radius: 2px;
        display: inline-block;
        &.margin{
            margin-left: 15px;
        }
    }
}
</style>