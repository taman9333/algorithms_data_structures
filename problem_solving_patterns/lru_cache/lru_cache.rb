class Node
  attr_accessor :value, :key, :next, :prev
    
  def initialize(value=nil, key=nil)
    @value = value
    @key = key
    @next = nil
    @prev = nil
  end
end

class LRUCache
  attr_accessor :cap, :size, :cache, :head, :tail
  
  def initialize(capacity)
    @cap = capacity
    @size = 0
    @cache = {}
    @head = Node.new
    @tail = Node.new
    
    @head.next = @tail
    @tail.prev = @head
  end

  def get(key)  
    if node = cache[key]
      delete(node)
      add(node)
    end

    node&.value || -1
  end

  def put(key, value)    
    node = cache[key]
    
    delete(node) if node
    add(Node.new(value, key))
  end
    
private
    
  def add(node)
    old_next = head.next
    head.next = node
    node.next = old_next
    node.prev = head
    old_next.prev = node
    
    cache[node.key] = node
    self.size += 1
    
    delete(tail.prev) if size > cap
  end
    
  def delete(node)
    prev = node.prev
    prev.next = node.next
    node.next.prev = prev

    cache.delete(node.key)
    self.size -= 1
  end
end