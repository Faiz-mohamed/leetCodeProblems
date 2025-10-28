public class Solution
{
    public int Compress(char[] chars)
    {
        int write = 0;
        char val = chars[0];
        int count = 1;

        void makeArr(int count, char val)
        {
            chars[write++] = val;

            if (count != 1)
            {
                string s = count.ToString();
                foreach (char c in s)
                {
                    chars[write++] = c;
                }
            }
        }

        for (int i = 1; i < chars.Length; i++)
        {
            if (val == chars[i])
            {
                count++;
            }
            else
            {
                makeArr(count, val);
                val = chars[i];
                count = 1;
            }
        }

        makeArr(count, val);

        return write;
    }
}
