import moment from 'moment';  //일반 브라우저는 ES6의 import 키워드를 해석 불가능 -> 웹팩을 통해 해결

export function currentTime() {
     return moment().format("H:m:s");
}