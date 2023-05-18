// 定义数据源
var data = {
  // 点集
  nodes: [],
  // 边集
  edges: []
};

// 创建 G6 图实例
const graph = new G6.Graph({
  container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
  // 画布宽高
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  modes: {
    default: ['drag-canvas', 'zoom-canvas', 'drag-node']
  },
  defaultNode: {
    shape: 'rect',
    //labelCfg: {
      style: {
          width: 150,
          height: 50,
          radius: 10,
          stroke: '#00C0A5',
          fill: '#92949F',
          fillOpacity: 0.45,
          lineWidth: 2,
        //fill: '#666',
        fontSize: 14,
        fontWeight: 'bold'
      }
    //}
  },
  defaultEdge: {
    shape: 'polyline',
    style: {
      endArrow: true,
      lineWidth: 2,
      stroke: '#ccc'
    }
  }
  // layout:{
  //   type: 'circular',
  //   preventOverlap: true,
  //   radius: 300,
  // },
});
// graph.data(data);
// graph.render();