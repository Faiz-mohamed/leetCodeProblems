public class Solution {
    public int LongestConsecutive(int[] nums) {
        if (nums.Length == 0) return 0;
        
        int MaxLength = 0;
        HashSet<int> set = new HashSet<int>(nums);

        foreach (int num in set) {
            if (!set.Contains(num - 1)) {
                int currNum = num;
                int currLength = 1;

                while (set.Contains(currNum + 1)) {
                    currNum++;
                    currLength++;
                }

                if (MaxLength < currLength) MaxLength = currLength;
            }
        }

        return MaxLength;
    }
}