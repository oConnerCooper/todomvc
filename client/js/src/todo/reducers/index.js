import filter from './filter';
import list from './list';
let rootReducerMap = {
    filter: filter,
    list: list
}
/*
这里生成的就是如下的一个map
{
    filter: filter的function，然后返回处理结果
    list同理
}
*/
export default rootReducerMap;