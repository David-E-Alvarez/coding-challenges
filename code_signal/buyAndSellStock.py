def buyAndSellStock(prices):
    lookup_table = {}
    most_profit = 0
    for i in range(0, len(prices)):
        for j in range(0, len(prices)):
            print("i: ", i, "j: ", j)
            if prices[i] - prices[j] > most_profit and i > j:
                most_profit = prices[i] - prices[j]
            #if (prices[i] - prices[j]) not in lookup_table:
                #lookup_table[prices[i] - prices[j]] = 1
            #else:
                #lookup_table[prices[i] - prices[j]] += 1
    return most_profit
    #print("lookup_table: ", lookup_table)
            
