// 返回component和action的方法，其实就是直接调用action的方法，然会的不是之前原生的对象，二是dispatch触发 ，然后state改变
import { bindActionCreators } from 'redux';
// 用于把原来的component和redux筛选出来的state作为props传入
import { connect } from 'react-redux';


// 这个就是平时我们之前写的component
import Index from '../components/Todo';

// 开始组织必要的props属性
function mapStateToProps(state) {
    // 这里写需要的属性
    return {
        filter: '',
        list: []
    }
}

// action等一会再组织

export default connect(mapStateToProps)(Index);