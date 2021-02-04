def groupingDishes(dishes):
    cache = {}
    #1.)iterate over dishes
    print("cache: ", cache)
    for i in range(len(dishes)):
        print("i: ", dishes[i])
        cache[dishes[i][0]] = []
        for j in range(1,len(dishes[i])):
            print("j: ", dishes[i][j])
            cache[dishes[i][0]].append(dishes[i][j])
    print('cache: ', cache)
    
        
    
    #dishes = [["salad","tomato","cucumber","salad","sauce"],...[...]]
                   ^     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                 recipe        ingredients in recipe
    #cache={
      "salad": ["salad","tomato","cucumber","salad","sauce"],
      .
      .
      .,
    }
    #cache keys are recipe and values are ingredients in recipe
