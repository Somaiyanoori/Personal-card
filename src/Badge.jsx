import "./App.css";
export default function Badge({ label, value, img }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="image">
          <img src={img} alt="profile" />
        </div>
      </div>
      <span className="card-label">{label}</span>
      <div className="card-body">
        <span className="card-value">{value}</span>
      </div>
    </div>
  );
}
