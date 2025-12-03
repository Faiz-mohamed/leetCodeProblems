public class Solution {
    public int PivotInteger(int n) {
        int right = n * (n + 1) / 2;
        int left = 0;
        for (int i = 1; i <= n; i++){
            left += i;
            if (left == right) return i;
            right -= i;
        }
        return -1;
    }
}