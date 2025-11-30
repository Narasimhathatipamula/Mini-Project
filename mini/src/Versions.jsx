export default function VersionItem({ v }) {
  return (
    <div style={{
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      marginBottom: "12px"
    }}>
      <div><strong>ID:</strong> {v.id}</div>
      <div><strong>Timestamp:</strong> {v.timestamp}</div>
      <div><strong>Added:</strong> {v.addedWords.join(", ") || "(none)"}</div>
      <div><strong>Removed:</strong> {v.removedWords.join(", ") || "(none)"}</div>
      <div><strong>Old Length:</strong> {v.oldLength}</div>
      <div><strong>New Length:</strong> {v.newLength}</div>
    </div>
  );
}
