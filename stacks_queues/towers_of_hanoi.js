class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      return this;
    }
    let oldTop = this.top;
    this.top = node;
    this.top.next = oldTop;
    return this;
  }

  pop() {
    let current = this.top;
    if (!current.next) {
      this.top = null;
      return current.value;
    }
    let oldTop = current.value;
    this.top = this.top.next;
    return oldTop;
  }

}

//change it to static method and put it inside the class Towers
function towersOfHanoi(n) {
  let stack1 = new Stack();
  let stack2 = new Stack();
  let stack3 = new Stack();

  for (let i = n; i > 0; i--) {
    stack1.push(i);
  }
  let prev;

  while (stack1.top || stack2.top) {

    //operating from stack 2
    if (stack2.top && stack2.top.value !== prev) {

      if (!stack3.top || (stack2.top.value < stack3.top.value)) {
        let pop = stack2.pop();
        stack3.push(pop);
        prev = stack3.top.value;
        continue;
      } else if (!stack1.top || (stack2.top.value < stack1.top.value)) {
        let pop = stack2.pop();
        stack1.push(pop);
        prev = stack1.top.value;
        continue;
      }
    }

    //operating from stack 3
    if (stack3.top && stack3.top.value !== prev) {

      if (!stack2.top || (stack3.top.value < stack2.top.value)) {
        let pop = stack3.pop();
        stack2.push(pop);
        prev = stack2.top.value;
        continue;
      } else if (!stack1.top || (stack3.top.value < stack1.top.value)) {
        let pop = stack3.pop();
        stack1.push(pop);
        prev = stack1.top.value;
        continue;
      }
    }

    //operating from stack 1
    if (stack1.top && stack1.top.value !== prev) {

      if (!stack3.top || (stack1.top.value < stack3.top.value)) {
        let pop = stack1.pop();
        stack3.push(pop);
        prev = stack3.top.value;
        continue;

      } else if (!stack2.top || (stack1.top.value < stack2.top.value)) {
        let pop = stack1.pop();
        stack2.push(pop);
        prev = stack2.top.value;
        continue;
      }
    }
    if(!stack1.top && !stack3.top) {
      let pop = stack2.pop();
      stack1.push(pop);
      prev = stack1.top.value;
      continue;
    }
  }
//   console.log(stack3);
}

//make this calls a tet
towersOfHanoi(2);