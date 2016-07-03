import React, { Component } from 'react';
// 创建项目输入的container
import ProjectCreater from '../containers/ProjectCreater';

import ProjectList from '../containers/ProjectList';

import ProjectFooter from '../containers/ProjectFooter';

export default class Todo extends Component {
    render() {
        return(
            <div>
                <ProjectCreater></ProjectCreater>
                <ProjectList></ProjectList>
                <ProjectFooter></ProjectFooter>
                
            </div>
        );
    }
}