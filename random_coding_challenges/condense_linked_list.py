# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def condense_linked_list(node):
    cur = node
    prev = cur
    cache = {}
    while cur != None:
        #print("cur.value: ", cur.value)
        #print("prev.value: ", prev.value)
        if cur.value not in cache:
            cache[cur.value] = 1  
        else:
            prev.next = cur.next
            cur = prev
        prev = cur
        cur = cur.next
    return node

