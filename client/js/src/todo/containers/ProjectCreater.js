import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 容器
import ProjectCreater from '../components/ProjectCreater';

// 引入action
import * as project from '../actions/project';


function mapDispatchToProps(dispatch) {
    return bindActionCreators(project, dispatch);
}

export default connect(function() {return {}}, mapDispatchToProps)(ProjectCreater);