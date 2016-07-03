import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 容器
import ProjectFooter from '../components/ProjectFooter';

// 引入action
import { getFilterStatus } from '../actions/filter';
import { getStatus, deleteItems } from '../actions/project';

function mapStateToProps(state) {
    return {
        filter: state.filter,
        list: state.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        Object.assign({ getFilterStatus }, { getStatus, deleteItems }),
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFooter);