public class Solution {
    public int MinCostClimbingStairs(int[] cost) {
        if (cost.Length == 0) return 0;
        if (cost.Length == 1) return cost[0];

        int a = cost[0];
        int b = cost[1];

        for (int i = 2; i < cost.Length; i++){
            int curr = cost[i] + Math.Min(a, b);
            a = b;
            b = curr;
        }
        
        return Math.Min(a, b);
    }
}