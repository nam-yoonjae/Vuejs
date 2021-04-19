<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
            <input ref="answer" minlength="4" maxlength="4" v-model="value"/>
            <button type="submit">입력</button>
        </form>
        <div>시도 : {{ tries.length }}</div>
        <div>
            <h2> 시도 목록 </h2>
            <ul>
                <li v-for="(item, index) in tries" :key="index">
                    <div>{{item.try}}</div>
                    <div>{{item.result}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
const getNumbers = () => {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i < 4; i++) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

export default {
    data() {
        return {
            answer : getNumbers(), // ex) [1,3,5,9]
            tries : [],
            value : '',
            result : '',
        }
    },
    // LifeCycle
    validate() {
        // 페이지 컴포넌트가 렌더링되기전에 호출된다. 
        // console.log('validate()'); 안보임
        // validate() 는 true 또는 false 로만 리턴해야한다.
        // 동적인 route 나 넘어온 parameter 의 유효성, 값 처리를 확인할 때 쓴다.
    },
    fetch() {
        // console.log('fetch()'); 안보임
        // validate 하고 나서 렌더링 되기 전에 이루어진다. 
        // asyncData 랑 비슷하지만 컴포넌트 데이터를 세팅하지 않는다.
        // 보통 데이터에 vue store 를 통해 fetch 할 때 쓰인다.
    },
    asyncData() {
        // console.log('asyncData'); 이것도 안보임
        // merges with component data 
        // called every time before loading page components 
        // 페이지 로드할때마다 불러와진다.
    },
    beforeCreate() {
        // 여기서부터 콘솔이 보인다.
        // beforeCreate Hook 은 뷰 인스턴스가 초기화되었을 때 호출된다.
        console.log('beforeCreated()');
    },
    created() {
        // Vue Instance 가 생성되면 호출된다.
        console.log('created');
        // created() 가 이루어지고 나면 fetch pending 이 일어난다 (?)
        
    },
    beforeMount() {
        console.log('beforeMount()');
    },
    mounted() {
        console.log('mounted');
    },
    methods : {
        onSubmitForm() {
            console.log(this.value);
            console.log(this.answer);
            console.log(this.value == this.answer.join(''));
            if(this.value == this.answer.join('')){// 정답 맞췄으면
                this.tries.push({
                    try : this.value,
                    result : '홈런'
                });
            alert('정답. 게임을 다시 시작합니다.');
            this.answer = getNumbers();
            this.tries = [];
            this.result = '';
            } else { // 오답
                if(this.tries.length >= 9) { // 10번째 시도일때
                    alert(`9번 넘게 틀려서 실패! 답은 ${this.answer.join('')} 입니다.\n게임을 다시 시작합니다.`);
                    this.answer = getNumbers();
                    this.tries = [];
                    this.value = '';
                    this.result = '';
                    this.$refs.answer.focus();
                }
                // 스트라이크 갯수와 볼 갯수를 알려줘야한다.
                let strike = 0;
                let ball = 0;
                
                // 문자열을 숫자배열로 바꾸는 코드
                const answerArray = this.value.split('').map(v => parseInt(v));

                for(let i = 0; i < 4; i++) {
                    if(answerArray[i] === this.answer[i]){ // 숫자 + 자릿수 모두 정답 (strike)
                        strike++;
                    } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답 (ball)
                        ball++;
                    }
                }
                this.tries.push({
                    try : this.value,
                    result : `${strike} 스트라이크, ${ball} 볼입니다.`,
                });
                this.$refs.answer.focus();
                this.value = '';
            }
        }
    }
};
</script>
<style>

</style>