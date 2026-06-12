def kruskal(edges):
    parent = {}

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        parent[find(x)] = find(y)

    nodes = set()

    for u, v, cost in edges:
        nodes.add(u)
        nodes.add(v)

    for node in nodes:
        parent[node] = node

    edges.sort(key=lambda x: x[2])

    mst = []
    total_cost = 0

    for u, v, cost in edges:
        if find(u) != find(v):
            union(u, v)
            mst.append({
                "from": u,
                "to": v,
                "cost": cost
            })
            total_cost += cost

    return mst, total_cost