var clumsy = function(N) {
    const stack = [N--];

    let index = 0; // 用于控制乘、除、加、减
    while (N > 0) {
        if (index % 4 == 0) {
            stack.push(stack.pop() * N);
        } else if (index % 4 == 1) {
            const cur = stack.pop();
            stack.push(cur > 0 ? Math.floor(cur / N) : Math.ceil(cur / N));
        } else if (index % 4 == 2) {
            stack.push(N);
        } else {
            stack.push(-N);
        }
        index++;
        N--;
    }

    // 把栈中所有的数字依次弹出求和
    let sum = 0;
    stack.forEach((element) => {
        sum += element;
    })
    return sum;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/clumsy-factorial/solution/ben-jie-cheng-by-leetcode-solution-deh2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。