public class Solution {
    public int ClimbStairs(int n) {
        int prev = 0;
        int curr = 1;
        for (int i = 2; i <= n+1; i++){
            int next = prev + curr;
            prev = curr;
            curr = next;
        } 
        return curr;
    }
}