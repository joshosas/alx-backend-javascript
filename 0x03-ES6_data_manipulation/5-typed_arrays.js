export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const bufferView = new DataView(buffer, 0, length);
  bufferView.setInt8(position, value);
  return bufferView;
}
