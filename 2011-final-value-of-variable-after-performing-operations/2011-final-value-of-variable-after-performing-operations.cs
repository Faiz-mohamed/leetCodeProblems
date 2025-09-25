public class Solution {
    public int FinalValueAfterOperations(string[] operations) {
        int x = 0;
        foreach(string s in operations)
        {
            if(s == "X++" || s == "++X")
            {
                x++;
            }
            else
            {
                x--;
            }
        }
        return x;
    }
}