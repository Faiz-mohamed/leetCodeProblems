public class Solution {
    public int[] GetSneakyNumbers(int[] nums) {
        List<int> seen = new List<int>();
        List<int> dupe = new List<int>();
        for(int i = 0; i < nums.Length; i++){
            if(seen.Contains(nums[i]))
            {
                dupe.Add(nums[i]);
            }
            else
            {
                seen.Add(nums[i]);
            }
        }
        return dupe.ToArray();
    }
}