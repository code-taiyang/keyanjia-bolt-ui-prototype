{/* ... 前面的代码保持不变 ... */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {algorithms.map((algorithm) => (
    <Link 
      key={algorithm.id} 
      to="/tools/algorithm/editor"
      state={{
        algorithmId: algorithm.id,
        title: algorithm.title,
        description: algorithm.description,
        type: algorithm.type,
        isNew: false
      }}
    >
      {/* ... Card 内容保持不变 ... */}
    </Link>
  ))}
</div>

{/* ... 后面的代码保持不变 ... */}