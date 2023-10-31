/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 链表结构
class ListNode {
    constructor(val,next=null){
        this.val = val;
        this.next = next;
    }
}

// 数组转链表
function ArrayToList(arr){
    let root = new ListNode(0);
    let current = root;
    for(let val of arr){
        current.next = new ListNode(val);
        current = current.next;
    }
    return root.next;
}

// 链表转数组
function ListToArray(list){
    let ary = [];
    while(list){
        ary.push(list.val);
        list = list.next;
    }
    return ary;
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2;
    }else if(list2 === null){
        return list1;
    }else if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
};
// @lc code=end


const list1 = ArrayToList([1,2,5]);
const list2 = ArrayToList([0,3,4]);

const mergedList = mergeTwoLists(list1,list2);
console.log(ListToArray(mergedList))