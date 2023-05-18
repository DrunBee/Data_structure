export class Node {
    constructor(key){
      this.key = key;
      this.fa = null;
      this.left = null;
      this.right = null;
      this.x=0;
      this.y=0;
      this.d=300;
      this.cnt=0;
      this.height=0;
    }
  }
  
export class BinarySearchTree {
    constructor() { 
      this.root = null; // Node 类型的根节点
    }
  
    insert(key){
      if(this.root == null){
        this.root = new Node(key);
      }else{
        this.insertNode(this.root, key);
      }
    }
    insertNode(node, key){
      if(key < node.key){
        if(node.left == null){
          node.left = new Node(key);
          node.left.fa = node;
          node.left.height = node.height + 1; 
        }else{
          this.insertNode(node.left, key);
        }
      }else{
        if(node.right == null){
          node.right = new Node(key);
          node.right.fa = node;
          node.right.height = node.height + 1;
        }else{
          this.insertNode(node.right, key);
        }
      }
    }
  
    inOrderTraverse(callback) { 
      this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback){
      if(node !== null){
        this.inOrderTraverseNode(node.left, callback);
        callback(node.key)
        this.inOrderTraverseNode(node.right, callback);
      }
    }
  
    preOrderTraverse(callback) { 
      this.preOrderTraverseNode(this.root, callback); 
    }
    preOrderTraverseNode(node, callback) { 
      if (node != null) { 
        callback(node.key);
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
      } 
    }
  
    postOrderTraverse(callback) { 
      this.postOrderTraverseNode(this.root, callback); 
    }
    postOrderTraverseNode(node, callback) { 
      if (node != null) { 
        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        callback(node.key);
      } 
    }

  
    // 最小值
    min(){
      return this.minNode(this.root);
    }
    minNode(node) { 
      let current = node; 
      while (current != null && current.left != null) {
        current = current.left;
      } 
      return current;
    }
  
    // 最大值
    max(){
      return this.maxNode(this.root);
    }
    maxNode(node) { 
      let current = node; 
      while (current != null && current.right != null) {
        current = current.right;
      } 
      return current;
    }
    clear(){
      this.root=null;
    }


    // 移除一个节点
    remove(key) { 
      this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
      if (node == null) {
        return false; 
      }
  
      if(key < node.key){
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (key > node.key){
        node.right = this.removeNode(node.right, key);
        return node;
      } else {
        // 第一种情况：没有子节点，直接设置为null
        if (node.left == null && node.right == null) {
          node = null;
          return node;
        }
  
        // 第二种情况：有一个子节点，就直接指向它子节点
        if (node.left == null) {
          var tmp=node.fa;
          node = node.right;
          node.fa=tmp;
          return node;
        } else if (node.right == null) {
          var tmp=node.fa;
          node = node.left;
          node.fa=tmp;
          return node;
        }
  
        // 第三种情况：有两个子节点,找到右侧最小的指向它，然后在删掉它
        const aux = this.minNode(node.right);
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
        return node;
      }
    }
  }
  
  