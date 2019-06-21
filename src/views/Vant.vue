<template>
    <div id="vant">
        <section class="main">
            <h5>弹出层基本用法</h5>
            <p class="btn" @click="isFirstMaskShow = true;">右侧弹出</p>
            <br><br>
            <h5>弹出菜单基本用法</h5>
            <p class="btn" @click="isSheetShow = true">弹出菜单</p>
            <br><br>
            <h5>时间选择器基本用法</h5>
            <p class="btn" @click="isDatePickerShow = true">弹出菜单</p>
            <p style="padding-top:10px;">
                <input type="text" v-model="dateString" />
            </p>
            <p></p>
            <p class="btn"><router-link :to="{name: 'test'}">点击跳转测试路由</router-link></p>
        </section>

        <!-- 第一层弹出层 -->
        <van-popup v-model="isFirstMaskShow"
            position="right">
            <p class="btn" @click="isFirstMaskShow = false;">关闭弹出</p>
            <p class="btn margin" @click="isSecondMaskShow = true;">右侧弹出</p>
        </van-popup>

        <!-- 第二层弹出层 -->
        <van-popup v-model="isSecondMaskShow"
            position="right">
            <p class="btn" @click="isSecondMaskShow = false;">关闭弹出</p>
        </van-popup>

        <!-- 弹出时间选择器 -->
        <van-popup v-model="isDatePickerShow"
            position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="confirmDate"
                @cancel="isDatePickerShow = false"
            />
        </van-popup>
        
        <!-- 弹出下托菜单选择栏 -->
        <van-action-sheet
            v-model="isSheetShow"
            :actions="actions"
            @select="onSelect"
            cancel-text="取消"
        />
        
    </div>
</template>

<script>

import {createRequest} from '@/server-api/api.js'

import Vue from 'vue'
import { Popup,ActionSheet,Toast,DatetimePicker } from 'vant';
Vue.use(Popup).use(ActionSheet).use(Toast).use(DatetimePicker);

export default {
    data(){
        return{
            minDate: new Date(2000,1,1),
            maxDate: new Date(),
            currentDate: new Date(),
            dateString: "",



            actions: [
                { name: '选项1' },
                { name: '选项2' },
                { name: '选项3', subname: '描述信息' }
            ],

            isDatePickerShow: false,
            isFirstMaskShow: false,
            isSecondMaskShow: false,
            isSheetShow: false
        }
    },
    methods: {
        onSelect(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            Toast(item.name);
        },
        confirmDate(){
            this.isDatePickerShow = false;
            console.log(this.$moment(this.currentDate).valueOf());
            this.dateString = this.$moment(this.currentDate).format('YYYY-MM-DD HH:mm:ss');
        }
    },

    async created(){
        let test = await createRequest('get','testApi',{'test': 'testObj'});
    }
}
</script>

<style lang="scss" scoped>
#vant{
    min-height: 100%;
    background: #fff;
    padding: 0.15rem;

    p.btn{
        padding: 5px 15px;
        color: var(--white--);
        background-color: #07c160;
        border: 1px solid #07c160;
        border-radius: 2px;
        display: inline-block;
        &.margin{
            margin-left: 15px;
        }
    }

    section.main{
        h5{
            padding: 0.05rem 0;
            color:rgba(69,90,100,.6); 
            font-size:13px;
            font-weight: normal;
            color: var(--warning--);
        }
    }

    /deep/ .van-popup--right{
        width: 100%;
        height: 100%;
        padding: 0.15rem;
    }
}
</style>

