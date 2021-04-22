<template>
    <div>
        <div id="screen" :class="state">{{ message }}</div>
        <div>
            <div>평균시간 : {{ }} </div>
            <button @click="onRest">리셋</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            result : [],
            state : 'waiting',
            message : '클릭해서 시작하세요.',
        };
    },
    methods : {
        onRest() {

        },
    },
};
</script>
<style scoped>
/* css 를 처리하려면
vue-style-loader 와 css-loader 를 추가로 설치해야한다
> npm i vue-style-loader -D (-D는 개발용을 뜻함)
> npm i css-loader -D 
> 그 다음 npm run build 해야함

*/
#screen {
    width:300px;
    height:200px;
    text-align:center;
    user-select: none;
}
#screen.waiting{
    background-color: aqua;
}
#screen.ready{
    background-color: red;
    color:white;
}
#screen.new{
    background-color: greenyellow;
}
</style>