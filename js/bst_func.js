import {BinarySearchTree} from "./bst.js"
import {sleep} from "./sleep.js"
import {Node} from "./bst.js"

const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(7); 
// tree.insert(15); 
// tree.insert(5); 
// tree.insert(3); 
// tree.insert(9); 
// tree.insert(8); 
// tree.insert(10); 
// tree.insert(13); 
// tree.insert(12); 
// tree.insert(14); 
// tree.insert(20); 
// tree.insert(18); 
// tree.insert(25);
// tree.insert(6);    

var div = document.getElementById('func1b')    
      div.addEventListener('click',function(){
      var tmp=document.getElementById("func1").value
      tree.insert(tmp*1);
      var Root=tree.root;
      addedCount=0;
      data = {
        nodes: [],
        edges: []
      };
     // console.log(tree);
      tree_To_graph(Root,-1);
      graph.data(data);
      graph.render();
      graph.fitView();
     })


var div = document.getElementById('func2b')    
     div.addEventListener('click',function(){
     var tmp=document.getElementById("func2").value
     tree.remove(tmp*1);
     console.log(tree);
     var Root=tree.root;
     addedCount=0;
     data = {
      nodes: [],
      edges: []
    };
     tree_To_graph(Root,-1);
     console.log(data);
     graph.data(data);
     graph.render();
     graph.fitView();
    })

     var div = document.getElementById('func3b')    
     div.addEventListener('click',function(){
     for(let i=0;i<addedCount;i++)
     {
        data.nodes[i].style={
          radius: 10,
            stroke: '#00C0A5',
            fill: '#92949F',
            fillOpacity: 0.45,
            lineWidth: 2,
          //fill: '#666',
          fontSize: 14,
          fontWeight: 'bold'
        }
     }
     var tmp=document.getElementById("func3").value
     var root=tree.root;
     search(root,(tmp*1));
     change_target_color(tmp*1);
     console.log(tree);
     console.log(data);
     graph.data(data);
     graph.render();
     graph.fitView();
    })



    var div = document.getElementById('func3b2')    
     div.addEventListener('click',function(){
      for(let i=0;i<addedCount;i++)
      {
         data.nodes[i].style={
           radius: 10,
             stroke: '#00C0A5',
             fill: '#92949F',
             fillOpacity: 0.45,
             lineWidth: 2,
           //fill: '#666',
           fontSize: 14,
           fontWeight: 'bold'
         }
      }
      graph.data(data);
     graph.render();
     graph.fitView();
     })

   var div = document.getElementById('func4b')    
     div.addEventListener('click',function(){
      tree.clear();
      console.log(tree);
      tree_To_graph(tree.root,-1);
      data = {
        nodes: [],
        edges: []
      };
      graph.data(data);
     graph.render();
     graph.fitView();
     })


     var div = document.getElementById('func5b')    
     div.addEventListener('click',function(){
          var list=[];
          const printNode = (value)=> list.push(value);
          tree.preOrderTraverse(printNode);
          console.log(list);
          console.log(tree);
          console.log(data);
          
             async function w(){
              for(let i=0;i<list.length;i++)
              {
              change_color(list[i]);
              await sleep(1000);
              }
            }
            w();
     })

     var div = document.getElementById('func6b')    
     div.addEventListener('click',function(){
          var list=[];
          const printNode = (value)=> list.push(value);
          tree.inOrderTraverse(printNode);
          console.log(list);
          console.log(tree);
          console.log(data);
          
             async function w(){
              for(let i=0;i<list.length;i++)
              {
              change_color(list[i]);
              await sleep(1000);
              }
            }
            w();
     })

     var div = document.getElementById('func7b')    
     div.addEventListener('click',function(){
          var list=[];
          const printNode = (value)=> list.push(value);
          tree.postOrderTraverse(printNode);
          console.log(list);
          console.log(tree);
          console.log(data);
          
             async function w(){
              for(let i=0;i<list.length;i++)
              {
              change_color(list[i]);
              await sleep(1000);
              }
            }
            w();
     })

     var div = document.getElementById('func8b')    
     div.addEventListener('click',function(){
        var list=levelTraverse(tree.root);
        console.log(list);
        async function w(){
          for(let i=0;i<list.length;i++)
          {
          change_color(list[i]);
          await sleep(1000);
          }
        }
        w();
     })

     var div = document.getElementById('func9b')    
     div.addEventListener('click',function(){
      var list=[];
      const printNode = (value)=> list.push(value);
      tree.inOrderTraverse(printNode);
      tree.root=BSTtoAVL(list);
      console.log(list);
      addedCount=0;
       console.log(tree);
      data = {
        nodes: [],
        edges: []
      };
      tree_To_graph(tree.root,-1);
      graph.data(data);
      graph.render();
      graph.fitView();
     })

  var div = document.getElementById('func10b')
  div.addEventListener('click',function(){
    tree.clear();
    data = {
      nodes: [],
      edges: []
    };
  let con = document.getElementById('func10').value;
  var insert = con.split(" ")
  for(let i = 0;i < insert.length;i++){
    tree.insert(insert[i]*1);
  }
  addedCount=0;
      data = {
        nodes: [],
        edges: []
      };
     // console.log(tree);
      tree_To_graph(tree.root,-1);
      graph.data(data);
      graph.render();
      graph.fitView();
})

