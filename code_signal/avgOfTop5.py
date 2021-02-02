import math
students = [[1,91], 
 [1,92], 
 [2,93], 
 [2,97], 
 [1,60], 
 [2,77], 
 [1,65], 
 [1,87], 
 [1,100], 
 [2,100], 
 [2,76]]


cache = {}


# build cache of students
# i.e. cache[student] = grades
#1.) iterate over students list
  # add student as key and scores as value
  #add scores to list
  # check if student is in cache  
    #add if not and their first grade
    #if they are add the grade

for student in students:
  if student[0] not in cache:
    cache[student[0]] = [student[1]]
  else:
    cache[student[0]] += [student[1]]

ans = [] 
print("ans: ", ans)
i = 0
for key in cache.keys():
  temp = cache[key]
  temp.sort()
  ans2 = []
  avg = 0
  if len(temp) > 5:
    avg = sum(temp[1:]) / 5
    ans2.append(key)
    ans2.append(math.floor(avg))
    i += 1
  else:
    avg = sum(temp) / 5
    ans2.append(key)
    ans2.append(math.floor(avg))
    i += 1

  ans.append(ans2)
  print("vals for key  ", key, ":", temp)
  print("ans2: ", ans2)
print("ans: ", ans)

#avg_value = sum(list_of_values) / len(list_of_values)



