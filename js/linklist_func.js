import {LinkList} from "./linklist.js"
    
    
let addedCount=1

const list = new LinkList();

function list_To_graph()
{
      data = {
        nodes: [],
        edges: []
      };
      let h=list.head;
      if(h != null)
      { 
          let addedCount=0;
          for(let i=0;i<list.size;i++) {
                data.nodes[i]={
                  x: 50+addedCount*120,
                  y: 200,
                  id: `node-${addedCount}`, 
                  label: h.element};
                addedCount++;
                h=h.next;
          }
          for(let i=0;i<list.size-1;i++){
            data.edges[i] ={
              source: `node-${i}`,
              target: `node-${i+1}`,
              id:`edge-${i}`,
              style:{
                stroke:'#000000',
                lineWidth:3,
                endArrow:true,
                startArrow:false
              }
            };
          }
      }
}

var div = document.getElementById('func1b')    // 尾部插入
      div.addEventListener('click',function(){
      const tmp=document.getElementById("func1").value
      list.add(tmp);
      list_To_graph();
      console.log(list);
      console.log(data);
      console.log(graph);
      graph.data(data);
      graph.render();
      graph.fitView();
     })

var div = document.getElementById('func2b')    // 删除
     div.addEventListener('click',function(){
     const tmp=document.getElementById("func2").value
     list.remove(tmp);
     list_To_graph();
     graph.data(data);
     graph.render();
     graph.fitView();
    })

var div = document.getElementById('func3b')    // 查询
    div.addEventListener('click',function(){
    const tmp=document.getElementById("func3").value
    if(tmp*1<0)  alert("非法查询")
    else  alert(list.getNode(tmp).element);
   })

var div = document.getElementById('func4b')    
   div.addEventListener('click',function(){
   const tmp1=document.getElementById("func4.1").value
   const tmp2=document.getElementById("func4.2").value
   list.insert(tmp1,tmp2);
   list_To_graph();
   graph.data(data);
   graph.render();
   graph.fitview();
  })

var div = document.getElementById('func5b')    // 清空
    div.addEventListener('click',function(){
    data = {
      nodes: [],
      edges: []
    };
    list.clear();
    list_To_graph();
    graph.data(data);
    graph.render();
   })

   var div = document.getElementById('func6b')
   div.addEventListener('click',function(){
     data = {
       nodes: [],
       edges: []
     };
   let con = document.getElementById('func6').value;
   var insert = con.split(" ")
   for(let i = 0;i < insert.length;i++){
     list.add(insert[i]*1);
   }
   addedCount=0;
       data = {
         nodes: [],
         edges: []
       };
      list_To_graph();
       graph.data(data);
       graph.render();
       graph.fitView();
 })

 var div = document.getElementById('func7b')
   div.addEventListener('click',function(){
    data = {
      nodes: [],
      edges: []
    };
    list.clear();
   let con1 = document.getElementById('func7A').value;
   var insert1 = con1.split(" ")
   let con2 = document.getElementById('func7B').value;
   var insert2 = con2.split(" ")
   var idx1=0,idx2=0;
   while(idx1<insert1.length && idx2<insert2.length)
    {
        if(insert1[idx1]*1<insert2[idx2]*1)  {
          list.add(insert1[idx1]*1);
          idx1++;
        }
        else {
          list.add(insert2[idx2]*1);
          idx2++;
        }
    }
    while(idx1<insert1.length)   {
      list.add(insert1[idx1]*1);
      idx1++;
    }
    while(idx2<insert2.length)   {
      list.add(insert2[idx2]*1);
      idx2++;
    }
    console.log(list);
   addedCount=0;
       data = {
         nodes: [],
         edges: []
       };
      list_To_graph();
       graph.data(data);
       graph.render();
       graph.fitView();
 })