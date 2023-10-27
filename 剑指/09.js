var CQueue = function() {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.outStack.length){ // !0  
       console.log("如果outStack没有值，需要把inStack中的值倒入!") 
       if(!this.inStack.length){
        console.log("如果入栈的值也为空，那么就玩完了！")
        return -1;
       }
       debugger
       this.in2out();
    }
    // 出栈不等于0，就弹出
    return this.outStack.pop();
};

CQueue.prototype.in2out = function(){
    while(this.inStack.length){
        this.outStack.push(this.inStack.pop())
    }
}

// 示例一：
// 是不是这个意思 ：
// CQueue()      输出：null
// appendTail(3)输出：null
// deleteHead()输出：3
// deleteHead()输出：-1
  
 var obj = new CQueue() 
 var result;
 obj.appendTail(3) 
 debugger 
 result = obj.deleteHead()
 console.log(result)
 debugger 
 result = obj.deleteHead()
 console.log(result)
 debugger 