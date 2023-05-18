var data = {
    nodes: [],
    edges: []
  };

  const graph = new G6.Graph({
    container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
    // 画布宽高
    width: document.documentElement.clientWidth*0.5,
    height: document.documentElement.clientHeight*0.5,
    modes: {
      default: ['drag-canvas', 'zoom-canvas', 'drag-node']
    },
    defaultNode: {
      shape: 'circle',
      //labelCfg: {
        style: {
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
      style: {
        endArrow: true,
        lineWidth: 2,
        stroke: '#ccc'
      }
    },
    layout:{
      preventOverlap: true,
    }
  });
