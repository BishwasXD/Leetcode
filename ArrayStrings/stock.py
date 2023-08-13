class Solution(object):
    def maxProfit(self, prices):
       buy = 0
       maxprofit = 0
       for sell in range(1, len(prices)):
        
           if(prices[buy]>prices[sell]):
              buy = sell
           elif(prices[sell]>prices[buy]):
               profit = prices[sell] - prices[buy]
               sell = sell + 1
               
               if(profit>maxprofit):
                   maxprofit = profit
                   
                
       return maxprofit

