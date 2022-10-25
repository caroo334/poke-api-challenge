import { Button } from "./Button";
import "../styles/Error.css";

export const Error = ({ onRetry, message }) => (
  <div className="error-container">
    <div className="error-message">
      <span>{message}</span>
    </div>
    <Button onClick={() => onRetry()}>Reintentar 🤔</Button>
  </div>
);