let addedCount=0;

var d=100;

function  BSTtoAVL(list) {
  var len = list.length;
  if(list == null ) return null;
  var mid = Math.floor(len / 2);
  var root = new Node(list[mid]);
  var left = copyOfRange(list,0,mid);
  var right = copyOfRange(list,mid+1,len);
  // console.log(left);
  // console.log(right);
  if(left!=null){
    root.left=BSTtoAVL(left);
    root.left.fa=root;
  }
  if(right!=null){
    root.right=BSTtoAVL(right);
    root.right.fa=root;
  }
  return root;
}
function copyOfRange(list,start,end){
  if(start > end-1) return null;
  if(start == end-1)  return [list[start]];
  var tmp=[];
  for(let i=start;i<end;i++)
  {
    tmp.push(list[i]);
  }
  return tmp;
}

async function change_color(key){
  for(let i=0;i<addedCount;i++) {
    if(data.nodes[i].label == key){
      data.nodes[i].style={
        fill:'#9F79EE'
      }     
      graph.data(data);
      graph.render();
      graph.fitView();
      await sleep(1000);
      data.nodes[i].style={
        radius: 10,
          stroke: '#00C0A5',
          fill: '#92949F',
          fillOpacity: 0.45,
          lineWidth: 2,
        //fill: '#666',
        fontSize: 14,
        fontWeight: 'bold'
      }
      graph.data(data);
      graph.render();
      graph.fitView();
    }
   }
}

async function change_target_color(key){
  for(let i=0;i<addedCount;i++) {
    if(data.nodes[i].label == key){
      data.nodes[i].style={
        fill:'#FFD700'
      }
      
    }
   }
}
function search(node, key){
  if (node == null) {
    alert("No this number");
    return false; 
  }
  if(key < node.key){
    search(node.left, key);
  } else if (key > node.key){
    search(node.right, key);
  } else {
    change_target_color(node.key);
   // alert("Finish");
    return true;
  }
  change_color(node.key);
}

function levelTraverse(root) {
  let res = [];
    let queue = [root];
    while (queue.length != 0) {
        let node = queue.shift();
        res.push(node.key);
        if (node.left != null) queue.push(node.left);
        if (node.right != null) queue.push(node.right);
    }
    return res;
}

function tree_To_graph(node,dir){
    if(node !== null){
        if( dir == 0 ){
            data.nodes[addedCount]={
                x: node.fa.x-node.fa.d,
                y: node.fa.y+100,
                id: `node-${addedCount}`, 
                label: node.key
            };
            node.x=node.fa.x-node.fa.d;
            node.y=node.fa.y+100;
            node.d=node.fa.d/2;
            node.cnt=addedCount;
             data.edges[addedCount-1]={
                source: `node-${node.fa.cnt}`,
                target: `node-${addedCount}`,
                id:`edge-${addedCount-1}`,
                style:{
                stroke:'#000000',
                lineWidth:3,
                endArrow:true,
                startArrow:false
              }
            }
        }
        else{
            if( dir == 1)
            {
                data.nodes[addedCount]={
                    x: node.fa.x+node.fa.d,
                    y: node.fa.y+100,
                    id: `node-${addedCount}`, 
                    label: node.key
                };
                data.edges[addedCount-1]={
                    source: `node-${node.fa.cnt}`,
                    target: `node-${addedCount}`,
                    id:`edge-${addedCount-1}`,
                    style:{
                    stroke:'#000000',
                    lineWidth:3,
                    endArrow:true,
                    startArrow:false
                  }
                }
                node.x=node.fa.x+node.fa.d;
                node.y=node.fa.y+100;
                node.d=node.fa.d/2;
                node.cnt=addedCount;
            }
            else{
                data.nodes[0]={
                    x: 200,
                    y: 100,
                    id: `node-${addedCount}`, 
                    label: node.key
                };
                node.x=200;
                node.y=100;
                node.cnt=addedCount;
            }
        } 
        addedCount++;
        tree_To_graph(node.left, 0);
        tree_To_graph(node.right, 1);
      }

}


    //  tree_To_graph(Root,-1);
     graph.data(data);
     graph.render();
     graph.fitView();





