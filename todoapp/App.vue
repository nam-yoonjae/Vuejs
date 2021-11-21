<template>
    <div>
        <h1> {{ msg1 }} </h1>
        <h3> {{ msg2 }} </h3>    
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            msg1 : 'Hello, world!',
            msg2 : 'this word is styled by scss!',
        }
    }
}
</script>
<style scoped lang="scss">
// lang="scss" 를 넣으면 scss 문법을 쓸 수 있다.
h1 {
    color : red;
}

// 변수 선언
$color : #333;
h3 {
    color : $color;
}
</style>