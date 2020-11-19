import logo from './logo.svg';
import './App.css';
import {sum, diff} from './utility.js';
import NameTag from './NameTag.js';

// function sample_msg(number) {
//   var text = "아이러브커피N 하지마세요 똥망겜 " + number

//   return text
// }

// function sample_tag() {
//   return (
//     <div id='123'>
//       나트리스 망해라
//     </div>
//   )
// }

function App() {
  // var returned = (num) => `아아아아아 ${num}`

  // let sum_result = sum(4, 5)
  // let diff_result = diff(40, 5)

  return (
    <div className="App">
      <NameTag name="곱창전골" tag="맛있겠다" color="red" type="inline" image="https://th4.tmon.kr/thumbs/image/037/44c/ee0/7b407e58c_700x700_95_FIT.jpg" />
      <NameTag name="피자샵 치즈후라이" tag="맛있겠다" type="break-all" image="https://lh3.googleusercontent.com/proxy/2JudJ7aRb0BasaEKTsj-gv4sK5VDVT5MzrthOCtKg-wzEj6G53VSc3l9Xstx4h7cFI87k6WBbYbHabhICfh_XNShy3JCW1tW11WkvwMaPvoIr3n2BimTornClenOu7-nOh8WGjOKAoPcb3MHH8LgIxz74YxukfX0MJbVhvBpMAXAoyRlSyws5A24cyf7jxC1dz0YQN29kLGiCUwPNV0j6MinKtBRqThMXbrUyD7I6PAvMQ2F5-eMj0RNU4ec2RwshU248jX6TYAVyHuw-louPRmBsaKrIe-wftfMieSMMK1sSzYk_JCahHo-5nOaKBVdHHpZmA" />
      <NameTag name="버거킹 콰트로치즈와퍼" tag="맛있겠다" image="https://lh3.googleusercontent.com/proxy/bfjjsuugspQ2R3y5yKqdX1jzdqWBMgcc9Aw71KnBdPNVl6AYYwe4VQYzK12OI_hQOoOaeEBSRpc5EUXqQPRK-sGBPnWjU7bIQ5tU_OrOhV2LwuZN" />
      <NameTag name="감자탕" tag="맛있겠다" image="https://craftlog.com/m/i/6084934=s1280=h960" />
    </div>
  );
}

export default App;
