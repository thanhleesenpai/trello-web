export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

// Video 37.2: Cách xử lí bug logic thư viện Dnd-kit khi Column rỗng:
// Phía FE sẽ tự tạo ra một cái card đặc biệt: PlaceHolder Card, không liên quan tới Backend
// Card đặc biệt này sẽ được ẩn ở giao diện UI người dùng
// Cấu trúc Id của card này để Unique gồm:
// "columnId_placeholder-card" (mỗi column chỉ có thể có tối đa một cái Placeholder Card)
// Quan Trọng khi tạo: phải đầy đủ : (_id, boardId, columnId, FE_PlaceholderCard)
export const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  }
}
