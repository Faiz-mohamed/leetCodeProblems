public class Solution {
    public bool KLengthApart(int[] nums, int k) {
        int Idx = -1;
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == 1)
            {
                if (Idx != -1 && i - Idx - 1 < k) return false;
                Idx = i;
            }
        }
        return true;
    }
}