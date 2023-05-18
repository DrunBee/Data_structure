class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export class LinkList {
  constructor() {
    this.size = 0
    this.head = null
  }

  add(element) {
    if(this.head === null){
      this.head = new Node(element)
    }else{
      let lastElement = this.getNode(this.size -1)
      lastElement.next = new Node(element)
    }
    this.size ++
  }

  remove(position) {
    // if(postion < 0 || this.postion > this.size) {
    //   throw Error('out of position')
    // }
      if(position == 0) {
        this.head = this.head.next
      } 
      else {
        const preNode = this.getNode(position - 1)
        const curNode = this.getNode(position)
        preNode.next = curNode.next
      }
    this.size --
  }
  insert(position, element) {
    let current = new Node(element)
    if(position === 0) {
      current.next = this.head
      this.head = current
    }else {
      let preNode = this.getNode(position - 1)
      current.next = preNode.next
      preNode.next = current
    }
    this.size ++
  }
  
  getNode(index) {
    // if(index < 0 || index >= this.size) {
    //   throw Error('index out range')
    // }
    let current = this.head
    for(let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  clear(){
    this.head=null;
    this.size=0;
  }
}


