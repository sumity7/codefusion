import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({ label, value, onChange, placeholder, minLength, autoComplete }) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="password-field">
      {label}
      <div className="password-field-wrap">
        <input
          type={visible ? "text" : "password"}
          required
          minLength={minLength}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        <button
          type="button"
          className="password-field-toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
        >
          {visible ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>
      </div>
    </label>
  );
}
