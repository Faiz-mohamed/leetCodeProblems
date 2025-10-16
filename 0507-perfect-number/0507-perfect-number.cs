public class Solution {
    public bool CheckPerfectNumber(int num) {
        int sum = 0;
        for(var i = 1; i <= num/2; i++)
        {
            if(num % i == 0) sum += i;
        };
        return num == sum;
    }
}