from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        Map = {}
        res = []
        for i in range(len(nums)):
            Map[nums[i]] = i

        for i in range(len(nums)):
            minus = Map.get(target - nums[i])
            if minus and minus != i:
                res = [i, minus]
                break

        return res


obj = Solution()
# obj.twoSum([2, 3, 1, 4, 5, 6], 6)
obj.twoSum([2,5,5,11], 10)
