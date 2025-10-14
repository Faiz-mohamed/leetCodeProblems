public class Solution {
    public IList<int> FindDuplicates(int[] nums) {
        List<int> seen = new List<int>();
        List<int> dupes = new List<int>();
        foreach(var n in nums){
            if(seen.Contains(n))
               dupes.Add(n);
            else
               seen.Add(n);
        }
        return dupes;
    }
}