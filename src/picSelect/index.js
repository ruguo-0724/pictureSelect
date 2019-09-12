import React from 'react'
import PictureSelect from '../PictureSelect'
// 实现一个如下图的图片选择 组件 PictureSelect ，要求其能接受 value  和 onChange  两个属性，
// value 表示当前选中了哪些图片， onChange 是当选择发生变化时的回调，它的参数是新的 value 。
const Page = () => {
    const [value, setValue] = React.useState(['1','2']);
    const pictures = [
      {
        id: '1',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '2',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '3',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
    ];
    // 同上面的数据
    
    return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};

export default Page