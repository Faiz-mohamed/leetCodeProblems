public class Solution {
    public int LargestAltitude(int[] gain) {
        int output = 0;
        int temp = 0;
        for(int i = 0; i < gain.Length; i++)
        {
            temp += gain[i];
            if(temp > output) output = temp;
        }
        return output;
    }
}