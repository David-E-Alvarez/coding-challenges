class Solution(object):
    def arrayStringsAreEqual(self, word1, word2):
        """
        :type word1: List[str]
        :type word2: List[str]
        :rtype: bool
        """
        str1 = ""
        str2 = ""
        for word in word1:
            str1 += word
        print("str1: ", str1)
        for word in word2:
            str2 += word
        print("str2: ", str2)
        if str1 == str2:
            return True
        else:
            return False
        
