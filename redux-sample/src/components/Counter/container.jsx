import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/count/actions';
import Counter from "./presentation";

// storeからどのstateを引っ張ってくるかを定義する
// "State"を"ToProps" >> State情報をPropsとして扱うことができる
const mapStateProps = ({ count }) => ({ count });

// ^下記のようにも書ける
// const mapStateProps = state => {
//   return { count: state.count };
// };

// どんなdispatcherをpropsに渡すかを定義する
// "Dispatch(Action関数)"を"ToProps" >> Action関数をPropsとして扱うことができる
const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
