import {CircularQueue} from "./cir_queue.js"
import { sleep } from "./sleep.js";
    
    
let addedCount=1

const queue = new CircularQueue(15);

function queue_To_graph()
{
      data = {
        nodes: [],
        edges: []
      };
      let addedCount=0;
      for(let i=queue.headIdx; i<queue.tailBackIdx; i++)
      { 
          let h=queue.Q[i%queue.capacity];
          //console.log(h); 
          data.nodes[addedCount]={
            x: 50+addedCount*120,
            y: 200,
            id: `node-${addedCount}`, 
            label: h
          };
          addedCount++;
      }
      addedCount=0;
      for(let i=queue.headIdx; i<=queue.tailBackIdx; i++)
      {
            data.edges[addedCount] ={
              source: `node-${addedCount}`,
              target: `node-${addedCount+1}`,
              id:`edge-${addedCount}`,
              style:{
                stroke:'#000000',
                lineWidth:3,
                endArrow:true,
                startArrow:false
              }
            };
            addedCount++;
     }
}

var div = document.getElementById('func1b')    // 插入
      div.addEventListener('click',function(){
      const tmp=document.getElementById("func1").value
      //console.log(tmp);
      queue.enqueue(tmp);
      queue_To_graph();
      graph.data(data);
      graph.render();
      graph.fitView();
     })

var div = document.getElementById('func2b')    // 删除
     div.addEventListener('click',function(){
     queue.dequeue();
     queue_To_graph();
     graph.data(data);
     graph.render();
     graph.fitView();
    })

var div = document.getElementById('func3b')    
    div.addEventListener('click',function(){
    alert(queue.getFront());
   })

var div = document.getElementById('func4b')    
   div.addEventListener('click',function(){
    alert(queue.getRear());
  })

var div = document.getElementById('func5b')    // 清空
    div.addEventListener('click',function(){
    data = {
      nodes: [],
      edges: []
    };
    queue.clear();
    queue_To_graph();
    graph.data(data);
    graph.render();
    graph.fitView();
   })

var div = document.getElementById('func6b')    
    div.addEventListener('click',function(){
      queue.clear();
      data = {
        nodes: [],
        edges: []
      };
      const tmpn=document.getElementById("func6n").value;
      const tmpm=document.getElementById("func6m").value;
      if(tmpn*1<0 || tmpm*1<0)  alert("非法的约瑟夫问题");
      else
      {
        async function w(){
          console.log(queue);
          for(let i=1;i<=tmpn*1;i++)
          {
            queue.enqueue(i);
            queue_To_graph();
            graph.data(data);
            graph.render();
            graph.fitView();
          }
          await sleep(1000);
          for(let j=1;j<tmpn*1;j++)
          {
            for(let i=1;i<tmpm*1;i++)
            {
              var tmp=queue.getFront();
              queue.dequeue();
              queue.enqueue(tmp);
              queue_To_graph();
              graph.data(data);
              graph.render();
              graph.fitView();
              await sleep(1000);
            }
            queue.dequeue();
            queue_To_graph();
            graph.data(data);
            graph.render();
            graph.fitView();
            await sleep(1000);
            console.log(queue.headIdx);
            console.log(queue.tailBackIdx);
            console.log(queue);
            console.log(data);
          }
      }
      w();
      }
    })

    var div = document.getElementById('func7b')
    div.addEventListener('click',function(){
      data = {
        nodes: [],
        edges: []
      };
    let con = document.getElementById('func7').value;
    queue.clear();
    var insert = con.split(" ")
    for(let i = 0;i < insert.length;i++){
      queue.enqueue(insert[i]*1);
    }
    addedCount=0;
        data = {
          nodes: [],
          edges: []
        };
       queue_To_graph();
        graph.data(data);
        graph.render();
        graph.fitView();
  })