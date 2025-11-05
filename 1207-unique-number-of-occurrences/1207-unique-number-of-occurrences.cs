public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        foreach(int n in arr)
        {
            if(dict.ContainsKey(n))
            {
                dict[n]++;
            }
            else
            {
                dict.Add(n, 1);
            }
        }
        HashSet<int> set = new HashSet<int>();
        foreach(var pair in dict)
        {
            if(!set.Add(pair.Value))
            {
                return false;
            }
        }
        return true;
    }
}