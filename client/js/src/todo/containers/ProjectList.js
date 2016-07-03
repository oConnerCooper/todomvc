import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 容器
import ProjectList from '../components/ProjectList';

// 引入action
import * as project from '../actions/project';

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(project, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);